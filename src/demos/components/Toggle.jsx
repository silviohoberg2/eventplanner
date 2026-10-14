import { useState } from "react";

function Toggle() {
  const [visible, setVisible] = useState(false);

  function handleToggle() {
    setVisible(!visible);
  }

  return (
    <>
      <button onClick={handleToggle}>
        {visible ? "Ausblenden" : "Einblenden"}
      </button>

      {visible && (
        <p>
          Dieser Text kann ein- und ausgeblendet werden.
        </p>
      )}
    </>
  );
}

export default Toggle;