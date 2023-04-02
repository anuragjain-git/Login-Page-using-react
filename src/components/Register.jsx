import React from "react";
// import Home from "./Home";


  function Register(props) {
  const [isMouseOver, setMouseOver] = React.useState(false);
  
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  // const fullName = props.location.state.fullName;
  return (
    <form className="form container">
        <h1>Hello {props.fullName}</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button 
            type="submit" 
            style={{ backgroundColor: isMouseOver ? "black" : "white" }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>Register
        </button>
    </form>
  );
}
export default Register;