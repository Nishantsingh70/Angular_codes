import { city, country, displayCountryCode } from './calculator.js';
import { Employee } from './object_oriented.js';
import { Manager } from './object_oriented.js';
import { Programmer, Tester } from './object_oriented.js';
// ============================================== Encapsulation ===========================================
// first run "tsc first.ts" file then it will generate first.js file which will run by "node first.js"
console.log(city);
console.log(country);
displayCountryCode();
// create object of Employee class
let employee1 = new Employee();
let employee2;
employee2 = new Employee();
employee1.setEmployee(1, "nishant");
employee2.setEmployee(2, "Abhishek");
console.log(employee1.showEmployee());
employee1.setAddressDetails("Pune", 1234567890);
console.log(employee2.showEmployee());
employee2.setAddressDetails("Patna", 12349065);
employee1.setContactNumber("123", "456", "789", "012");
employee2.setContactNumber("123", "456");
let employee3 = new Employee();
console.log(employee3.showEmployee());
employee3.setEmployee(3, "Tushar");
console.log(employee3.showEmployee());
// ============================================== Inheritance ===========================================
let manager1 = new Manager();
manager1.setEmployee(4, "Virat");
manager1.setAddressDetails("Delhi", 9876543210);
console.log(manager1.showEmployee());
manager1.showSalary(50000);
// ============================================== Abstraction ===========================================
manager1.showAccount("Nishant");
// ============================================== Polymorphism ===========================================
let account;
account = new Programmer();
account.showAccount();
let account1;
account1 = new Tester();
account1.showAccount();
