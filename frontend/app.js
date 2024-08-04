FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageExifOrientation,
    FilePondPluginFileValidateSize
  );
  
// Crear FilePond
const pond = FilePond.create(document.querySelector('input[type="file"]'),{
    labelIdle: `Arrastra y suelta tu imagen o <span class="filepond--label-action">Selecciona</span>`,
    imagePreviewHeight: 300,
    imageCropAspectRatio: '1:1',
    imageResizeTargetWidth: 300,
    imageResizeTargetHeight: 300,

});

pond.on('removefile', () => {
    const predictionElement = document.getElementById('prediccion');
    const resultDiv = document.getElementById('result');
    predictionElement.innerHTML = '';
    predictionElement.style.display = 'none';
    resultDiv.style.display = 'none';
});

  
document.getElementById('upload-button').addEventListener('click', () => {
    const files = pond.getFiles();

    if (files.length === 0) {
        // alert('Sube una imagen primero.');
        Swal.fire({ 
            icon: 'error',
            title: 'Error',
            text: 'Sube una imagen primero.',
            });
        return;
    }

    const file = files[0].file;

    const formData = new FormData();
    formData.append('file', file);

    document.getElementById('loading').style.display = 'block';
    
    fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw err; });
        }
        return response.json();
    })
    .then(data => {
        const resultDiv = document.getElementById('result');
        const predictionElement = document.getElementById('prediccion');
        predictionElement.textContent = `Predicción: ${data.Prediccion}`;
        setTimeout(function(){
        document.getElementById('loading').style.display = 'none';
            resultDiv.style.display = 'block';
            predictionElement.style.display = 'block';
        }, 1000);
    })
    .catch(error => {
        console.error('Error:', error);
        const resultDiv = document.getElementById('result');
        const predictionElement = document.getElementById('prediccion');
        predictionElement.textContent = 'No se encontró ninguna predicción';
        setTimeout(function(){
        document.getElementById('loading').style.display = 'none';
            resultDiv.style.display = 'block';
            predictionElement.style.display = 'block';
        }, 1000);
    })
});
