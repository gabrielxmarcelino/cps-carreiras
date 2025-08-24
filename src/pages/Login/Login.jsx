import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { LoginContainer } from './Login.styles';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha
    });
    setLoading(false);

    if (error) {
      alert("Erro ao logar: " + error.message);
    } else {
      alert("Login realizado!");
      navigate("/"); // 🔥 redireciona pra home ou perfil
    }
  };

  return (
    <LoginContainer>
      <div className="border-panel">
        <div className="campo">
          <label>E-mail</label>
          <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Senha</label>
          <input type="password" className="form-control" value={senha} onChange={(e) => setSenha(e.target.value)} />

          <button type="button" className="button-card" onClick={handleLogin} disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </div>
      </div>
    </LoginContainer>
  );
}
