import type { Dependent } from "~/@types/entities";
import { Form } from "../shared";

interface DependentFormProps extends Form<Dependent> {}

function DependentForm({ data }: DependentFormProps) {
  return "Form";
}

export default DependentForm;
