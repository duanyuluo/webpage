open("file:///Users/maximumduan/Desktop/projects/tco/typescript/index.html");
function println() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    if (x.length < 1) {
        return 0;
    }
    var __cache = "";
    x.forEach(function (e) { return console.log(e); });
    /** console.log(__cache); */
    return x.length;
}
function CurrentTime() {
    return Date.now();
}
/**
 * Pause Thread for *time milliseconds
 * @param long how long you need to thread sleep
 * @returns number time right after sleep
 */
function sleep(long) {
    var __thread_time = CurrentTime() + (long);
    while (CurrentTime() <= __thread_time) { }
    return CurrentTime();
}
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
/** END __util__, app.ts begin ---------------------------------------------------------------- */
var WindowFrame = /** @class */ (function () {
    function WindowFrame() {
        this.Genrate = 5;
    }
    WindowFrame.prototype.WriteWindow = function (p, x) {
        document.getElementById(p).innerHTML = x;
        return x;
    };
    WindowFrame.prototype.CreateFrame = function () {
    };
    return WindowFrame;
}());
var Opposite = /** @class */ (function () {
    function Opposite() {
        this.Constant = 1;
    }
    Opposite.prototype.Access = function (i) {
    };
    return Opposite;
}());
var Riddle = /** @class */ (function () {
    function Riddle() {
    }
    Riddle.Riddles = {
        "Riddle: What has to be broken before you can use it? ": "Answer: An egg",
        "Riddle: Im tall when Im young, and Im short when Im old. What am I?": "Answer: A candle",
        "Riddle: What month of the year has 28 days?": "Answer: All of them",
        // QUESTION
        "Riddle: What question can you never answer yes to?": "Answer: Cant you say yes?",
        "Riddle: A man at outside during rain without an umbrella or hat didn’t get a single hair on his head wet. Why?": "Answer: He was bald."
    };
    return Riddle;
}());
var WINDOW = new WindowFrame();
WINDOW.WriteWindow("html_output", "Hello World!!!");
// println("WRITED:", WINDOW.WriteWindow("html_output", "Hello World!!!"));
WINDOW.WriteWindow("current_time", CurrentTime().toString());
var choices = [];
for (var k in Riddle.Riddles) {
    choices.push(k.toString());
}
var current = choices[random(0, choices.length - 1)];
WINDOW.WriteWindow("daily_riddle", current);
console.log("HERE IS THE ANSWER: ", Riddle.Riddles[current]);
