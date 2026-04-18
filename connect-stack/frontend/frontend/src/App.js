import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("");

  // GET request
  useEffect(() => {
    axios.get("http://localhost:5000/api/message")
      .then(res => {
        setMessage(res.data.message);
      })
      .catch(err => console.log(err));
  }, []);

  // POST request
  const sendData = () => {

    axios.post("http://localhost:5000/api/user", {
      name: name,
      email: email
    })
    .then(res => {
      setResponse(res.data.message);
    })
    .catch(err => console.log(err));

  };

  return (

    <div style={{textAlign:"center", marginTop:"50px"}}>

      <h1>React Frontend</h1>

      <h2>{message}</h2>

      <h3>Send Data to Backend</h3>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br/><br/>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br/><br/>

      <button onClick={sendData}>Send</button>

      <h3>{response}</h3>

    </div>

  );
}

export default App;