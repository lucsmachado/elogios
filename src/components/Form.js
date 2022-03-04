const Form = ({ textInput, onChange, onSubmit }) => {
  return (
    <div>
      <h1>Faça elogios a si mesmo</h1>
      <form onSubmit={onSubmit}>
        <input required type="text" placeholder="Sou uma pessoa..." value={textInput} onChange={onChange} />
        <input type="submit" value="Elogiar" />
      </form>
    </div>
  );
};

export default Form;