

open("file:///Users/maximumduan/Desktop/projects/tco/typescript/index.html")



/** BEGIN __util__ ---------------------------------------------------------------- */

/**
 * TypeScript: Script compile command:
 * tsc typescript/app.ts
 * 
 * Call js: use index.html
 */
//

  
/**
 * println: print to console and return how much it printed
 * @param x
 * @returns 
 */
function println(...x: any[]): number;


function println(...x: any[]): number {
    if (x.length < 1){ 
        return 0
    }
    
    var __cache: string = ""
    x.forEach(e => console.log(e));
    
    /** console.log(__cache); */

    return x.length
}

function CurrentTime(): number {
    return Date.now();
}

/**
 * Pause Thread for *time milliseconds
 * @param long how long you need to thread sleep
 * @returns number time right after sleep
 */
function sleep(long: number): number {
    var __thread_time: number = CurrentTime() + (long)
    
    while (CurrentTime() <= __thread_time) {}
    return CurrentTime()
}

function random(min: number, max: number): number {
    return Math.round(Math.random() * (max - min) + min);
}



/** END __util__, app.ts begin ---------------------------------------------------------------- */



    





class WindowFrame {

    Genrate: number = 5;

    WriteWindow(p: string, x: any): string {
        document.getElementById(p).innerHTML = x;
        return x
    }

    CreateFrame(): void {
        
    }   
  
}

class Opposite {
    Constant: number = 1;

    Access(i: number): void {
        
    }
}



class Riddle {

    public static Riddles: {[id: string]: string; } = {
        
        "Riddle: What has to be broken before you can use it? " 
        :
        "Answer: An egg"
        ,
             
        "Riddle: Im tall when Im young, and Im short when Im old. What am I?"
        :
        "Answer: A candle"
        ,

        "Riddle: What month of the year has 28 days?"
        :
        "Answer: All of them"
        ,

        // QUESTION

        "Riddle: What question can you never answer yes to?"
        :
        "Answer: Cant you say yes?"
        ,

        
        "Riddle: A man at outside during rain without an umbrella or hat didn’t get a single hair on his head wet. Why?"
        :
        "Answer: He was bald."

    }
        
    
}




const WINDOW: WindowFrame = new WindowFrame();




WINDOW.WriteWindow("html_output", "Hello World!!!")

// println("WRITED:", WINDOW.WriteWindow("html_output", "Hello World!!!"));

WINDOW.WriteWindow("current_time", CurrentTime().toString());


let choices: string[] = [];
for (let k in Riddle.Riddles) {
    choices.push(k.toString());
}




var current: string = choices[random(0, choices.length - 1)];

WINDOW.WriteWindow("daily_riddle", current)

console.log("HERE IS THE ANSWER: ", Riddle.Riddles[current]);




