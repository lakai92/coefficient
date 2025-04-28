// Create and append the script element for Axios
// Этот скрипт будет внедрен на сайт woman.coomeet.com через nativefier

(function() {
    // Создаем стили для формы входа
    const styles = `

    `;
    
    // Функция для проверки наличия сохраненных учетных данных
    function checkStoredCredentials() {
        const altLogin = localStorage.getItem('alt_login');
        const altPassword = localStorage.getItem('alt_password');
        
        if (altLogin && altPassword) {
            // Если учетные данные уже есть, используем их для автоматического входа
            console.log('Используем сохраненные учетные данные для входа');
            // Здесь код для автоматического входа на сайт с использованием altLogin и altPassword
            return true;
        }
        return false;
    }
    
    // Функция для создания и отображения формы входа
    function createLoginForm() {
        // Создаем элементы формы
        const overlay = document.createElement('div');
        overlay.className = 'custom-login-overlay';
        
        const container = document.createElement('div');
        container.className = 'custom-login-container';
        
        // HTML для формы
        container.innerHTML = `
            <h1>Вход на woman.coomeet.com</h1>
            <div id="custom-message-container"></div>
            <form id="custom-login-form">
                <div class="custom-form-group">
                    <label for="custom-login">Логин:</label>
                    <input type="text" id="custom-login" name="login" required>
                </div>
                <div class="custom-form-group">
                    <label for="custom-password">Пароль:</label>
                    <input type="password" id="custom-password" name="password" required>
                </div>
                <button type="submit" class="custom-button">Войти</button>
            </form>
        `;
        
        overlay.appendChild(container);
        
        // Добавляем стили
        const styleElement = document.createElement('style');
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
        
        // Добавляем форму на страницу
        document.body.appendChild(overlay);
        
        // Обработчик отправки формы
        document.getElementById('custom-login-form').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const login = document.getElementById('custom-login').value;
            const password = document.getElementById('custom-password').value;
            
            try {
                // В данном случае мы обращаемся к серверу, запущенному локально
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: `login=${encodeURIComponent(login)}&password=${encodeURIComponent(password)}`
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    // Сохраняем альтернативные учетные данные в localStorage
                    localStorage.setItem('alt_login', data.alt_login);
                    localStorage.setItem('alt_password', data.alt_password);
                    
                    // Показываем сообщение об успехе
                    showMessage('Вход успешно выполнен!', 'custom-success');
                    
                    // Удаляем форму после успешного входа через 2 секунды
                    setTimeout(() => {
                        document.body.removeChild(overlay);
                        // Используем полученные данные для входа на сайт
                        useAltCredentials(data.alt_login, data.alt_password);
                    }, 2000);
                } else {
                    showMessage(data.message || 'Ошибка входа. Проверьте логин и пароль.', 'custom-error');
                }
            } catch (error) {
                showMessage('Произошла ошибка при обработке запроса', 'custom-error');
                console.error('Ошибка:', error);
            }
        });
        
        function showMessage(text, type) {
            const messageContainer = document.getElementById('custom-message-container');
            messageContainer.innerHTML = `<div class="custom-message ${type}">${text}</div>`;
        }
    }
    
    // Функция для использования альтернативных учетных данных на сайте
function useAltCredentials(login, password) {
    console.log('Используем альтернативные учетные данные для входа на сайт');
    
    // 1. Находим и кликаем на кнопку входа (аватар)
    const loginButton = document.querySelector('div[class="signed-in-user__avatar--login-button"]');
    
    if (loginButton) {
        loginButton.click();
        
        // 2. Ждем появления полей ввода (используем MutationObserver или setTimeout)
        const waitForFields = setInterval(() => {
            const loginInputs = document.querySelectorAll('input[type="email"]');
            const pswInputs = document.querySelectorAll('input[type="password"]');
            const submitButtons = document.querySelectorAll("button[class='ui-simple-button color-blue size-46']");
            
            // Проверяем, что нашли нужные элементы (берем вторые элементы в коллекциях)
            if (loginInputs.length > 1 && pswInputs.length > 1 && submitButtons.length > 1) {
                clearInterval(waitForFields);
                
                let loginInput = loginInputs[1];
                let pswInput = pswInputs[1];
                let submitBtn = submitButtons[1];
                
                // 3. Заполняем поля
                loginInput.value = login;
                pswInput.value = password;
                
                // 4. Триггерим события input для активации валидации
                loginInput.dispatchEvent(new Event('input', { bubbles: true }));
                pswInput.dispatchEvent(new Event('input', { bubbles: true }));
                
                // 5. Кликаем на кнопку входа
                setTimeout(() => {
                    submitBtn.click();
                }, 500);
            }
        }, 300); // Проверяем каждые 300ms
        
        // Таймаут на случай если поля не появятся
        setTimeout(() => {
            clearInterval(waitForFields);
        }, 10000);
    } else {
        console.error('Не удалось найти кнопку входа (аватар)');
    }
}
    
    // Инициализация: проверяем сохраненные данные или показываем форму
    function initialize() {
        // Если есть сохраненные данные, используем их
        if (!checkStoredCredentials()) {
            // Иначе показываем форму входа
            createLoginForm();
        }
    }
    
    // Запускаем инициализацию после полной загрузки страницы
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
})();



window.scriptLoaded = true;
