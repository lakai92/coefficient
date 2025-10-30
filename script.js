document.title = "whynot";
const script = document.createElement('script');
script.textContent = `
(function () {
  const OriginalWebSocket = window.WebSocket;

  class InterceptedWebSocket extends OriginalWebSocket {
    constructor(...args) {
      super(...args);
      console.log('[WS] Connected:', args[0]);

      this.addEventListener('message', (event) => {
        const data = event.data;

        if (data instanceof Blob) {
          const reader = new FileReader();
          reader.onload = function () {
            try {
              const text = reader.result;
              const json = JSON.parse(text);
              const contacts = json?.data?.contacts;

              if (contacts && typeof contacts === 'object') {
                for (const contactId in contacts) {
                  const contact = contacts[contactId];
                  if (
                    contact?.avatar &&
                    typeof contact.lastSeen === 'number' &&
                    contact.lastSeen > 1
                  ) {
                    console.log(contactId);
                  }
                }
              }
            } catch (e) {
              // silently ignore non-JSON or malformed content
            }
          };
          reader.readAsText(data);
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


window.scriptLoaded = true;
