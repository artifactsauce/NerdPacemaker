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
    },
    start: function() { console.log('start'); },
    stop:  function() { console.log('stop'); },
    next:  function() { console.log('next'); },
    ready: function() {
      console.log(this);
    }
  });

})();
