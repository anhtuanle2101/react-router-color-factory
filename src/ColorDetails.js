import React, { useEffect } from "react";
import { useParams, useNavigate, Link} from "react-router-dom";


const ColorDetails = ({colors})=>{
    const {color} = useParams();
    const navigate = useNavigate();
    console.log(!colors.includes(color));
    
    useEffect(()=>{
        if (!colors.includes(color))
        navigate("/colors")
    })
    return (
        <div style={{backgroundColor:color, color:"white"}}>
            <p>This is {color}</p>
            <p>Isn't it beautiful</p>
            <Link to="/colors">GO BACK</Link>
        </div>
    )
}

export default ColorDetails;