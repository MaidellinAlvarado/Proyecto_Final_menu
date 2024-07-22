


const tasks = {
    codigo: [
        'To do List : https://github.com/MaidellinAlvarado/TodoList.git',
        'Tablas dinamicas: https://github.com/MaidellinAlvarado/TablasDinamicas.git',
        'Pilas: https://github.com/MaidellinAlvarado/TablasDinamicas.git',
        'Arrays: https://github.com/MaidellinAlvarado/TodoList.git',
        'Lista Enlazada: https://github.com/MaidellinAlvarado/TodoList.git',
        'Personalizacion en css: https://github.com/MaidellinAlvarado/TodoList.git',
        'Algoritmos de ordenamiento: https://github.com/MaidellinAlvarado/TAREA_ANALISIS.git',
      
    ],
    pdf: [
        'ARBOLES PDF: https://github.com/MaidellinAlvarado/TablasDinamicas.git',

    ],
    resumenes: [
        'RESUMENES PDF: https://github.com/MaidellinAlvarado/TablasDinamicas.git',
    ]
};

function renderTasks(sectionId, tasksArray) {
    const ul = document.getElementById(sectionId);
    ul.innerHTML = '';

    tasksArray.forEach(task => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        const separatorIndex = task.indexOf(':');
        const title = task.substring(0, separatorIndex);
        const url = task.substring(separatorIndex + 1);

        link.textContent = title.trim();
        link.href = url.trim();
        link.target = '_blank'; 
        li.appendChild(link);
        ul.appendChild(li);
    });

    ul.style.display = 'block'; 
}


document.addEventListener('DOMContentLoaded', function() {
    const btnCodigo = document.getElementById('btnCodigo');
    const btnPdf = document.getElementById('btnPdf');
    const btnResumenes = document.getElementById('btnResumenes');

    btnCodigo.addEventListener('click', function() {
        renderTasks('code-list', tasks.codigo);
    });

    btnPdf.addEventListener('click', function() {
        renderTasks('pdf-list', tasks.pdf);
    });

    btnResumenes.addEventListener('click', function() {
        renderTasks('resumenes-list', tasks.resumenes);
    });
});
