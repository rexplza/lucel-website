import React from 'react';
import './App.css';

function App() {
  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <section style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Where Music Meets Blockchain
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#ccc', marginBottom: '2rem' }}>
          LUCEL: The Web3 Sound Revolution
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
          <a href="#whitepaper" style={buttonStyle('#FFCC00', 'black')}>Whitepaper 보기</a>
          <a href="#community" style={buttonStyle('#EC4899', 'white')}>커뮤니티 참여하기</a>
          <a href="#contest" style={buttonStyle('#3B82F6', 'white')}>Meme Contest 보기</a>
        </div>
      </section>
    </main>
  );
}

function buttonStyle(bg, color) {
  return {
    backgroundColor: bg,
    color: color,
    padding: '0.75rem 1.5rem',
    borderRadius: '1rem',
    fontWeight: '600',
    textDecoration: 'none'
  };
}

export default App;