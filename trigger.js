(function() {
  'use strict'

  function initMessageListener(hypeDoc) {
    window.addEventListener("message", function(evt) {
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

      console.log(data);

      hypeDoc.startTimelineNamed(data.name + '-timeline', dir)
      return;
    }, false);
  }

  window.HYPE_eventListeners = window.HYPE_eventListeners || [];
  window.HYPE_eventListeners.push({ "type": "HypeDocumentLoad", "callback": initMessageListener });
}).call(this);
