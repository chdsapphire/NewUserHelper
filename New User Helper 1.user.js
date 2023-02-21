// ==UserScript==
// @name         New User Helper
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://www.charmdate.com/clagt/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=charmdate.com
// @grant        none
// @updateURL https://github.com/chdsapphire/NewUserHelper/raw/main/New%20User%20Helper%201.user.js
// @downloadURL https://github.com/chdsapphire/NewUserHelper/raw/main/New%20User%20Helper%201.user.js
// ==/UserScript==

////EMF
(function() {
    'use strict';

    var buttonExists = false;

    $(document).ready(function() {
        var targetElem = $('a:contains("EMF Mail")');
        targetElem.hover(function () {
            if (!buttonExists) {
                var btn = $('<button id="test-button">HELP</button>');
                btn.click(function() {
                   // Create the message element
const message = document.createElement('div');
message.innerHTML = 'Листи.Твій основний розділ: <br> – Search➡️Search EMF Mail (sent by gentleman): – <a href="https://drive.google.com/file/d/1HoLIC5abISaIQ_dHQU4Eg9onZ0yLUSIT/view?usp=sharing">Отримані</a> <br> – Search➡️Search EMF Mail (sent by lady):–  <a href="https://drive.google.com/file/d/1HthClc48gfSRlyrwECq6ydOQ-t8jLVYs/view?usp=sharing">Відправлені</a> <br> – First EMF Mail – <a href="https://drive.google.com/file/d/1Hz3zTbapMd-7KobHu0mati-1bpUZjrWE/view?usp=sharing">Листи Після чату</a>  <br> – From Ladies ➡️ Compose Reply – <a href="https://drive.google.com/file/d/1I-7IgI8Sko8LTgucbAOEgI0i0FbGn0Pb/view?usp=sharing">Відправити Лист</a>';
message.style.marginTop = '10px';
message.style.padding = '10px';
message.style.border = '1px solid lightblue';
message.style.borderRadius = '3px';

// Create the close button element
const closeButton = document.createElement('button');
closeButton.innerHTML = '&times;';
closeButton.style.position = 'absolute';
closeButton.style.top = '5px';
closeButton.style.right = '5px';
closeButton.style.backgroundColor = 'transparent';
closeButton.style.border = 'none';
closeButton.style.fontSize = '20px';
closeButton.style.cursor = 'pointer';

// Add click event listener to the close button element
closeButton.addEventListener('click', () => {
  // Remove the window element from the body
  document.body.removeChild(windowElement);
});

// Create the VIDEO button element
const videoButton = document.createElement('button');
videoButton.textContent = 'VIDEO';
videoButton.style.marginTop = '10px';
videoButton.style.marginRight = '10px';
videoButton.style.padding = '10px';
videoButton.style.backgroundColor = 'lightblue';
videoButton.style.border = 'none';
videoButton.style.borderRadius = '3px';
videoButton.style.cursor = 'pointer';

// Add click event listener to the VIDEO button element
videoButton.addEventListener('click', () => {
  window.open('https://drive.google.com/file/d/1HZKIIuSEgQD0x-YlK19bya-TGanDKJfi/view?usp=sharing');
});

// Create the TEXT button element
const textButton = document.createElement('button');
textButton.textContent = 'TEXT';
textButton.style.marginTop = '10px';
textButton.style.padding = '10px';
textButton.style.backgroundColor = 'lightblue';
textButton.style.border = 'none';
textButton.style.borderRadius = '3px';
textButton.style.cursor = 'pointer';

// Add click event listener to the TEXT button element
textButton.addEventListener('click', () => {
  window.open('https://docs.google.com/document/d/1h28xEz8zfp71OO4RyDpdEOOLa9XXzvZWVlU4tRpednY/edit#heading=h.4pdl0drutv6q');
});

// Create the buttons container element
const buttonsContainer = document.createElement('div');
buttonsContainer.style.display = 'flex';
buttonsContainer.style.justifyContent = 'center';

// Add the VIDEO and TEXT button elements to the buttons container element
buttonsContainer.appendChild(videoButton);
buttonsContainer.appendChild(textButton);

// Create the window element
const windowElement = document.createElement('div');
windowElement.style.position = 'fixed';
windowElement.style.top = '50%';
windowElement.style.left = '50%';
windowElement.style.transform = 'translate(-50%, -50%)';
windowElement.style.backgroundColor = 'white';
windowElement.style.padding = '20px';
windowElement.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)';

// Add the close button element to the window element
windowElement.appendChild(closeButton);

// Add the message element to the window element
windowElement.appendChild(message);

// Add the buttons container element to the window element
windowElement.appendChild(buttonsContainer);

// Add the window element to the body
document.body.appendChild(windowElement);
                });
                $(this).after(btn);
                buttonExists = true;
                setTimeout(function() {
                    $('#test-button').remove();
                    buttonExists = false;
                }, 3000);
            }
        });
    });
})();

