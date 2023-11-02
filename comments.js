// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Get all comments
app.get('/comments', (req, res) => {
  res.status(200).send(comments);
});
// Get comments by ID
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find(comment => comment.id === id);
  res.status(200).send(comment);
});
// Add a comment
app.post('/comments', (req, res) => {
  const comment = req.body;
  console.log(comment);
  comments.push(comment);
  res.status(201).send(comment);
});
// Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  const commentIndex = comments.findIndex(comment => comment.id === id);
  if (commentIndex > -1) {
    comments.splice(commentIndex, 1);
  }
  res.status(204).send();
});
// Update a comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const commentIndex = comments.findIndex(comment => comment.id === id);
  if (commentIndex > -1) {
    const newComment = { ...comments[commentIndex], ...req.body };
    comments.splice(commentIndex, 1, newComment);
    res.status(200).send(newComment);
  } else {
    res.status(404).send();
  }
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
// Data
const comments = [
  {
    id: 'a1',
    username: 'gordon',
    comment: 'Oh gee, oh gosh, oh golly',
    likes: 3,
    timestamp: '2019-11-26T23:38:20.000Z'
  },
  {
    id: 'b2',
    username: 'sally',
    comment: 'I agree with Gordon!',
    likes: 2,
    timestamp: '2019-11-26T23:38:20.000Z'
  },
  {
    id: 'c3',
    username: 'fred',
    comment