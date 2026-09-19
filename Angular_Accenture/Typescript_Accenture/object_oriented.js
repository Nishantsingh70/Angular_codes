// ============================================== Encapsulation ===========================================
export class Employee {
    empId;
    empName;
    // class member ( Instance variable )
    // empId: number = 0
    // empName: string = ""
    // ===================== default constructor
    // constructor(){
    //     this.empId = 0
    //     this.empName = ""
    // }
    // ===================== parameterized constructor
    constructor(empId, empName) {
        this.empId = empId;
        this.empName = empName;
        this.empId = 0;
        this.empName = "";
    }
    // setter method
    setEmployee(empId, empName) {
        this.empId = empId;
        this.empName = empName;
    }
    setAddressDetails(city, contact = 0) {
        console.log(`Employee City : ${city} and Contact is ${contact}`);
    }
    setContactNumber(...contacts) {
        console.log(contacts.join(" "));
    }
    // getter method
    showEmployee() {
        return `Emp Id : ${this.empId}, Emp Name : ${this.empName}`;
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
export class Manager extends Employee {
    // manager_salary: number = 0;
    manager_salary;
    showAccount(name) {
        console.log("Account Name : " + name);
    }
    showSalary(sal) {
        this.manager_salary = sal;
        console.log(this.manager_salary);
    }
}
// we are not able to extend two classes together so we will use interface to achieve multiple inheritance.
export class Account {
    showBankName() {
        console.log("ABCD Bank");
    }
}
// ============================================== Polymorphism ===========================================
export class Programmer extends Account {
    showAccount() {
        console.log("Programmer Account");
    }
}
export class Tester extends Account {
    showAccount() {
        console.log("Tester Account");
    }
}
// let account: Account;
// account = new Programmer();
// account.showAccount();
// let account1: Account;
// account1 = new Tester();
// account1.showAccount();