////Love Call
(function() {
    'use strict';

    var buttonExists = false;

    $(document).ready(function() {
        var targetElem = $('a:contains("Love Call")');
        targetElem.hover(function () {
            if (!buttonExists) {
                var btn = $('<button id="test-button">HELP</button>');
                btn.click(function() {
                   // Create the message element
const message = document.createElement('div');
message.innerHTML = 'Дзвінки.<br>  <br> – Scheduled Calls: – <a href="https://drive.google.com/file/d/10DB9PLfQO44d3ldsPeA0W6Ru6fRW9Hb3/view?usp=sharing">ЗЗ,як відправити</a> <br> – Instant Calls:– Ми не використовуемо  <br> – Lady Call Me – <a href="https://drive.google.com/file/d/1Hz3zTbapMd-7KobHu0mati-1bpUZjrWE/view?usp=sharing">Кому ми можемо подзвонити</a>  <br> - Awaiting Confirmation - новий дозвіл на дзвінок <br> - Successful Authorization - Кому можємо дзвонити <br> - Authorization Closed - Закрили можливість дзвонити ';
message.style.marginTop = '10px';
message.style.padding = '10px';
message.style.border = '1px solid lightblue';
message.style.borderRadius = '3px';

// Create the close button element
const closeButton = document.createElement('button');
closeButton.innerHTML = '&times;';
closeButton.style.position = 'absolute';
closeButton.style.top = '5px';
closeButton.style.right = '5px';
closeButton.style.backgroundColor = 'transparent';
closeButton.style.border = 'none';
closeButton.style.fontSize = '20px';
closeButton.style.cursor = 'pointer';

// Add click event listener to the close button element
closeButton.addEventListener('click', () => {
  // Remove the window element from the body
  document.body.removeChild(windowElement);
});

// Create the VIDEO button element
const videoButton = document.createElement('button');
videoButton.textContent = 'VIDEO';
videoButton.style.marginTop = '10px';
videoButton.style.marginRight = '10px';
videoButton.style.padding = '10px';
videoButton.style.backgroundColor = 'lightblue';
videoButton.style.border = 'none';
videoButton.style.borderRadius = '3px';
videoButton.style.cursor = 'pointer';

// Add click event listener to the VIDEO button element
videoButton.addEventListener('click', () => {
  window.open('https://drive.google.com/file/d/1HZKIIuSEgQD0x-YlK19bya-TGanDKJfi/view?usp=sharing');
});

// Create the TEXT button element
const textButton = document.createElement('button');
textButton.textContent = 'TEXT';
textButton.style.marginTop = '10px';
textButton.style.padding = '10px';
textButton.style.backgroundColor = 'lightblue';
textButton.style.border = 'none';
textButton.style.borderRadius = '3px';
textButton.style.cursor = 'pointer';

// Add click event listener to the TEXT button element
textButton.addEventListener('click', () => {
  window.open('https://docs.google.com/document/d/1h28xEz8zfp71OO4RyDpdEOOLa9XXzvZWVlU4tRpednY/edit#heading=h.4pdl0drutv6q');
});

// Create the buttons container element
const buttonsContainer = document.createElement('div');
buttonsContainer.style.display = 'flex';
buttonsContainer.style.justifyContent = 'center';

// Add the VIDEO and TEXT button elements to the buttons container element
buttonsContainer.appendChild(videoButton);
buttonsContainer.appendChild(textButton);

// Create the window element
const windowElement = document.createElement('div');
windowElement.style.position = 'fixed';
windowElement.style.top = '50%';
windowElement.style.left = '50%';
windowElement.style.transform = 'translate(-50%, -50%)';
windowElement.style.backgroundColor = 'white';
windowElement.style.padding = '20px';
windowElement.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)';

// Add the close button element to the window element
windowElement.appendChild(closeButton);

// Add the message element to the window element
windowElement.appendChild(message);

// Add the buttons container element to the window element
windowElement.appendChild(buttonsContainer);

// Add the window element to the body
document.body.appendChild(windowElement);
                });
                $(this).after(btn);
                buttonExists = true;
                setTimeout(function() {
                    $('#test-button').remove();
                    buttonExists = false;
                }, 3000);
            }
        });
    });
})();


