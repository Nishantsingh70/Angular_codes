
// ============================================== Encapsulation ===========================================

export class Employee {

    // class member ( Instance variable )
    // empId: number = 0
    // empName: string = ""

    // ===================== default constructor
    // constructor(){
    //     this.empId = 0
    //     this.empName = ""
    // }

    // ===================== parameterized constructor
    constructor(private empId?: number, private empName?: string){  // optional parameter
        this.empId = 0
        this.empName = ""
    }

    // setter method
    setEmployee(empId: number, empName: string) : void {          
        this.empId = empId
        this.empName = empName
    }

    setAddressDetails(city: string, contact: number = 0) : void {
        console.log(`Employee City : ${city} and Contact is ${contact}`);
    }

    setContactNumber(...contacts: string[]){   // Rest parameter
        console.log(contacts.join(" "));
    }

    // getter method
    showEmployee() : string {
        return `Emp Id : ${this.empId}, Emp Name : ${this.empName}`
    }
}


// ============================================== Inheritance ===========================================

// export class Manager extends Employee{
//     // manager_salary: number = 0;
//     private manager_salary!: number;

//     showSalary(sal: number){
//         this.manager_salary = sal
//         console.log(this.manager_salary);
//     }
// }


// ============================================== Abstraction ===========================================

export class Manager extends Employee implements AccountDetails{
    // manager_salary: number = 0;
    private manager_salary!: number;

    showAccount(name?: string): void {
        console.log("Account Name : " + name);
    }

    showSalary(sal: number){
        this.manager_salary = sal
        console.log(this.manager_salary);
    }
}

// we are not able to extend two classes together so we will use interface to achieve multiple inheritance.

export abstract class Account{
    abstract showAccount(): void;

    showBankName(){
        console.log("ABCD Bank");
    }
}

interface AccountDetails{
    showAccount(name?: string): void;
}


// ============================================== Polymorphism ===========================================

export class Programmer extends Account{

    showAccount(): void {
        console.log("Programmer Account");
    }
}

export class Tester extends Account{

    showAccount(): void {
        console.log("Tester Account");
    }
}


// let account: Account;
// account = new Programmer();
// account.showAccount();

// let account1: Account;
// account1 = new Tester();
// account1.showAccount();