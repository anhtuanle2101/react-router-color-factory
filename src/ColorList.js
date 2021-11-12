import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({colors})=>{
    console.log(colors);
    return (
        <div>
            <h3>Please choose a color:</h3>
            {colors.map(color=><p><Link to={`/colors/${color}`}>{color}</Link></p>)}
        </div>
    )
}


export default ColorList;