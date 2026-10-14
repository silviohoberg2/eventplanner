function InteractionDemo() {

  function handleChange(event) {
    console.log(event.target.value);

  }

  function handleClick() {
    console.log("Button wurde geklickt");
  }
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        Klick mal bitte!
      </button>
    </>
  );
}

export default InteractionDemo;