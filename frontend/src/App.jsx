import React from 'react'
import Home from './pages/Home'
import AddNote from './pages/AddNote'
import { Routes, Route, Navigate } from 'react-router-dom'
import NotesList from './pages/NotesList'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/notes-list" element={<NotesList/>} />
      <Route path="/add-note" element={<AddNote />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default App