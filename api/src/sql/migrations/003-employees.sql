CREATE TABLE employees (
	idEmployee INT PRIMARY KEY IDENTITY(1,1),
	nameEmployee VARCHAR(40) NOT NULL,
	birth date NOT NULL,
	idSector INT NOT NULL, 
	idUnit INT NOT NULL
);

ALTER TABLE employees ADD CONSTRAINT FK_Employee_SectorID FOREIGN KEY (idSector) REFERENCES sectors(idSector);

ALTER TABLE employees ADD CONSTRAINT FK_Employee_UnitID FOREIGN KEY (idUnit) REFERENCES units(idUnit);

