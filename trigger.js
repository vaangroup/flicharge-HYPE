(function() {
  'use strict'

  function initMessageListener(hypeDoc, element, id) {
    function receiveMessage(evt) {
      var data, dir;

      if (evt.origin.indexOf('flicharge') < 0) {
        return;
      }

      data = JSON.parse(evt.data);
      dir = (function() {
        if (data.dir === 'reverse') {
          return hypeDoc.kDirectionReverse;
        }
        return hypeDoc.kDirectionForward;
      })();

      hypeDoc.startTimelineNamed(data.name + '-timeline', dir)
      return;
    }

    window.addEventListener("message", receiveMessage, false);
  }

  window.HYPE_eventListeners = window.HYPE_eventListeners || [];
  window.HYPE_eventListeners.push({ "type": "HypeDocumentLoad", "callback": initMessageListener });
}).call(this);
