from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import numpy as np
from keras.models import load_model
import cv2
from PIL import Image
from io import BytesIO


app = Flask(__name__, static_folder='../frontend', static_url_path='/')
CORS(app)

# Leer nuestro modelo
model = load_model("../modelo_f1.h5")
# Verificar si el modelo se ha cargado correctamente
if model is None:
    print("Error loading the model")
    exit(1)

def categorizar(image):
  img = Image.open(BytesIO(image))
  img = np.array(img).astype(float)/255
  img = cv2.resize(img, (224,224))
  prediccion = model.predict(img.reshape(-1, 224, 224, 3))
  prediccion = np.argmax(prediccion[0], axis=-1)
  
  return prediccion

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400


    try:
        # Leer la imagen desde el archivo
        file_bytes = np.fromstring(file.read(), np.uint8)
        
        predicciones = {0: 'Ferrari', 1: 'Mercedes', 2: 'Redbull'}
        prediccion = categorizar(file_bytes)
        prediccion = predicciones[prediccion]
        print(prediccion)
        return jsonify({"Prediccion": prediccion}), 200
    except Exception as e:
        print(e)
        return jsonify({"error": "Error al procesar la imagen"}), 400

@app.route('/')
def frontend():
    return app.send_static_file('index.html')

if __name__ == '__main__':  
    app.run()
        
    



