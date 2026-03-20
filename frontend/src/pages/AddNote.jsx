import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Don't forget this import!

const AddNote = () => {
  const [note, setNote] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", note);
    // Future step: send to MongoDB here
    setNote({ title: '', description: '' });
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
            New Note
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
              Save Note
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;