import { EmployeeRepository } from "../../../providers/database/EmployeeRepository";

export class GetEmployeesUseCase {
  constructor(private employeeRepository: EmployeeRepository) {}

  async execute() {
    return await this.employeeRepository.getBalances();
  }
}
