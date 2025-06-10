abstract class ActionCommand {
    doc: Receiver;
    constructor(doc: Receiver) {
     this.doc = doc;
    }

    execute(): void { /* abstract function to be implemented by sub classes */ }
}

class ActionOpenCommand implements ActionCommand {
    doc: Receiver;
    constructor(doc: Receiver) {
     this.doc = doc;
    }

    execute(): void {
        this.doc.open()
    }
}

class ActionSaveCommand implements ActionCommand {
    doc: Receiver;
    constructor(doc: Receiver) {
     this.doc = doc;
    }

    execute(): void {
        this.doc.save()
    }
}

class Receiver {
    open(){
        console.log("document openend")
    }
    save(){
        console.log("document saved")
    } 
}

class MenuOptions {
    list : ActionCommand[];
    addCommand(cmd: ActionCommand): void{
        this.list.push(cmd)
    }

    execute(){
        for(const element of this.list){
            element.execute()
        }
    }
}

const receiver = new Receiver()
const saveCommand = new ActionSaveCommand(receiver);
const openCommand = new ActionOpenCommand(receiver);

const menuOpts = new MenuOptions();

menuOpts.addCommand(saveCommand)
menuOpts.addCommand(openCommand)

menuOpts.execute()