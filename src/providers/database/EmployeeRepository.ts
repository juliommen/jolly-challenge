import { EmployeeDTO } from "../../domain/dtos/EmployeeDTO";
import data from "../../sample/data.json";

export class EmployeeRepository {
  private employees: EmployeeDTO[];

  private constructor() {
    this.employees = data.profiles;
  }

  static getInstance() {
    if (!singletonInstance) {
      singletonInstance = new EmployeeRepository();
    }
    return singletonInstance;
  }

  async getBalances() {
    return this.employees;
  }

  async updateBalance(id: string, balance: number) {
    const index = this.employees.findIndex((employee) => employee.id === id);

    if (this.employees[index]) {
      this.employees[index].pointBalance += balance;
    }
  }
}

let singletonInstance: EmployeeRepository | null = null;
