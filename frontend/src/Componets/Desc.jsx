import React from 'react';
import '../Styles/Desc.css';

const Desc = () => {
  return (
    <div className="description-container">
      <h1>Felhasználókezelő (Full-Stack CRUD)</h1>
      
      <div className="project-overview">
        <h2>📋 Projekt Áttekintés</h2>
        <p>
          Ez egy teljes körű <strong>Full-Stack CRUD alkalmazás</strong> felhasználók kezelésére, 
          amely egyetlen React komponensben implementálva működik.
        </p>
      </div>

      <div className="tech-stack">
        <h2>🛠️ Technológiai Stack</h2>
        <div className="tech-grid">
          <div className="tech-section">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>React Hooks (useState, useEffect)</li>
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
            </ul>
          </div>
          <div className="tech-section">
            <h3>Backend</h3>
            <ul>
              <li>Node.js / Express / vagy más backend framework</li>
              <li>Adatbázis (MySQL, MongoDB, PostgreSQL, stb.)</li>
              <li>REST API</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="crud-operations">
        <h2>⚡ CRUD Műveletek</h2>
        <div className="operations-grid">
          <div className="operation">
            <h3>✅ CREATE</h3>
            <p>Új felhasználók hozzáadása a rendszerhez</p>
          </div>
          <div className="operation">
            <h3>📖 READ</h3>
            <p>Felhasználók listázása és adatainak megjelenítése</p>
          </div>
          <div className="operation">
            <h3>✏️ UPDATE</h3>
            <p>Meglévő felhasználók adatainak módosítása</p>
          </div>
          <div className="operation">
            <h3>🗑️ DELETE</h3>
            <p>Felhasználók eltávolítása a rendszerből</p>
          </div>
        </div>
      </div>

      <div className="features">
        <h2>🎯 Főbb Jellemzők</h2>
        <ul>
          <li>✅ Valós idejű adatkezelés</li>
          <li>✅ Reszponzív dizájn</li>
          <li>✅ Hibakezelés és validáció</li>
          <li>✅ Felhasználóbarát felület</li>
          <li>✅ API integráció</li>
          <li>✅ Állapotkezelés React Hooks segítségével</li>
        </ul>
      </div>

      <div className="architecture">
        <h2>🏗️ Architektúra</h2>
        <div className="arch-flow">
          <div className="arch-step">
            <strong>1. Frontend (React)</strong>
            <p>- Felhasználói interfész</p>
            <p>- Űrlapkezelés</p>
            <p>- API hívások</p>
          </div>
          <div className="arch-arrow">→</div>
          <div className="arch-step">
            <strong>2. Backend API</strong>
            <p>- Adatvalidáció</p>
            <p>- Üzleti logika</p>
            <p>- Adatbázis kommunikáció</p>
          </div>
          <div className="arch-arrow">→</div>
          <div className="arch-step">
            <strong>3. Adatbázis</strong>
            <p>- Adattárolás</p>
            <p>- Adatintegritás</p>
          </div>
        </div>
      </div>

      <div className="single-file-note">
        <h2>📁 Egy Fájlos Implementáció</h2>
        <p>
          <strong>Jelenlegi állapot:</strong> Az alkalmazás egyetlen React komponensben van implementálva,
          amely tartalmazza a teljes felhasználókezelő funkcionalitást.
        </p>
        <p>
          <strong>Lehetséges bővítések:</strong> A kód később modularizálható külön komponensekre, 
          hookokra és service-ekre a skálázhatóság érdekében.
        </p>
      </div>
    </div>
  );
};

export default Desc;