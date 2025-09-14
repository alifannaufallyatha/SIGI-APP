"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/auth.module.css';

const LoginForm: React.FC = () => {
  const [identifier, setIdentifier] = useState(''); // no_handphone atau email
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (identifier && password) {
      // Simpan data login untuk validasi nantinya
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => 
        (u.phone === identifier || u.email === identifier) && u.password === password
      );
      
      if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        router.push('/');
      } else {
        setError('No handphone/email atau password salah.');
      }
    } else {
      setError('No handphone/email dan password wajib diisi.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.branding}>
        <h1 className={styles.title}>SIGI</h1>
        <p className={styles.subtitle}>Mental Health Check by Nursing Student</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="No Handphone / Email"
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.primaryButton}>Masuk</button>
        <div className={styles.divider}>
          <span>atau</span>
        </div>
        <button 
          type="button" 
          onClick={() => router.push('/daftar')} 
          className={styles.secondaryButton}
        >
          Daftar Akun Baru
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
