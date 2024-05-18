import type { Employee } from "~/@types/entities";
import type { Form } from "../shared";

interface EmployeeFormProps extends Form<Employee> {}

function EmployeeForm({ data }: EmployeeFormProps) {
  return "Form";
}

export default EmployeeForm;
