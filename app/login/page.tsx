'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Define tu contraseña
  const PASSWORD = 'boda2026'; // Cambia esto por tu contraseña segura

  const handleLogin = () => {
    if (password === PASSWORD) {
      // Guardar estado de acceso en localStorage (temporal)
      localStorage.setItem('acceso', 'true');
      router.push('/'); // Redirige a la página principal o vista general
    } else {
      setError('Contraseña incorrecta');
    }
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Acceso privado</h1>
      <input
        type="password"
        placeholder="Ingresa la contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </main>
  );
}