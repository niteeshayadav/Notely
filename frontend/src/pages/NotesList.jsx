import React from 'react'
import NoteCard from '../components/NoteCard';
import { Link } from 'react-router-dom';

const NotesList = () => {
    // Dummy Data Array
    const dummyNotes = [
        { id: 1, title: "MERN Stack Goals", description: "Finish the frontend by tonight and start working on Express routes tomorrow."},
        { id: 2, title: "Groceries", description: "Buy milk, eggs, bread, and some fruits for the week."},
        { id: 3, title: "KrishnaVerse Update", description: "Add a new feature to share verses on social media directly from the app."},
        { id: 4, title: "Gym Routine", description: "Push day: Bench press, Overhead press, Tricep extensions. Don't forget to stretch!"}
    ];
    return (
        <div className="min-h-screen w-full bg-[#22333B] p-4 md:p-8">
            <Link to="/" className="text-[#EAE0D5] mb-6 inline-block hover:underline">
                ← Back to Dashboard
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyNotes.map(note => (
                    <NoteCard 
                        key={note.id}
                        title={note.title}
                        description={note.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default NotesList