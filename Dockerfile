FROM python:3.10-slim

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y \
    wget \
    libgl1-mesa-glx \
    libglib2.0-0 \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

RUN wget --no-verbose --output-document=modelo_f1.h5 "https://huggingface.co/NikoMalek/f1-detector-model/resolve/main/modelo_f1.h5"

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install gunicorn  # ✅ Agrega esto

WORKDIR /app/api

EXPOSE 5000

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "main:app"]
