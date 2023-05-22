import Input from "../componentes/Input";
import React, { useState } from "react";
// const AcessoToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2ODQ3ODg4MzUsImV4cCI6MTY4NDc5MjQzNSwic3ViIjoiMSJ9.6j90WEGYpYq3oB9dpXuV8b-BDQ2YF36f75XaqWT9fRE"

const Logar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // function submeterFormulario(e) {
  //   e.preventDefault();
  // }
  async function apiUrl(email, password) {
    const response = await fetch(
      "https://burger-queen-api-mock-mu.vercel.app/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),

        //   }).then((response) => {
        //     console.log(response)
        // // setEmail(response);
        // // setPassword(response)
      }
    );
    return response.json();
  }
  const tratarErro = async (e) => {
    e.preventDefault();
    try {
      const chamaApi = await apiUrl(email, password);
      console.log(chamaApi);
    } catch (erro) {
      console.log(erro);
    }
  };

  return (
    <form onSubmit={tratarErro}>
      <Input
        aoSalvar={(valor) => setEmail(valor)}
        placeholder="Isso funciona"
        type="email"
        label="email"
        value={email}
        name="email"
      />
      <Input
        aoSalvar={(valor) => setPassword(valor)}
        type="password"
        label="senha"
        value={password}
        name="password"
      />
      <button>Enviar</button>
    </form>
  );
};

export default Logar;
