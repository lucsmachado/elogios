const Compliment = ({ compliment, onClick }) => {
  return (
    <div>
      <p>{compliment.date.toLocaleDateString()}</p>
      <p>{compliment.text}</p>
      <button onClick={onClick} >❤ {compliment.likes}</button>
    </div>
  );
};

export default Compliment;