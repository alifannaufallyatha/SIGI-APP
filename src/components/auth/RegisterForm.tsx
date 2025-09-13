"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../styles/auth.module.css';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone || !email || !password || !confirmPassword) {
      setError('Semua field wajib diisi.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak sama.');
      return;
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Format email tidak valid.');
      return;
    }

    // Validasi format no handphone
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      setError('No handphone harus berupa angka 10-15 digit.');
      return;
    }

    // Simpan user ke localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Cek apakah email atau phone sudah terdaftar
    const existingUser = users.find((u: any) => u.email === email || u.phone === phone);
    if (existingUser) {
      setError('Email atau no handphone sudah terdaftar.');
      return;
    }

    const newUser = { name, phone, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Pendaftaran berhasil! Silakan login.');
    router.push('/login');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.branding}>
        <h1 className={styles.title}>SIGI</h1>
        <p className={styles.subtitle}>Montal FeathCrack</p>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Daftar</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="No Handphone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Konfirmasi Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <button type="submit" className={styles.primaryButton}>Daftar</button>
        <div className={styles.divider}>
          <span>atau</span>
        </div>
        <button 
          type="button" 
          onClick={() => router.push('/login')} 
          className={styles.secondaryButton}
        >
          Kembali ke Login
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
