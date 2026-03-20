import React from 'react'

const NoteCard = ({title, description}) => {
  return (
    <div className="bg-[#EAE0D5] p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 flex flex-col h-full">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{description}</p>
      <div className="mt-4 flex gap-2 justify-end">
        <button className="text-blue-600 hover:text-blue-800 text-xs font-bold">Edit</button>
        <button className="text-red-600 hover:text-red-800 text-xs font-bold">Delete</button>
      </div>
    </div>
  )
}

export default NoteCard