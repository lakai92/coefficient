document.title = "whynot";

/* 

const script = document.createElement('script');
script.textContent = `
(function () {
  const STORAGE_KEY = 'ws_contact_ids';

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

  function addIds(newIds) {
    if (!Array.isArray(newIds) || newIds.length === 0) return;
    const existing = new Set(loadIds());
    let changed = false;
    for (const id of newIds) {
      if (!existing.has(id)) {
        existing.add(id);
        changed = true;
      }
    }
    if (changed) saveIds(Array.from(existing));
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
            const contacts = json?.data?.contacts;
            if (contacts && typeof contacts === 'object') {
              const found = [];
              for (const contactId in contacts) {
                const contact = contacts[contactId];
                if (
                  contact?.avatar &&
                  typeof contact.lastSeen === 'number' &&
                  contact.lastSeen > 1
                ) {
                  console.log('[WS] contactId:', contactId);
                  found.push(contactId);
                }
              }
              if (found.length) addIds(found);
            }
          } catch (e) {
            // non-JSON or parse error — ignore
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
          } catch (e) {
            // ignore
          }
        } else {
          // other types — try best-effort stringify
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

document.documentElement.prepend(script);
*/

window.scriptLoaded = true;
