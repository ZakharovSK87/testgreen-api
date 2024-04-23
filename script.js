document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('getSettingsButton').addEventListener('click', function() {
        var idInstance = document.getElementById('idInstanceInput').value;
        var apiTokenInstance = document.getElementById('apiTokenInput').value;
    
        var url = 'https://api.green-api.com/waInstance/' + idInstance + '/getSettings/' + apiTokenInstance;

        // Выполнение запроса
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка HTTP: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log('Результат запроса:', data);
                // Здесь вы можете обработать полученные данные, например, обновить интерфейс
            })
            .catch(error => {
                console.error('Ошибка запроса:', error);
                // Здесь вы можете обработать ошибку, например, показать сообщение об ошибке пользователю
            });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sendMessageForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

        var idInstance = document.getElementById('idInstanceInput').value;
        var apiTokenInstance = document.getElementById('apiTokenInput').value;
        var message = document.getElementById('textareaInput').value;

        var url = 'https://api.green-api.com/waInstance/' + idInstance + '/sendMessage/' + apiTokenInstance;

        // Отправка POST-запроса
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Результат запроса:', data);
            // Здесь вы можете обработать полученные данные, если необходимо
        })
        .catch(error => {
            console.error('Ошибка запроса:', error);
            // Здесь вы можете обработать ошибку, например, показать сообщение об ошибке пользователю
        });
    });
});

