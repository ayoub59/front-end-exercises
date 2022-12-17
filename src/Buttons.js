import React, { useState, useRef } from "react";

function Buttons() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [output, setOutput] = useState();

  function send() {
    setOutput(`${nom} ${" "}${prenom}${" "}${age}`);
  }
  function Delete(e) {
    setNom("");
    setPrenom("");
    setAge("");
    const textOutput = document.querySelector("p");
    textOutput.innerHTML = "";
    setOutput(`${nom} ${" "}${prenom}${" "}${age}`);
  }

  return (
    <div className="conatiner">
      Buttons
      <div>
        <div>
          <label>Nom</label>
          <input
            className="name"
            type="text"
            value={nom}
            onChange={(e) => {
              setNom(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Prenom</label>
          <input
            className="lastname"
            type="text"
            value={prenom}
            onChange={(e) => {
              setPrenom(e.target.value);
            }}
          />
        </div>
        <div>
          <label>age</label>
          <input
            className="age"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <button className="btn" onClick={send}>
            Valider
          </button>
          <button className="btn" onClick={Delete}>
            Annuler
          </button>
          <p className="output">{output}</p>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
