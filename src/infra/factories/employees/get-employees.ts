import { GetEmployeesUseCase } from "../../../app/use-cases/employees/GetEmployeesUseCase";
import { EmployeeRepository } from "../../../providers/database/EmployeeRepository";

export function makeGetEmployeesUseCase() {
  const employeesRepository = EmployeeRepository.getInstance();
  const getEmployeesUseCase = new GetEmployeesUseCase(employeesRepository);

  return getEmployeesUseCase;
}
