document.title = "whynoterror";

 // Создаем контейнер уведомления
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.background = '#fff';
  notification.style.border = '1px solid #ccc';
  notification.style.padding = '20px';
  notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
  notification.style.zIndex = '1000';
  notification.style.borderRadius = '8px';
  notification.style.textAlign = 'center';
  notification.style.fontFamily = 'Arial, sans-serif';

  // Добавляем текст
  const text = document.createElement('p');
  text.textContent = 'На сервисе запрещены любые формы девиантного поведения, включая, например, облизывание обуви. Блокировка снята.';
  notification.appendChild(text);

  // Создаем кнопку
  const button = document.createElement('button');
  button.textContent = 'Подтверждаю';
  button.style.padding = '8px 16px';
  button.style.marginTop = '10px';
  button.style.border = 'none';
  button.style.backgroundColor = '#004ECF';
  button.style.color = '#fff';
  button.style.borderRadius = '4px';
  button.style.cursor = 'pointer';
  button.style.fontFamily = 'Arial, sans-serif';
  // При клике скрываем уведомление
  button.addEventListener('click', () => {
    notification.remove();
  });

  notification.appendChild(button);

  // Добавляем уведомление в начало body
  document.body.prepend(notification);


window.scriptLoaded = true;
