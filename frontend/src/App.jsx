import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from './utils/supabaseClient'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function App() {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription?.unsubscribe()
  }, [])

  if (loading) return <div style={{ textAlign: 'center', paddingTop: '50px' }}>Carregando...</div>

  return session ? <Dashboard /> : <Login />
}
