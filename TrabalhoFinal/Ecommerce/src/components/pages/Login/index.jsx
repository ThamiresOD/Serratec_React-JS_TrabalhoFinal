import "./style.css";
import { useState } from "react";
import Header from "../../Header/header";




const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    console.log("Login: ", login);
    console.log("Senha: ", senha);
  };

  return (
    <>
      <Header/>
      <div>
        <h1>Faça seu Login</h1>

        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Digite seu login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <h2>Senha</h2>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div style={{ marginTop: 20 }}>
          <input type="button" value="ENTRAR" onClick={handleLogin} />
        </div>
      </div>

    </>
  );
};

export default Login;
