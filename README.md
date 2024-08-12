# 🏎️ F1 Monoplaza Detector

Este proyecto abarca tanto el entrenamiento de un modelo de detección de monoplazas de Fórmula 1 como el desarrollo de un sistema que utiliza dicho modelo para clasificar imágenes. 
Se ha entrenado una red neuronal convolucional customizada para identificar monoplazas de distintas escuderías, como Ferrari, Mercedes y Redbull. 
El sistema permite a los usuarios subir imágenes a través de un frontend básico y obtener la clasificación del monoplaza a través de una API desarrollada con Flask. 
La API carga el modelo y realiza la predicción para determinar qué tipo de monoplaza es, diferenciando entre Ferrari, Mercedes y Redbull.

- 🌍 Prueba en línea: Puedes probar la aplicación en el siguiente enlace: https://f1-car-detection.vercel.app/

## 🛠️ Estructura del Proyecto

- **Backend**: Flask API que maneja la lógica de predicción y está desplegada en **AWS**.
- **Frontend**: Interfaz básica donde los usuarios pueden subir imágenes, desplegada en **Vercel**.
- **Modelo**: CNN personalizada entrenada para la clasificación de imágenes de monoplazas de F1.
- **Entrenamiento del Modelo**: Detalles sobre cómo se entrenó el modelo y los datos utilizados se encuentran en el archivo `f1_cardetection.ipynb`.

## ✨ Características

- 📷 **Carga de imágenes**: Los usuarios pueden subir imágenes de monoplazas de F1 desde el frontend.
- 🎯 **Clasificación**: El modelo de CNN predice si el monoplaza es un Ferrari, Mercedes o Redbull.
- 🌐 **Despliegue**: La API está desplegada en AWS y el frontend en Vercel, permitiendo que ambas partes se conecten y funcionen de manera integrada.


## 🛠️ Tecnologías Utilizadas
- Python
- TensorFlow
- Keras
- Matplotlib
- Flask
- HTML/CSS/JavaScript
- AWS (para el despliegue del backend)
- Vercel (para el despliegue del frontend)

## 💻 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/NikoMalek/detection_f1-car.git
   cd detection_f1-car
   ```

 2. Se recomienda configurar un entorno de Python 3.10.14 con **conda** y activarlo. [Descarga de conda](https://docs.anaconda.com/free/miniconda/index.html)
    
    ```bash
    conda create --name mi_entorno python=3.10.14
    conda activate mi_entorno
    ```
    
4. Instala las dependencias necesarias:
   
   ```bash
   pip install -r requirements.txt
   ```
   
5. Ejecuta la aplicación Flask localmente:
   
    ```bash
    cd api
    python main.py
    ```
## 🚀 Uso
1. Una vez que la aplicación Flask esté en ejecución, abre tu navegador y ve a `http://localhost:5000` (o el puerto que hayas configurado).
2. Utiliza la interfaz para subir una imagen de un monoplaza de F1.
3. El sistema procesará la imagen y te mostrará la predicción sobre la escudería del monoplaza.


   
