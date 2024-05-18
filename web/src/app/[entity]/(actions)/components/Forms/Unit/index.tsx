import type { Unit } from "~/@types/entities";
import type { Form } from "../shared";

interface UnitFormProps extends Form<Unit> {}

function UnitForm({ data }: UnitFormProps) {
  return "Form";
}

export default UnitForm;
