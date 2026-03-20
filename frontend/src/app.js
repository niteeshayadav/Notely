const express = require('express');
const Note = require("./models/note.model");

const app = express();
app.use(express.json()); //middleware to parse JSON bodies


/*Creating API's*/

//Create a note (POST request)

app.post('/notes', async (req, res) => {
    const data = req.body;
    await Note.create({
        title : data.title,
        description: data.description
    })
    res.status(201).json({
        message : "Note created successfully"
    });
})

//View all notes (GET request)

app.get('/notes', async (req, res) => {
  const notes = await Note.find();  //always returns an array(array of objects) or empty array if there are no notes
  /*
  const notes = await Note.findOne({
    title : "test_title"
  })  //returns a single object if there is a note with title "test_title" otherwise returns null;

  we can also use find() method to find notes with specific title like this:

  const notes = await Note.find({
    title : "test_title"
  })  //returns an array of objects with title "test_title" if there are any otherwise returns empty array;

  Hence,
    find method always returns [ {} , {} , ...] (array of objects) or [] (empty array)
    findone method always returns {} (object) if any thing is present or null if ivalid query or no data is present.
  */
  res.status(200).json({
    message : "Notes fetched successfully",
    notes : notes
  });
})

//To delete a note (DELETE request)

app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id;
    await Note.findByIdAndDelete({
        _id : id
    });
    res.status(200).json({
        message : "Note deleted successfully"
    })
})

//To update a note (PATCH request)

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const description = req.body.description;
    await Note.findByIdAndUpdate({
        _id : id
    },{description : description});
    res.status(200).json({
        message : "Note updated successfully"
    })
})

module.exports = app;