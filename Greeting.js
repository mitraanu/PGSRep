import { useState } from "react";

const Greeting=() =>{
    const [changedText,setChangedText]=useState(false);
    const changeTextHandler=() =>{
        setChangedText(true);
    };
    return(
    <div>
        <h2>Hello Jest</h2>
        {!changedText && <p>Happy Learning</p>}
        {changedText && <p>Changed!!</p>}
        <button onClick={changeTextHandler}>ClicktoChange</button>
    </div>
);
}


export default Greeting;
