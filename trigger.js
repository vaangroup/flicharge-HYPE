(function() {
  'use strict'

  function receiveMessage(evt) {
    var hypeDoc, data, dir;

    if (evt.origin.indexOf('flicharge') < 0) {
      return;
    }

    data = JSON.parse(evt.data);
    hypeDoc = HYPE.documents[data.name];
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
}).call(this);
