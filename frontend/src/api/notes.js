import axios from "axios";

const BACKEND_URL = "https://notely-xzcc.onrender.com";

export const createNote = async(noteData) => {
    try{
        const res = await axios.post(`${BACKEND_URL}/notes`, noteData);
        console.log(res);
        return res.data;
    }
    catch(error){
        console.log("Error in creating the note",error);
    }
}
export const getNotes = async () => {
    try{
        const res = await axios.get(`${BACKEND_URL}/notes`);
        console.log(res.data);
        return res.data;
    }
    catch(error){
        console.log("Error in fetching the data",error);
    }
}

export const fetchNoteById = async(id) => {
    try{
        const res = await axios.get(`${BACKEND_URL}/notes/${id}`);
        console.log(res.data.note);
        return res.data.note;
    }
    catch(error){
        console.log("Error in fetching the note",error);
    }
}
export const updateNote = async(noteId, { title, description }) => {
    try{
        const res = await axios.patch(`${BACKEND_URL}/notes/${noteId}`, { title, description });
        console.log(res.data);
        return res.data;
    }
    catch(error){
        console.log("Error in updating the note",error);
    }
}

export const deleteNote = async(noteId) => {
    try{
        const res = await axios.delete(`${BACKEND_URL}/notes/${noteId}`);
        console.log(res.data);
    }
    catch(error){
        console.log("Error in deleting the note",error);
    }
}