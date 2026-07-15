import React from 'react'
import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isSignUp, setIsSignUp] = useState(false)

  const handleAuth = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        setError('Verifique seu email!')
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', width: '400px' }}>
        <h1 style={{ textAlign: 'center' }}>🐷 PIG</h1>
        <form onSubmit={handleAuth}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required style={{ width: '100%', padding: '8px', marginBottom: '15px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required style={{ width: '100%', padding: '8px', marginBottom: '20px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }} />
          {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
          <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            {isSignUp ? 'Criar Conta' : 'Entrar'}
          </button>
        </form>
        <button type="button" onClick={() => setIsSignUp(!isSignUp)} style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', marginTop: '15px', width: '100%' }}>
          {isSignUp ? 'Já tem conta?' : 'Criar conta'}
        </button>
      </div>
    </div>
  )
}
