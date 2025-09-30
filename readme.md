# Felhasználókezelő Alkalmazás (Full-Stack CRUD)

Egy teljes körű **React + Node.js** alkalmazás felhasználók kezelésére, amely támogatja a **CRUD** (Create, Read, Update, Delete) műveleteket.

---

## 🚀 Funkcionalitások

* **Felhasználók listázása** – Összes felhasználó megjelenítése táblázatos formában
* **Új felhasználó hozzáadása** – Űrlap segítségével új felhasználók regisztrálása
* **Felhasználók szerkesztése** – Inline szerkesztés közvetlenül a táblázatban
* **Felhasználók törlése** – Biztonsági megerősítéssel ellátott törlés
* **Valós idejű frissítés** – Automatikus lista frissítés minden művelet után
* **Hibakezelés** – Átfogó hibakezelés frontend és backend oldalon

---

## 🛠️ Technológiák

### Frontend

* React – Modern UI könyvtár
* Axios – HTTP kliens
* CSS – Egyedi stílusozás
* Custom Hooks – Újrafelhasználható logika

### Backend

* Node.js – Szerver oldali runtime
* Express.js – Webalkalmazás keretrendszer
* MySQL – Relációs adatbázis
* CORS – Cross-Origin Resource Sharing
* mysql2/promise – MySQL adatbázis driver

---

## 📁 Projekt Struktúra

```
src/
├── components/
│   ├── UserForm.jsx      # Új felhasználó hozzáadása/szerkesztése
│   ├── UserTable.jsx     # Felhasználók táblázatos megjelenítése
│   ├── UserRow.jsx       # Egyedi felhasználó sor komponens
│   ├── Loading.jsx       # Betöltés indikátor
│   └── Error.jsx         # Hibaüzenet megjelenítő
├── hooks/
│   └── useUsers.js       # Custom hook felhasználók kezelésére
├── styles/
│   ├── tableStyles.css   # Táblázat stílusok
│   ├── App.css           # Fő alkalmazás stílusok
│   └── index.css         # Globális stílusok
└── App.js                # Fő alkalmazás komponens
```

---

## ⚙️ Telepítés és Futtatás

### Előfeltételek

* Node.js (v14 vagy újabb)
* MySQL szerver
* npm vagy yarn

### Backend Beállítás

1. Backend könyvtár létrehozása és függőségek telepítése:

   ```bash
   mkdir backend
   cd backend
   npm init -y
   npm install express mysql2 cors
   ```

2. Adatbázis konfigurálása:

   ```sql
   CREATE DATABASE users;

   USE users;

   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(100) NOT NULL,
       email VARCHAR(100) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

3. Backend indítása:

   ```bash
   node server.js
   ```

   A backend a **[http://localhost:3001](http://localhost:3001)** címen fog futni.

### Frontend Beállítás

1. Függőségek telepítése:

   ```bash
   npm install axios
   ```

2. Frontend indítása:

   ```bash
   npm run dev
   ```

   A frontend a **[http://localhost:5173](http://localhost:5173)** címen érhető el (vagy a konfigurált porton).

---

## 🔧 Konfiguráció

**Backend konfiguráció (`server.js`):**

```javascript
const dbPool = mysql.createPool({
    host: 'localhost',      // Adatbázis szerver
    user: 'root',           // Felhasználónév
    password: '',           // Jelszó
    database: 'users',      // Adatbázis név
    port: 3307,             // MySQL port
});
```

---

## 🌐 API Végpontok

* `GET /api/users` – Összes felhasználó lekérése
* `POST /api/users` – Új felhasználó létrehozása
* `PATCH /api/users/:id` – Felhasználó frissítése
* `DELETE /api/users/:id` – Felhasználó törlése

---

## 🎯 Használat

* **Felhasználók megtekintése** – Az alkalmazás betöltése után automatikusan megjelenik a felhasználók listája.
* **Új felhasználó hozzáadása** – Töltse ki a név és email mezőket, majd kattintson a *Hozzáadás* gombra.
* **Felhasználó szerkesztése** – Kattintson a *Szerkesztés* gombra, módosítsa az adatokat, majd kattintson a *Mentés* gombra.
* **Felhasználó törlése** – Kattintson a *Törlés* gombra, majd erősítse meg a törlést.

---

## 🐛 Hibakezelés

Az alkalmazás a következő hibákat kezeli:

* Adatbázis kapcsolat megszakadása
* Érvénytelen adatok
* Hálózati problémák
* Szerver hibák

---

## 🔮 Fejlesztési lehetőségek

* Validáció kiterjesztése
* Keresés és szűrés funkció
* Oldaltördelés (pagination)
* Felhasználói profilok
* Jelszó kezelés
* Jogosultság kezelés
* Unit tesztek

---

## 👥 Hozzájárulás

1. Forkolja a repository-t
2. Hozzon létre egy feature branch-et:

   ```bash
   git checkout -b feature/uj-funkcio
   ```
3. Commitolja a változtatásokat:

   ```bash
   git commit -m "Új funkció hozzáadása"
   ```
4. Pusholja a branch-et:

   ```bash
   git push origin feature/uj-funkcio
   ```
5. Nyisson egy Pull Request-et

---

## 📄 Licenc

Ez a projekt **MIT licenc** alatt áll.

---

## 📞 Kapcsolat

Ha bármilyen kérdése van, kérjük nyisson egy *issue*-t a GitHub repository-ban.
