

/* 

const wsScript = document.createElement('script');
wsScript.textContent = `
(function () {
  const STORAGE_KEY = 'ws_user_ids';

  function loadIds() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.warn('[WS] failed to load ids from localStorage', e);
      return [];
    }
  }

  function saveIds(ids) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (e) {
      console.warn('[WS] failed to save ids to localStorage', e);
    }
  }

  function addId(newId) {
    if (!newId) return;
    const existing = new Set(loadIds());
    if (!existing.has(newId)) {
      existing.add(newId);
      saveIds(Array.from(existing));
      console.log('[WS] Added user id:', newId);
    }
  }

  const OriginalWebSocket = window.WebSocket;

  class InterceptedWebSocket extends OriginalWebSocket {
    constructor(...args) {
      super(...args);
      console.log('[WS] Connected:', args[0]);

      this.addEventListener('message', (event) => {
        const handleText = (text) => {
          try {
            const json = JSON.parse(text);
            const userId = json?.data?.user?.id;
            if (userId) {
              addId(userId);
            }
          } catch (e) {
            // игнорируем если не JSON
          }
        };

        const data = event.data;

        if (data instanceof Blob) {
          const reader = new FileReader();
          reader.onload = function () {
            if (reader.result != null) handleText(reader.result);
          };
          reader.readAsText(data);
        } else if (typeof data === 'string') {
          handleText(data);
        } else if (data instanceof ArrayBuffer) {
          try {
            const text = new TextDecoder().decode(new Uint8Array(data));
            handleText(text);
          } catch (e) {}
        } else {
          try {
            handleText(JSON.stringify(data));
          } catch (e) {}
        }
      });

      const originalSend = this.send;
      this.send = function (data) {
        return originalSend.call(this, data);
      };
    }
  }

  window.WebSocket = InterceptedWebSocket;
})();
`;

document.documentElement.prepend(wsScript);


*/

window.scriptLoaded = true;
