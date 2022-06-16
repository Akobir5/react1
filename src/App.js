import React, {useState, useEffect} from 'react';
import './App.css';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Section from './components/Section';
import axios from 'axios';

function App() {

  const [comment, setComment] = useState([]);

  useEffect(() => {
    async function getComment() {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/comments'
      );
      setComment(response.data);
    }
    getComment();
  }, []);

  return (
    <div className="App">
      {comment.map(comment => {
        return (
          <div key={comment.id}>
            <h1>{comment.name}</h1>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        )
      })}
      
      {/* <Header/>
      <Section/>
      <Footer/> */}

    </div>
  );
}

export default App;
