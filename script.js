document.title = "whynot";

const handleDomChanges = () => {
  const selectedOptionLabel = document.querySelector('.selected-option__label');
  const uiScrollArea = document.querySelector('.ui-scroll-area__content');

  if (selectedOptionLabel && uiScrollArea) {
    // Your logic to handle text changes
    if (selectedOptionLabel.textContent.trim() === 'Избранные' || selectedOptionLabel.textContent.trim() === 'Поиск' || 
selectedOptionLabel.textContent.trim() === 'Заблокированные' || 
selectedOptionLabel.textContent.trim() === 'Непрочитанные' || 
selectedOptionLabel.textContent.trim() === 'Запросы в контакты' || 
selectedOptionLabel.textContent.trim() === 'Пошук' || 
selectedOptionLabel.textContent.trim() === 'Вибране' || 
selectedOptionLabel.textContent.trim() === 'Заблоковані' || 
selectedOptionLabel.textContent.trim() === 'Непрочитані' || 
selectedOptionLabel.textContent.trim() === 'Запити в контакти' || 
selectedOptionLabel.textContent.trim() === 'Favourites' || 
selectedOptionLabel.textContent.trim() === 'Contact requests' || 
selectedOptionLabel.textContent.trim() === 'Unread' || 
selectedOptionLabel.textContent.trim() === 'Search' || 
selectedOptionLabel.textContent.trim() === 'Blocked') {
      uiScrollArea.style.top = '-1px';
    } else {
      uiScrollArea.style.top = '-1px';
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
