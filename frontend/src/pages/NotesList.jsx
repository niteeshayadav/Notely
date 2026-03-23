import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard';
import { Link, useNavigate } from 'react-router-dom';
import { deleteNote, getNotes } from '../api/notes';

const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchNotes = async () => {
            try{
                const res = await getNotes();
                console.log("Fetched Notes:", res.notes);
                if (Array.isArray(res.notes)) {
                    setNotes(res.notes);
                } else {
                    console.log("response format is unexpected.");
                    console.log("Response:", res);
                    setNotes([]);
                }
            }
            catch(error){
                console.error("Error fetching notes:", error);
                setNotes([]);
            }
            finally {
                setLoading(false);
            }
        }
        fetchNotes();
    }, []);

    const handleDelete = (noteId) => {
            const deleteNotes = async () => {
                try{
                    const res = await deleteNote(noteId);
                    console.log(res);
                    setNotes(prevNotes => prevNotes.filter(note => note._id !== noteId));
                }
                catch(error){
                    console.error("Error deleting note:", error);
                    alert("Failed to delete the note. Please try again.");
                }
            }
            deleteNotes();
    };


    return (
        <div className="min-h-screen w-full bg-[#22333B] p-4 md:p-8">
            <Link to="/" className="text-[#EAE0D5] mb-6 inline-block hover:underline">
                ← Back to Dashboard
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? 
                    <div className='bg-[#EAE0D5] flex items-center justify-center text-xl m-8 p-6 rounded-xl shadow-lg border border-gray-200 text-center max-w-2xl'>
                        Loading notes...
                    </div>
                    :
                    notes.length > 0 ?
                    (notes.map(note => (
                        <NoteCard 
                            key={note._id}
                            title={note.title}
                            description={note.description}
                            onEdit={() => navigate(`/edit/${note._id}`)}
                            onDelete={() => handleDelete(note._id)}
                        />
                   ))) : (
                    <div className='bg-[#EAE0D5] flex items-center justify-center text-xl m-8 p-6 rounded-xl shadow-lg border border-gray-200 text-center max-w-2xl'>
                        No notes found. Click "Add Note" to create your first note!
                    </div>
                )}
            </div>
        </div>
    )
}

export default NotesList