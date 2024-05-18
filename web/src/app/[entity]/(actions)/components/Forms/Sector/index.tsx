import type { Sector } from "~/@types/entities";
import type { Form } from "../shared";

interface SectorFormProps extends Form<Sector> {}

function SectorForm({ data }: SectorFormProps) {
  return "Form";
}

export default SectorForm;
