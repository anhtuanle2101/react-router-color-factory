import React,{useRef} from "react";
import { useNavigate} from "react-router-dom";

const ColorNew = ({setColors})=>{
    const navigate = useNavigate();
    const input = useRef();
    console.log(input);
    const addColor=(e)=>{
        e.preventDefault();
        setColors(colors=>[...colors, input.current.value])
        navigate("/colors");
    }
    return (
        <div>
            <input type="text" name="color" id="color" ref={input}/>
            <button onClick={addColor}>Add</button>
        </div>
    )
}

export default ColorNew;