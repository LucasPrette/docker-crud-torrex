export const dependentsCacheKeys = {
  prefix: "dependents",
  list: () => [dependentsCacheKeys.prefix, "all"],
  single: (id: number) => [dependentsCacheKeys.prefix, id],
};

export const employeesCacheKeys = {
  prefix: "employees",
  list: () => [employeesCacheKeys.prefix, "all"],
  single: (id: number) => [employeesCacheKeys.prefix, id],
};

export const sectorsCacheKeys = {
  prefix: "sectors",
  list: () => [sectorsCacheKeys.prefix, "all"],
  single: (id: number) => [sectorsCacheKeys.prefix, id],
};

export const unitsCacheKeys = {
  prefix: "units",
  list: () => [unitsCacheKeys.prefix, "all"],
  single: (id: number) => [unitsCacheKeys.prefix, id],
};

export const statisticsCacheKeys = {
  prefix: "statistics",
  count: () => [statisticsCacheKeys.prefix, "count"],
};
