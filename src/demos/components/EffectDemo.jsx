import { useEffect, useState } from "react";

function EffectDemo(){
    const [count, setCount] = useState(0);
    /*
    use Effect wird folgendermaßen benutzt:
    - ohne Dependency Array: läuft nach jedem Render
    - leeres Dependency Array: läuft nur beim ersten Einbinden der 
        Komponente
    - gefüllte Dependency Array: läuft beim ersten Start und wenn die 
        Eigenschaft(en) geändert werden
    */
    useEffect(() => {
        document.title = `Zähler: ${count}`;
    }, [count]);
    return (
        <>
        <h1>EffectDemo</h1>

        <p>Zähler: {count}</p>

        <button type="button"
        onClick={() => setCount(count +1)}
        >
            +1
        </button>
        </>
    )
}
export default EffectDemo;