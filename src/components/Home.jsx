import React from "react";
import {Link} from "react-router-dom";


function Home() {
  const [fullName, setFullName] = React.useState("");
  const [isMouseOver, setMouseOver] = React.useState(false);
  const [isMouseOver2, setMouseOver2] = React.useState(false);


  function handleFullName(event) {
    const inputText = event.target.value;
    setFullName(inputText);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }
  function handleMouseOver2() {
    setMouseOver2(true);
  }
  function handleMouseOut2() {
    setMouseOver2(false);
  }


  return (
    <div className="container">
      <h1>Hello {fullName}</h1>
      <input
        onChange={handleFullName}
        name="fullName"
        type="text"
        placeholder="What's your name?"
      />
      <Link to="/Register">
        <button
            style={{ backgroundColor: isMouseOver ? "black" : "white" }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            // onClick={handleRegisterClick}
            id="register"
        >
            Register
        </button>
      </Link>
      <Link to="/Login">
        <button
            style={{ backgroundColor: isMouseOver2 ? "black" : "white" }}
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
            // onClick={loginIsClicked}
            id="login"
        >
            Login
        </button>
      </Link>
    </div>
  );
}

export default Home ;