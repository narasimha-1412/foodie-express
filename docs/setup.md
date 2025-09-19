
# Setup - Starter Runnable Version

## Backend (Django - using SQLite for starter)
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata ../backend/fixtures/initial_data.json
python manage.py createsuperuser   # optional
python manage.py runserver 8000

## FastAPI (optional)
cd fastapi
pip install -r requirements.txt
uvicorn main:app --reload --port 9000

## Frontend
cd frontend
npm install
npm run dev

Open http://localhost:5173 (frontend) and http://localhost:8000 (Django API)
