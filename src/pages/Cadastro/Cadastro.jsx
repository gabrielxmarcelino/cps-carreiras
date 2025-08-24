import React, { useState, useEffect } from 'react'
import { CadastroContainer } from './Cadastro.styles'
import { supabase } from '../../supabaseClient'
import { useNavigate } from 'react-router-dom';
export default function Cadastro() {
    const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confirmaSenha, setConfirmaSenha] = useState("")
    const [erros, setErros] = useState([])
    const [loading, setLoading] = useState(false)

    const senhaRequisitos = {
        tamanho: senha.length >= 10,
        maiuscula: /[A-Z]/.test(senha),
        minuscula: /[a-z]/.test(senha),
        numero: /\d/.test(senha),
        especial: /[.!@]/.test(senha),
    }

    const validar = () => {
        const listaErros = []
        if (!nome.trim()) listaErros.push("Nome é obrigatório.")
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!regexEmail.test(email)) listaErros.push("E-mail inválido.")
        if (!Object.values(senhaRequisitos).every(Boolean)) {
            listaErros.push("Senha não atende aos requisitos.")
        }
        if (senha && confirmaSenha && senha !== confirmaSenha) {
            listaErros.push("As senhas não conferem.")
        }
        setErros(listaErros)
    }

    useEffect(() => {
        validar()
    }, [nome, email, senha, confirmaSenha])

    const handleSubmit = async () => {
    if (erros.length === 0) {
        setLoading(true);

        const { data, error } = await supabase.auth.signUp({
            email,
            password: senha,
            options: {
                data: { nome },
            },
        });

        setLoading(false);

        if (error) {
            if (error.message.includes("already registered")) {
                alert("Esse e-mail já está cadastrado.");
            } else {
                alert("Erro ao cadastrar: " + error.message);
            }
            return;
        }

        alert("Cadastro realizado! Verifique seu e-mail para confirmar.");
        navigate("/login");
        setNome("");
        setEmail("");
        setSenha("");
        setConfirmaSenha("");
    }
};






    return (
        <CadastroContainer>
            <div className="border-panel">
                <div className="campo">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" className='form-control' value={nome} onChange={(e) => setNome(e.target.value)} />

                    <label htmlFor="email">E-mail</label>
                    <input type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="senha">Senha</label>
                    <input type="password" className='form-control' value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <label htmlFor="confirmaSenha">Confirme sua senha</label>
                    <input type="password" className='form-control' value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} />

                    <ul style={{ margin: "10px 0", fontSize: "14px" }}>
                        <li style={{ color: senhaRequisitos.tamanho ? "green" : "red" }}>{senhaRequisitos.tamanho ? "✔" : "✘"} Mínimo 10 caracteres</li>
                        <li style={{ color: senhaRequisitos.maiuscula ? "green" : "red" }}>{senhaRequisitos.maiuscula ? "✔" : "✘"} Pelo menos 1 letra maiúscula</li>
                        <li style={{ color: senhaRequisitos.minuscula ? "green" : "red" }}>{senhaRequisitos.minuscula ? "✔" : "✘"} Pelo menos 1 letra minúscula</li>
                        <li style={{ color: senhaRequisitos.numero ? "green" : "red" }}>{senhaRequisitos.numero ? "✔" : "✘"} Pelo menos 1 número</li>
                        <li style={{ color: senhaRequisitos.especial ? "green" : "red" }}>{senhaRequisitos.especial ? "✔" : "✘"} Pelo menos 1 caractere especial (. ! @)</li>
                    </ul>

                    <button type="button" className='button-card' onClick={handleSubmit} disabled={erros.length > 0 || loading}>
                        {loading ? "Cadastrando..." : "Cadastrar"}
                    </button>

                    {erros.length > 0 && (
                        <ul style={{ color: "red", marginTop: "10px" }}>
                            {erros.map((erro, index) => (
                                <li key={index}>{erro}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </CadastroContainer>
    )
}
