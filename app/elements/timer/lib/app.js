(function() {
  'use strict';
  var converter = {
    s2m: function(s) {
      var minutes = Math.floor(s / 60);
      var seconds = s % 60;
      return minutes.toString() + ':' + ('0' + seconds.toString()).slice(-2);
    },
    m2s: function(m) {
      var arrayString = m.split(':');
      var minutes = Number(arrayString[0]);
      var seconds = Number(arrayString[1]);
      return minutes * 60 + seconds;
    }
  };
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
    start: function() {
      if (this.intervalId !== void 0) {
        return;
      }

      var self = this;
      this.intervalId = setInterval(
        function(){ self.timeElapses(); },
        1000
      );
      console.debug('start - ID: ' + this.intervalId);
    },
    stop:  function() {
      if (this.intervalId === void 0) {
        return;
      }

      clearInterval(this.intervalId);
      console.debug('stop -  ID: ' + this.intervalId);
      this.intervalId = void 0;
    },
    next:  function() {
      this.stop();
      this.time = '25:00';
      this.start();
    },
    timeElapses: function() {
      var now = converter.m2s(this.time);
      this.time = converter.s2m(now - 1);
    },
    ready: function() {
      console.log(this);
    }
  });

})();
