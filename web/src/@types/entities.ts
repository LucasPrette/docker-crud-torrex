export interface Dependent {
  id: number;
  name: string;
  birth: string;
  employeeId: number;
}

export interface Employee {
  id: number;
  name: string;
  date: string;
  sectorId: number;
  unitId: number;
}

export interface Sector {
  id: number;
  name: string;
  launchDate: string;
}

export interface Unit {
  id: number;
  name: string;
  launchDate: string;
}
