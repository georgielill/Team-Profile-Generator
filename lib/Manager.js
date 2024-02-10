// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    if (!officeNumber) {
      throw new Error("Invalid input. Please provide office number.");
    }
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
      return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;