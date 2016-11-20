use testdb;

create table students4
(
	id int unsigned not null auto_increment primary key,
	name char(8) not null,
	sex char(4) not null,
	age tinyint unsigned not null,
	tel char(13) null default "-"
);
create table book2
(
	id int unsigned not null auto_increment primary key,
	title char(100) not null,
	author char(50) not null,
	size tinyint unsigned not null,
	discripe char(13) null
);