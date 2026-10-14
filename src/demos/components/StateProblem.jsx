function StateProblem() {
  let count = 0;

  function handleClick() {
    count = count + 1;
    console.log(count);
  }

  return (
    <>
      <p>Zähler: {count}</p>

      <button onClick={handleClick}>
        +1
      </button>
    </>
  );
}

export default StateProblem;