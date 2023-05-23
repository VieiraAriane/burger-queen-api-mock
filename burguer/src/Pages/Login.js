import Botao from "../componentes/Botao/Botao";
import { EstiloLogin } from "../componentes/Header/Header";
import Input from "../componentes/Input";
import React, { useState } from "react";
import'./style.css'


const Logar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  async function apiUrl(email, password) {
    const response = await fetch(
      "https://burger-queen-api-mock-mu.vercel.app/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),

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
      <EstiloLogin/>
      <Input
        aoSalvar={(valor) => setEmail(valor)}
        placeholder="Digite seu e-mail"
        type="email"
        value={email}
        name="email"
      />
      <Input
        aoSalvar={(valor) => setPassword(valor)}
        type="password"
        placeholder="Digite sua"
        value={password}
        name="password"
      />
    <Botao
    label="PLAY"
     />
    </form>
  );
};
export default Logar;
