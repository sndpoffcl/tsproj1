"use strict";
var Timer = function () {
    var _this = this;
    this.start = document.getElementById('startButton');
    this.stop = document.getElementById('stopButton');
    this.onesec = document.getElementById('onesecs');
    this.twosec = document.getElementById('twosecs');
    this.threesec = document.getElementById('threesecs');
    this.timer = document.getElementById('timer');
    this.timerId = null;
    this.value = 0;
    this.increment = 0;
    this.onesec.addEventListener('click', function () { return _this.setTimerOne(); });
    this.twosec.addEventListener('click', function () { return _this.setTimerTwo(); });
    this.threesec.addEventListener('click', function () { return _this.setTimerThree(); });   
    this.start.addEventListener('click', function () { return _this.updateTimer(); });
    this.stop.addEventListener('click', function () { return _this.stopTimer(); });
};
Timer.prototype = {
    setTimerOne: function () {
        this.increment = 1;
    },
    setTimerTwo: function () {
        this.increment = 2;
    },
    setTimerThree: function () {
        this.increment = 3;
    },
    updateTimer: function () {
        var _this = this;
        //Catch 'this' errors
        try {
            this.start.disabled = true;
            console.log(this.increment);
            console.log(this.value);
            this.timerId = window.setInterval(function () { return _this.timer.innerHTML = _this.value = _this.value + _this.increment; }, 1000);
        }
        catch (exp) {
            alert(exp);
        }
    },
    stopTimer: function () {
        this.start.disabled = false;
        window.clearInterval(this.timerId);
        this.value = 0;
        this.timer.innerHTML = 0;
    }
};
var timer = new Timer();
