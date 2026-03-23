import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate} from 'react-router-dom'; 
import { createNote, fetchNoteById, updateNote } from '../api/notes';

const AddNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
        const fetchNote = async () => {
            try {
                const res = await fetchNoteById(id);
                console.log("Fetched Note:", res);

                if(res){
                    setNote({
                        title: res.title,
                        description: res.description
                    });
                }
            } catch (error) {
                console.log("Error in fetching the note", error);
            }
        };

        fetchNote();
    }
}, [id]);

  const [note, setNote] = useState({
    title: '',
    description: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(id){
      try{
        const res = await updateNote(id, note);
        console.log("Success:", res);
        alert("Note updated successfully");
        navigate("/notes-list");
      }
      catch(error){
        console.error("Error updating note:", error);
      }
    }
    else{
      try {
        const res = await createNote(note);
        console.log("Success:", res);
        alert("Note created successfully");
        setNote({ title: '', description: '' });
        navigate("/home");
      }
      catch (error) {
        console.error("Error creating note:", error);
      }
    }
    
  };

  return (
    <div className='w-full min-h-screen bg-[#22333B] flex items-center justify-center p-6'>
      <div className="w-full max-w-md">
        
        {/* Only ONE Back Button, placed outside the white card for a cleaner look */}
        <Link to="/" className="text-[#EAE0D5] mb-4 inline-flex items-center hover:text-white transition-colors">
          <span className="mr-2">←</span> Back to Dashboard
        </Link>

        {/* The White Form Card */}
        <div className="w-full p-6 bg-white rounded-xl shadow-xl border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">
            {id ? "Edit Note" : "Add a New Note"}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-600 uppercase mb-2 ml-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={note.title}
                onChange={handleChange}
                placeholder="Title..."
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-600 uppercase mb-2 ml-1">
                Description
              </label>
              <textarea
                name="description"
                value={note.description}
                onChange={handleChange}
                placeholder="Write something..."
                rows="4"
                required
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition-all shadow-md active:scale-95 mt-2 text-sm"
            >
              {id ? "Update Note" : "Add Note"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;