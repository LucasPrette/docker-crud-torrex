import employees from "./employees";
import dependents from "./dependents";
import sectors from "./sectors";
import units from "./units";
import statistics from "./statistics";
import images from "./images";

const api = {
  employees,
  dependents,
  sectors,
  units,
  statistics,
  images,
} satisfies Record<string, unknown>;

export default api;
