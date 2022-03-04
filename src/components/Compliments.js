import Compliment from "./Compliment";

const Compliments = ({ compliments, onLike }) => {
  if (compliments.length === 0) {
    return (
      <p>Seus elogios aparecerão aqui!</p>
    );
  }

  return (
    <div>
      <h2>Lembre-se de que é...</h2>
      {compliments.map(compliment =>
        <Compliment 
          key={compliment.id} 
          compliment={compliment} 
          onClick={onLike(compliment.id)} 
        />
      )}
    </div>
  );
};

export default Compliments;