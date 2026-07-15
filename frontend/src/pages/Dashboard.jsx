import React from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Dashboard() {
  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div style={{ padding: '40px' }}>
      <h1>🐷 Dashboard PIG</h1>
      <p>Bem-vindo! Aplicação rodando com sucesso!</p>
      <button onClick={handleLogout} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Sair
      </button>
    </div>
  )
}
