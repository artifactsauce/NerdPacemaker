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
  var defaultTime = {
    concentrate: '25:00'
  };
  Polymer({
    is: 'timer-main',
    properties: {
      time: {
        type: String,
        value: defaultTime.concentrate,
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
      this.time = defaultTime.concentrate;
      this.start();
    },
    timeElapses: function() {
      var now = converter.m2s(this.time) - 1;
      this.time = converter.s2m(now);

      if (now === 0) {
        this.stop();
        this.time = defaultTime.concentrate;

        var title = 'PomodoroTimer';
        var message = 'Elapsed time: ' + defaultTime.concentrate;
        this.message = message;
        this.notify(title, message);
      }
    },
    notify: function(title, message) {
      console.debug(title, message);
    },
    ready: function() {
      console.log(this);
    }
  });

})();
