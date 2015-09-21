(function() {
  'use strict';
  var converter = {
    s2m: function(s) {
      var minutes = Math.floor(s / 60);
      var seconds = s % 60;
      return ('0' + minutes.toString()).slice(-2) + ':' + ('0' + seconds.toString()).slice(-2);
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
        value: 'Let\'s get started.',
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
      this.message = 'Time has elapsed...';
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
      var now = converter.m2s(this.time) - 1;
      this.time = converter.s2m(now);

      if (now === 0) {
        this.stop();

        var title = 'PomodoroTimer';
        var message = 'Elapsed time: 00:10';
        this.message = message;
        this.notify(title, message);
        console.debug(title, message);
      }
    },
    notify: function(title, message) {
    },
    ready: function() {
      console.log(this);
    }
  });

})();
