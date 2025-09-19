```markdown
# 🍔 Foodie Express

A simple food ordering platform built with:
- **Backend:** Django (REST API) + FastAPI (microservice)
- **Frontend:** React.js + Tailwind CSS
- **Database:** SQLite (default, can switch to PostgreSQL later)

---

## 📂 Project Structure

```

foodie-express/
│── backend/          # Django project with users, restaurants, orders, payments
│── fastapi/          # FastAPI microservice (notifications, extra APIs)
│── frontend/         # React + Tailwind frontend
│── docs/             # Documentation
│── README.md         # This file

````

---

## 🚀 Setup Instructions

### 1. Clone project
```bash
git clone https://github.com/your-username/foodie-express.git
cd foodie-express
````

### 2. Backend (Django)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Load sample data
python manage.py loaddata fixtures/initial_data.json

# Start backend
python manage.py runserver
```

👉 Runs on **[http://127.0.0.1:8000/](http://127.0.0.1:8000/)**

---

### 3. FastAPI Service (Optional)

```bash
cd fastapi
pip install -r requirements.txt
uvicorn main:app --reload --port 8001
```

👉 Runs on **[http://127.0.0.1:8001/](http://127.0.0.1:8001/)**

---

### 4. Frontend (React + Tailwind)

```bash
cd frontend
npm install
npm run dev
```

👉 Runs on **[http://localhost:5173/](http://localhost:5173/)**

---

## 🧪 Test the App

1. Visit **[http://localhost:5173/](http://localhost:5173/)**
2. Browse restaurants & menu
3. Add to cart → checkout → order stored in backend
4. Login to Django admin:

   ```bash
   python manage.py createsuperuser
   ```

   👉 Admin: **[http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)**

---

## 📌 Next Steps

* Switch DB to PostgreSQL (Supabase or Railway)
* Add payment gateway (Stripe sandbox / UPI test)
* Deploy backend (Railway/Render) + frontend (any static host)

---

## 👨‍💻 Author

Made with ❤️ for learning Django, FastAPI, and React.

```

---

Would you like me to **replace the README inside your existing zip** with this simpler one and re-generate the zip for download?
```
