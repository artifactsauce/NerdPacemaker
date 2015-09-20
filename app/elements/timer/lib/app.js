(function() {
  Polymer({
    is: 'timer-main',
    properties: {
      time: {
        type: String,
        value: '25:00',
        notify: true
      },
      message: {
        type: String,
        value: 'This is message.',
        notify: true
      }
    }
  });

})();
