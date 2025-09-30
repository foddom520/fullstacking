# Felhasználókezelő Alkalmazás – Oktató Projekt (Full-Stack CRUD)

Ez a projekt egy **React (Vite) + Node.js + MySQL** alapú teljes körű CRUD (Create, Read, Update, Delete) alkalmazás.
A cél nemcsak egy működő felhasználókezelő rendszer létrehozása, hanem az is, hogy **lépésről lépésre megértsd**, hogyan épül fel egy modern full-stack alkalmazás.

---

## 🎯 Miért hasznos ez a projekt?

* Megérted, hogyan működnek a **CRUD műveletek** (létrehozás, olvasás, frissítés, törlés).
* Látod, hogyan beszélget egymással a **frontend** (React + Vite) és a **backend** (Node.js + Express).
* Gyakorolhatod az **adatbáziskezelést** (MySQL).
* Megtanulod, hogyan kell **hibákat kezelni** és hogyan lehet **valós idejű frissítéseket** elérni.

---

## 🛠️ Technológiák és szerepük

### Frontend

* **React (Vite)** – gyors fejlesztői környezet és komponens alapú UI.
* **Axios** – HTTP kérések küldésére a backend felé.
* **Custom Hooks** – logika újrafelhasználásához (pl. `useUsers`).

### Backend

* **Node.js** – JavaScript futtatókörnyezet a szerverhez.
* **Express.js** – egyszerű eszköz API útvonalak készítéséhez.
* **MySQL** – relációs adatbázis a felhasználók tárolásához.
* **mysql2/promise** – adatbázis driver `async/await` támogatással.
* **CORS** – biztosítja, hogy a frontend és a backend más portokról is tudjon kommunikálni.

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
│       └── index.js             # frontend belépési pontja (Vite kezeli)
├── backend/
│   └── server.js                # backend belépési pontja
└── db.sql                       # adatbázis létrehozásához szükséges SQL script
```

👉 A `db.sql` fájl tartalmazza az adatbázis és a `users` tábla létrehozásához szükséges SQL parancsokat.

---

## ⚙️ Telepítés és futtatás

### 1. Előkészületek

* Telepítsd a [Node.js](https://nodejs.org/) aktuális verzióját.
* Telepíts egy [MySQL szervert](https://dev.mysql.com/downloads/).

---

### 2. Adatbázis

1. Nyisd meg a MySQL klienst (pl. `mysql -u root -p`).
2. Futtasd a `db.sql` fájl tartalmát:

   ```bash
   source db.sql;
   ```

   Ez létrehozza a `users` adatbázist és a megfelelő táblát.

---

### 3. Backend (szerver)

1. Lépj a `backend` mappába, majd telepítsd a szükséges csomagokat:

   ```bash
   cd backend
   npm init -y
   npm install express mysql2 cors
   ```

2. Indítsd el a szervert:

   ```bash
   node server.js
   ```

   A backend mostantól a **[http://localhost:3001](http://localhost:3001)** címen fut.

---

### 4. Frontend (Vite + React)

1. Lépj a `frontend` mappába:

   ```bash
   cd frontend
   ```

2. Telepítsd a szükséges csomagokat:

   ```bash
   npm install
   ```

3. Indítsd el a fejlesztői szervert:

   ```bash
   npm run dev
   ```

   A frontend a **[http://localhost:5173](http://localhost:5173)** címen érhető el.

---

## 🌐 Hogyan kommunikál a rendszer?

1. A felhasználó kitölti az űrlapot (név, email) a frontend oldalon.
2. A React komponens (`UserForm`) az adatokat az **Axios** segítségével elküldi a backendnek.
3. Az **Express.js** útvonal (pl. `POST /api/users`) fogadja a kérést.
4. Az útvonal beszúrja az adatokat a **MySQL adatbázisba**.
5. Az adatbázis választ küld → Express továbbítja → React frissíti a listát.

---

## 🌐 API Végpontok

* `GET /api/users` – összes felhasználó lekérése
* `POST /api/users` – új felhasználó létrehozása
* `PATCH /api/users/:id` – meglévő felhasználó frissítése
* `DELETE /api/users/:id` – felhasználó törlése

---

## 📚 Mit tanulhatsz ebből a projektből?

* Hogyan működik egy **full-stack alkalmazás**.
* Hogyan beszélget egymással a **frontend és a backend**.
* Hogyan lehet **adatbázist kezelni** egy webes alkalmazásban.
* Miért fontos a **kód strukturálása** és a **hibakezelés**.

---

## 📄 Licenc

Ez a projekt MIT licenc alatt áll. Szabadon felhasználható tanulásra és fejlesztésre.
