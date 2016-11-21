(function() {
  'use strict'

  function initMessageListener(hypeDoc) {
    window.addEventListener("message", function(evt) {
      var data, playDirection;

      if (evt.origin.indexOf('flicharge') < 0) {
        return;
      }

      data = JSON.parse(evt.data);
      playDirection = (function() {
        if (data.playDirection === 'reverse') {
          return hypeDoc.kDirectionReverse;
        }
        return hypeDoc.kDirectionForward;
      })();

      hypeDoc.startTimelineNamed(data.timeline, playDirection)
      return;
    }, false);
  }

  window.HYPE_eventListeners = window.HYPE_eventListeners || [];
  window.HYPE_eventListeners.push({ "type": "HypeDocumentLoad", "callback": initMessageListener });
}).call(this);
