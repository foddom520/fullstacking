# Felhasználókezelő Alkalmazás – Oktató Projekt (Full-Stack CRUD)

Ez a projekt egy **React (Vite) + Node.js + MySQL** alapú teljes körű CRUD (Create, Read, Update, Delete) alkalmazás.
A cél nemcsak egy működő felhasználókezelő rendszer létrehozása, hanem az is, hogy **lépésről lépésre megértsd**, hogyan épül fel egy modern full-stack alkalmazás.

---

## 🎯 Miért hasznos ez a projekt?

* Megérted, hogyan működnek a **CRUD műveletek** (létrehozás, olvasás, frissítés, törlés).
* Látni fogod, hogyan kommunikál egymással a **frontend** (React + Vite) és a **backend** (Node.js + Express).
* Gyakorolhatod, hogyan kell **adatbázist létrehozni és kezelni** (MySQL).
* Megtanulod, hogyan kell **hibákat kezelni**, és hogyan lehet **valós idejű frissítéseket** megvalósítani.

---

## 🛠️ Technológiák és szerepük

### Frontend

* **React (Vite)** – komponens alapú keretrendszer, gyors fejlesztői élmény.
* **Axios** – HTTP kérések küldése a backendhez.
* **Custom Hooks** – újrafelhasználható logikai kód (pl. `useUsers`).

### Backend

* **Node.js** – JavaScript futtatása a szerver oldalon.
* **Express.js** – könnyű eszköz API útvonalakhoz.
* **MySQL** – adatbázis a felhasználók tárolásához.
* **mysql2/promise** – adatbázis driver aszinkron támogatással.
* **CORS** – biztosítja, hogy a frontend és backend külön porton is tudjon kommunikálni.

---

## 📁 Projekt Struktúra

```
project-root/
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── App.jsx          # fő alkalmazás komponens
│       │   ├── UserForm.jsx     # űrlap új/szerkesztett felhasználóhoz
│       │   ├── UserTable.jsx    # táblázat az összes felhasználóhoz
│       │   ├── UserRow.jsx      # egyetlen felhasználó sora
│       │   ├── Loading.jsx      # betöltés kijelző
│       │   └── Error.jsx        # hibaüzenet kijelző
│       ├── hooks/
│       │   └── useUsers.js      # saját hook a felhasználók kezelésére
│       ├── styles/
│       │   └── tableStyles.js   # táblázat stílusai
│       └── index.js             # frontend belépési pont (Vite kezeli)
├── backend/
│   └── server.js                # backend belépési pont
└── db.sql                       # adatbázis létrehozásához szükséges SQL script
```

👉 A `db.sql` fájl tartalmazza az adatbázis és a `users` tábla létrehozásához szükséges SQL parancsokat.

---

## ⚙️ Telepítés és futtatás

### 1. Előkészületek

* Telepítsd a [Node.js](https://nodejs.org/) legfrissebb verzióját.
* Telepíts egy [MySQL szervert](https://dev.mysql.com/downloads/) vagy indítsd el a **XAMPP**-ot (Apache + MySQL).

---

### 2. Adatbázis

1. Indítsd el a XAMPP-ot (Apache + MySQL).
2. Lépj be a phpMyAdmin-ba vagy a MySQL CLI-be.
3. Importáld a `db.sql` fájl tartalmát. Ez létrehozza a `users` adatbázist és a `users` táblát.

---

### 3. Backend (szerver)

1. Nyisd meg a `backend` mappát, és telepítsd a függőségeket:

   ```bash
   cd backend
   npm i
   ```

2. Indítsd el a szervert:

   ```bash
   npm run dev
   ```

   A backend a **[http://localhost:3001](http://localhost:3001)** címen fut.

---

### 4. Frontend (Vite + React)

1. Nyisd meg a `frontend` mappát:

   ```bash
   cd frontend
   ```

2. Telepítsd a függőségeket:

   ```bash
   npm i
   ```

3. Indítsd el a fejlesztői szervert:

   ```bash
   npm run dev
   ```

   A frontend a **[http://localhost:5173](http://localhost:5173)** címen fut.

---

## 🌐 Hogyan kommunikál a rendszer?

1. A felhasználó kitölti az űrlapot (név, email).
2. A React komponens (`UserForm`) elküldi az adatokat **Axios**-on keresztül a backendnek.
3. Az **Express.js** útvonal (pl. `POST /api/users`) fogadja a kérést.
4. A backend beszúrja az adatokat a **MySQL adatbázisba**.
5. Az adatbázis visszaküldi a választ → az Express továbbítja → a React frissíti a listát.

---

## 🌐 API Végpontok

* `GET /api/users` – összes felhasználó lekérése
* `POST /api/users` – új felhasználó létrehozása
* `PATCH /api/users/:id` – meglévő felhasználó frissítése
* `DELETE /api/users/:id` – felhasználó törlése

---

## 📚 Mit tanulhatsz ebből a projektből?

* Hogyan működik egy **full-stack alkalmazás**.
* Hogyan kommunikál a **frontend és a backend**.
* Hogyan lehet **adatbázist használni** webalkalmazásban.
* Miért fontos a **kód strukturálása** és a **hibakezelés**.

---

## 📄 Licenc

Ez a projekt MIT licenc alatt áll. Szabadon felhasználható tanulásra és fejlesztésre.
