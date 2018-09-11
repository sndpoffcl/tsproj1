/*var Timer: any = function(this : any) {
    this.start = document.getElementById('startButton');
    this.stop = document.getElementById('stopButton');
    this.onesec = document.getElementById('onesecs');
    this.twosec = document.getElementById('twosecs');
    this.threesec = document.getElementById('threesec');
    this.timer = document.getElementById('timer');
    this.timerId = null;
    this.value = 0;
    this.increment = 0;

   
    this.onesec.addEventListener('click',() => this.setTimerOne());

    this.twosec.addEventListener('click',() => this.setTimerTwo());

    this.threesec.addEventListener('click',() => this.setTimerThree());

    this.start.addEventListener('click',() => this.updateTimer());  

     this.stop.addEventListener('click', () => this.stopTimer());
};


Timer.prototype = {
    setTimerOne:function(){
        this.increment = 1;
    },
    setTimerTwo:function(){
        this.increment = 2;
    
    },
    setTimerThree:function(){
        this.increment = 3;
    },
    updateTimer: function () {
        //Catch 'this' errors
        try {     
            this.start.disabled = true;
            this.timerId = window.setInterval(() => this.timer.innerHTML = this.value++, 1000);
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

var timer = new Timer();*/

var Timer: any = function(this : any) {
    this.start = document.getElementById('startButton');
    this.stop = document.getElementById('stopButton');
    this.timer = document.getElementById('timer');
    this.timerId = null;
    this.value = 0;

    //With lambda (this will be correct)
    this.start.addEventListener('click',() => this.updateTimer());  

    //Without lambda (this will be button which isn't correct)
    //this.start.addEventListener('click', this.updateTimer); 

    this.stop.addEventListener('click', () => this.stopTimer());
};

//Using standard JavaScript prototype pattern here rather than TypeScript classes 
//(they haven't been covered yet)

Timer.prototype = {
    updateTimer: function () {
        //Catch 'this' errors
        try {     
            this.start.disabled = true;
            this.timerId = window.setInterval(() => this.timer.innerHTML = this.value++, 1000);
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

