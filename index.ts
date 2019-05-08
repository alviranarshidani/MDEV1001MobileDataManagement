console.log("Hello avi");

class Printer
{
    private printer:(str:string) => void;
    public constructor(func:(str:string) => void)
    {
        this.printer = func;
    }
    public print(str:string):void
    {
        this.printer(str);
    }  

}
let printer = new Printer(console.log);
    printer.print("helloooooo");

    //to keep watch of .ts
    //./node_modules/.bin/tsc
    //then run node index
    //this will give output from index.js which will be generated