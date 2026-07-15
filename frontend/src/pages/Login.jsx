import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleAuth = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage('');

  try {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: isSignUp ? 'signup' : 'signin',
        email,
        password,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setMessage(`❌ Erro: ${result.error}`);
    } else {
      setMessage(isSignUp ? '✅ Conta criada! Verifique seu email.' : '✅ Login realizado!');
      if (!isSignUp) {
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 2000);
      }
      setEmail('');
      setPassword('');
    }
  } catch (err) {
    setMessage(`❌ Erro: ${err.message}`);
  }

  setLoading(false);
};
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '40px', 
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
          🐷 PIG
        </h1>

        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '20px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            {loading ? 'Processando...' : (isSignUp ? 'Criar Conta' : 'Entrar')}
          </button>
        </form>

        {message && (
          <p style={{
            marginTop: '15px',
            textAlign: 'center',
            color: message.includes('❌') ? '#d9534f' : '#5cb85c',
            fontSize: '14px'
          }}>
            {message}
          </p>
        )}

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>
          {isSignUp ? 'Já tem conta? ' : 'Não tem conta? '}
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            style={{
              background: 'none',
              border: 'none',
              color: '#007bff',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {isSignUp ? 'Entrar' : 'Criar conta'}
          </button>
        </p>
      </div>
    </div>
  );
}