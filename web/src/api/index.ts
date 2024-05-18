import employees from "./employees";
import dependents from "./dependents";
import sectors from "./sectors";
import units from "./units";
import type { Entities } from "~/constants/entities";

const api = {
  employees,
  dependents,
  sectors,
  units,
} satisfies Record<Entities, unknown>;

export default api;
