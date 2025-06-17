// simulation of 3rd party tool
class JSONAnalyticsTool {
    private jsonData: string;

    public setJsonData(jsonData: string) {
        this.jsonData = jsonData;
    }

    public AnalyzeData() {
        if (this.jsonData.includes("json")) {
            console.log("Analyzing JSON Data - " + this.jsonData);
        } else {
            console.log("Not in the correct format. Can't analyze!");
        }
    }
}

interface IAdapter {
    AnalyzeData(): void;
}

class XMLToJSONAdapter implements IAdapter {
    private jsonAnalyticsTool: JSONAnalyticsTool;

    public setXmlData(xmlData: string) {
        console.log("Converting XML to JSON - " + xmlData);
        const newData = xmlData + "json";
        this.jsonAnalyticsTool = new JSONAnalyticsTool();
        this.jsonAnalyticsTool.setJsonData(newData);
    }

    public AnalyzeData(): void {
        this.jsonAnalyticsTool.AnalyzeData();
    }
}

// main
// send JSON to the tool directly
let xmlData = "Sample json Data";
let tool1 = new JSONAnalyticsTool();
tool1.setJsonData(xmlData);
tool1.AnalyzeData();

console.log("----------------------------------------------");

// convert xml to json and send to the tool
let xmlData2 = "Sample xml Data";
let tool2 = new XMLToJSONAdapter();
tool2.setXmlData(xmlData2);
tool2.AnalyzeData();