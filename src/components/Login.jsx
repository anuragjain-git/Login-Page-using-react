import React from "react";

function Login() {
  const [isMouseOver, setMouseOver] = React.useState(false);
  
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  return (
    <form className="form container">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button 
            type="submit" 
            style={{ backgroundColor: isMouseOver ? "black" : "white" }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>Login
        </button>
    </form>
  );
}

export default Login;