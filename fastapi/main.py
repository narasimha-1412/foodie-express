
from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel

app = FastAPI(title='notify')

class EmailPayload(BaseModel):
    to: str
    subject: str
    body: str

@app.get('/health')
async def health():
    return {'status':'ok'}

@app.post('/send-email')
async def send_email(payload: EmailPayload, background_tasks: BackgroundTasks):
    def _send():
        print('Pretend sending email to', payload.to)
    background_tasks.add_task(_send)
    return {'status':'queued'}
