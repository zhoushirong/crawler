
create database if not exists crawler character set utf8;	

use crawler;

create table if not exists book(
	id int unsigned not null auto_increment primary key,
	book_name varchar(100) default null,
	book_author varchar(30) null,
	chapter_num int null,
	discripe char(255) null,
	book_source varchar(50) null
) engine=innodb default charset=utf8;

create table if not exists bookDirectory (
	id int unsigned not null auto_increment primary key,
	book_name varchar(100) null,
	book_chapters text null
) engine=InnoDB default charset=utf8;

create table if not exists bookChapter (
	id int unsigned not null auto_increment primary key,
	book_name varchar(100) null,
	book_chapter_number int null,
	book_chapter_name varchar(100) null,
	book_chapter_content mediumtext null,
	book_chapter_previous varchar(100) null,
	book_chapter_next varchar(100) null
) engine=InnoDB default charset=utf8;