////Chat
(function() {
    'use strict';

    var buttonExists = false;

 $(document).ready(function() {
        var targetElem = $('a[href="/clagt/livechat/index.php?action=live"]');
        targetElem.hover(function () {
            if (!buttonExists) {
                var btn = $('<button id="test-button">HELP</button>');
                btn.click(function() {
                   // Create the message element
const message = document.createElement('div');
message.innerHTML = 'Спілкування в чаті.<br>  <br> – Chats in Progress: – Активні чати.Чати котрі йдуть зараз <br> – Paused Chats:– у користувача закінчились кредити або він не відповіда нам в чаті  <br> – Ended Chats – <a href="https://drive.google.com/file/d/1Hz3zTbapMd-7KobHu0mati-1bpUZjrWE/view?usp=sharing">Платні чати котрі закінчились</a>  <br>  – Statistics // Sort by Lady – Кількість кредитів в чаті за місяць <br>  – Search  – Пошук по ID хто скільки витрачав';
message.style.marginTop = '10px';
message.style.padding = '10px';
message.style.border = '1px solid lightblue';
message.style.borderRadius = '3px';

// Create the close button element
const closeButton = document.createElement('button');
closeButton.innerHTML = '&times;';
closeButton.style.position = 'absolute';
closeButton.style.top = '5px';
closeButton.style.right = '5px';
closeButton.style.backgroundColor = 'transparent';
closeButton.style.border = 'none';
closeButton.style.fontSize = '20px';
closeButton.style.cursor = 'pointer';

// Add click event listener to the close button element
closeButton.addEventListener('click', () => {
  // Remove the window element from the body
  document.body.removeChild(windowElement);
});

// Create the VIDEO button element
const videoButton = document.createElement('button');
videoButton.textContent = 'VIDEO';
videoButton.style.marginTop = '10px';
videoButton.style.marginRight = '10px';
videoButton.style.padding = '10px';
videoButton.style.backgroundColor = 'lightblue';
videoButton.style.border = 'none';
videoButton.style.borderRadius = '3px';
videoButton.style.cursor = 'pointer';

// Add click event listener to the VIDEO button element
videoButton.addEventListener('click', () => {
  window.open('https://drive.google.com/file/d/1HcF3qKjNX-ARF_xUaLLJuJnjt3iNtbOm/view?usp=sharing');
});

// Create the TEXT button element
const textButton = document.createElement('button');
textButton.textContent = 'TEXT';
textButton.style.marginTop = '10px';
textButton.style.padding = '10px';
textButton.style.backgroundColor = 'lightblue';
textButton.style.border = 'none';
textButton.style.borderRadius = '3px';
textButton.style.cursor = 'pointer';

// Add click event listener to the TEXT button element
textButton.addEventListener('click', () => {
  window.open('https://docs.google.com/document/d/1h28xEz8zfp71OO4RyDpdEOOLa9XXzvZWVlU4tRpednY/edit#heading=h.poxd9vz5jqhb');
});

// Create the buttons container element
const buttonsContainer = document.createElement('div');
buttonsContainer.style.display = 'flex';
buttonsContainer.style.justifyContent = 'center';

// Add the VIDEO and TEXT button elements to the buttons container element
buttonsContainer.appendChild(videoButton);
buttonsContainer.appendChild(textButton);

// Create the window element
const windowElement = document.createElement('div');
windowElement.style.position = 'fixed';
windowElement.style.top = '50%';
windowElement.style.left = '50%';
windowElement.style.transform = 'translate(-50%, -50%)';
windowElement.style.backgroundColor = 'white';
windowElement.style.padding = '20px';
windowElement.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)';

// Add the close button element to the window element
windowElement.appendChild(closeButton);

// Add the message element to the window element
windowElement.appendChild(message);

// Add the buttons container element to the window element
windowElement.appendChild(buttonsContainer);

// Add the window element to the body
document.body.appendChild(windowElement);
                });
                $(this).after(btn);
                buttonExists = true;
                setTimeout(function() {
                    $('#test-button').remove();
                    buttonExists = false;
                }, 3000);
            }
        });
    });
})();

