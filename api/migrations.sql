create table employees (
	idEmployee int primary key identity(1,1),
	nameEmployee varchar(40) not null,
	birth date not null,
	idSector int not null, 
	idUnit int not null, 

	foreign key idSector references setors(idSector),
	foreign key idUnit references units(idUnit)
);

create database dependents (
	idDependent int primary key identity(1,1),
	nameDependent varchar(40) not null,
	birth date not null,
	idEmployee int not null,
	
	foreign key idEmployee references employees(idEmployee)
);
	
create table sectors (
	idSector int primary key identity(1,1),
	nameSector varchar(40) not null,
	launchDate date not null
);

create table units (
	idUnit int primary key identity(1,1),
	city varchar(40) not null,
	launchDate date not null
);
