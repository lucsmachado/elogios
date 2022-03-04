import { useState } from 'react';
import Compliments from './components/Compliments';
import Form from './components/Form';

const App = () => {
  const [complimentText, setComplimentText] = useState('');
  const [compliments, setCompliments] = useState([]);

  const generateId = () => {
    return compliments.length === 0
      ? 1
      : Math.max(...compliments.map(compliment => compliment.id)) + 1;
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const newCompliment = {
      text: complimentText,
      date: new Date(),
      likes: 0,
      id: generateId()
    };

    setCompliments(compliments.concat(newCompliment));
    setComplimentText('');
  }

  const handleChangeComplimentText = (event) => {
    setComplimentText(event.target.value)
  };

  const handleLike = (id) => () => {
    setCompliments(compliments.map(compliment => compliment.id !== id ? compliment : { ...compliment, likes: compliment.likes + 1 }));
  };
  
  return (
    <div>
      <Form 
        textInput={complimentText} 
        onChange={handleChangeComplimentText} 
        onSubmit={handleSubmit} 
      />
      <Compliments compliments={compliments} onLike={handleLike} />
    </div>
  );
};

export default App;