////Chat
(function() {
    'use strict';

    var buttonExists = false;

 $(document).ready(function() {
        var targetElem = $('a[href="/clagt/livechat/index.php?action=close"]');
        targetElem.hover(function () {
            if (!buttonExists) {
                var btn = $('<button id="test-button">HELP</button>');
                btn.click(function() {
                   // Create the message element
const message = document.createElement('div');
message.innerHTML = 'Закінчені чати:<br>  <br> – Chats in Progress: – Активні чати.Чати котрі йдуть зараз <br> – Paused Chats:– у користувача закінчились кредити або він не відповіда нам в чаті  <br> – Ended Chats – <a href="https://drive.google.com/file/d/1Hz3zTbapMd-7KobHu0mati-1bpUZjrWE/view?usp=sharing">Платні чати котрі закінчились</a>  <br>  – Statistics // Sort by Lady – Кількість кредитів в чаті за місяць <br>  – Search  – Пошук по ID хто скільки витрачав';
message.style.marginTop = '10px';
message.style.padding = '10px';
message.style.border = '1px solid lightblue';
message.style.borderRadius = '3px';

// Create the close button element
const closeButton = document.createElement('button');
closeButton.innerHTML = '&times;';
closeButton.style.position = 'absolute';
closeButton.style.top = '5px';
closeButton.style.right = '5px';
closeButton.style.backgroundColor = 'transparent';
closeButton.style.border = 'none';
closeButton.style.fontSize = '20px';
closeButton.style.cursor = 'pointer';

// Add click event listener to the close button element
closeButton.addEventListener('click', () => {
  // Remove the window element from the body
  document.body.removeChild(windowElement);
});

// Create the VIDEO button element
const videoButton = document.createElement('button');
videoButton.textContent = 'VIDEO';
videoButton.style.marginTop = '10px';
videoButton.style.marginRight = '10px';
videoButton.style.padding = '10px';
videoButton.style.backgroundColor = 'lightblue';
videoButton.style.border = 'none';
videoButton.style.borderRadius = '3px';
videoButton.style.cursor = 'pointer';

// Add click event listener to the VIDEO button element
videoButton.addEventListener('click', () => {
  window.open('https://drive.google.com/file/d/1HcF3qKjNX-ARF_xUaLLJuJnjt3iNtbOm/view?usp=sharing');
});

// Create the TEXT button element
const textButton = document.createElement('button');
textButton.textContent = 'TEXT';
textButton.style.marginTop = '10px';
textButton.style.padding = '10px';
textButton.style.backgroundColor = 'lightblue';
textButton.style.border = 'none';
textButton.style.borderRadius = '3px';
textButton.style.cursor = 'pointer';

// Add click event listener to the TEXT button element
textButton.addEventListener('click', () => {
  window.open('https://docs.google.com/document/d/1h28xEz8zfp71OO4RyDpdEOOLa9XXzvZWVlU4tRpednY/edit#heading=h.poxd9vz5jqhb');
});

// Create the buttons container element
const buttonsContainer = document.createElement('div');
buttonsContainer.style.display = 'flex';
buttonsContainer.style.justifyContent = 'center';

// Add the VIDEO and TEXT button elements to the buttons container element
buttonsContainer.appendChild(videoButton);
buttonsContainer.appendChild(textButton);

// Create the window element
const windowElement = document.createElement('div');
windowElement.style.position = 'fixed';
windowElement.style.top = '50%';
windowElement.style.left = '50%';
windowElement.style.transform = 'translate(-50%, -50%)';
windowElement.style.backgroundColor = 'white';
windowElement.style.padding = '20px';
windowElement.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)';

// Add the close button element to the window element
windowElement.appendChild(closeButton);

// Add the message element to the window element
windowElement.appendChild(message);

// Add the buttons container element to the window element
windowElement.appendChild(buttonsContainer);

// Add the window element to the body
document.body.appendChild(windowElement);
                });
                $(this).after(btn);
                buttonExists = true;
                setTimeout(function() {
                    $('#test-button').remove();
                    buttonExists = false;
                }, 3000);
            }
        });
    });
})();