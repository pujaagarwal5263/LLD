abstract class EmployeeComponent {
    abstract displayInfo(): void;
    abstract calculateSalary(): number;
}

class Employee extends EmployeeComponent {
    private name: string;
    private salary: number;

    constructor(name, salary){
        super()
        this.name = name
        this.salary = salary
    }
    displayInfo() {
        console.log("Employee Name:" + this.name)
    }
    calculateSalary(): number {
        return this.salary
    }
}

class Team extends EmployeeComponent {
    private name: string;
    private empList: Employee[];
    
    constructor(name){
        super()
        this.name = name
        this.empList = []
    }

    addEmployee(emp: Employee){
        this.empList.push(emp)
    }

    displayInfo(): void {
        console.log("Team Name" + this.name)
    }

    calculateSalary(): number {
        let totalSalary = 0
        this.empList.map((emp)=>{
            totalSalary += emp.calculateSalary()
        })
        return totalSalary;
    }
}

class Department extends EmployeeComponent {
    private name: string;
    private empList: Employee[];
    
    constructor(name){
        super()
        this.name = name
        this.empList = []
    }

    addEmployee(emp: Employee){
        this.empList.push(emp)
    }

    addEmployees(emps: Employee[]){
        this.empList.push(...emps)
    }

    displayInfo(): void {
        console.log("Department Name" + this.name)
    }

    calculateSalary(): number {
        let totalSalary = 0
        this.empList.map((emp)=>{
            totalSalary += emp.calculateSalary()
        })
        return totalSalary;
    }
}

//main
let puja = new Employee("Engineer puja",200000)
puja.displayInfo()
puja.calculateSalary()

let harshith = new Employee("Engineer harshith", 210000)

let portal = new Team("portal team")
portal.addEmployee(puja)
portal.addEmployee(harshith)
portal.displayInfo()
portal.calculateSalary()

let engineering = new Department("Engineering")
let saurabh = new Employee("Saurabh", 200000)
let adarsh = new Employee("Adarsh",100000)
engineering.addEmployee(puja)
engineering.addEmployees([harshith,saurabh,adarsh])
engineering.displayInfo()
engineering.calculateSalary()


// OUTPUT
// Employee Name:Engineer puja
// 200000
// Team Nameportal team
// 410000
// Department NameEngineering
// 710000