function EventDemo() {
  function handleClick(event) {
    console.log(event.target.value);
  }

  function handleSelect(title) {
    console.log(`Ausgewählt: ${title}`);
  }

  return (
    <div>
      <input />

      <button value="Button 1" onClick={handleClick}>
        Klick mich der Erste!
      </button>
    </div>
  );
}

export default EventDemo;