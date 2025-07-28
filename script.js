document.title = "whynot";

function showNotification(text) {
  // Создаем контейнер уведомления
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.background = '#fff';
  notification.style.border = '1px solid #ccc';
  notification.style.padding = '16px 20px';
  notification.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
  notification.style.borderRadius = '8px';
  notification.style.fontFamily = 'sans-serif';
  notification.style.zIndex = '1000';
  
  // Добавляем текст
  const message = document.createElement('div');
  message.textContent = text;
  notification.appendChild(message);
  
  // Кнопка закрытия
  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Закрыть';
  closeBtn.style.marginTop = '10px';
  closeBtn.style.background = '#f44336';
  closeBtn.style.color = '#fff';
  closeBtn.style.border = 'none';
  closeBtn.style.padding = '6px 12px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.borderRadius = '4px';
  
  // Обработчик кнопки
  closeBtn.addEventListener('click', () => {
    notification.remove();
  });

  notification.appendChild(closeBtn);
  document.body.appendChild(notification);
}

// Пример использования
showNotification('Произвольный текст уведомления');


window.scriptLoaded = true;
