import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen w-screen flex flex-col'>
        <div className='Navbar h-[10%] w-full bg-[#EAE0D5] md:px-6 flex items-center justify-between'>
            <div className='text-gray-900 text-2xl md:text-3xl font-bold font-serif ml-0.5'>Notely</div>
            <div className='flex gap-4 md:gap-8 px-4 py-2 mr-2'>
                <Link to="/add-note" className='text-white bg-blue-600 md:text-lg rounded-lg text-center p-2 text-nowrap'>Add Note</Link>
                <Link to="/notes-list" className='text-white bg-blue-600 text-md md:text-lg rounded-lg text-center p-2 text-nowrap'>View All Notes</Link>
            </div>
        </div>
        <div className='Notes h-[90%] w-full bg-[#22333B] overflow-y-auto p-6 flex items-center justify-center'> 
            <div className='bg-[#EAE0D5] flex items-center justify-center text-xl m-8 p-6 rounded-xl shadow-lg border border-gray-200 text-center max-w-2xl'>
                Welcome, to notes app! Click on "Add Note" to create a new note or "View All Notes" to see your existing notes. Happy note-taking!
            </div>
            </div>
    </div>
  )
}

export default Home