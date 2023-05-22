import Input from "../componentes/Input/Input";
import React from "react";
// const apiUrl = "https://burger-queen-api-mock-mu.vercel.app/"

// const AcessoToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2ODQ3ODg4MzUsImV4cCI6MTY4NDc5MjQzNSwic3ViIjoiMSJ9.6j90WEGYpYq3oB9dpXuV8b-BDQ2YF36f75XaqWT9fRE"

const Logar = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function submeterFormulario(e) {
    e.preventDefault();
  fetch('https://burger-queen-api-mock-mu.vercel.app/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password}),
    }).then((response) => {
      console.log(response)
  // setEmail(response);
  // setPassword(response)
});
  }

  return (
        
      <form onSubmit={submeterFormulario}>
          <Input 
          placeholder="Isso funciona"
          type="email" 
          label="email" 
          value={email} 
          name="email" 
          onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
          type="password" 
          label="senha" 
          value={password} 
          name="password" 
          onChange={(e) => setPassword(e.target.value)}
          />
          <button>Enviar</button>
        </form>
    );
};

export default Logar;
