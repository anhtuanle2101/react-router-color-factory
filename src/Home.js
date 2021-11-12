import React from "react";
import { Link } from "react-router-dom";
// import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";

const Home = ({colors})=>{
    return (
        <div className="Home">
            <h1>Welcome to color factory</h1>
            <Link to="/colors/new" >Add new Color</Link>
            <ColorList colors={colors}/> 
        </div>
    )
}

export default Home;