
create database if not exists crawer character set utf8;	

use crawer;

create table if not exists book(
	id int unsigned not null auto_increment primary key,
	book_name varchar(100) default null,
	book_author varchar(30) null,
	chapter_num int null,
	discripe varchar(100) null,
	book_source varchar(50) null
) engine=innodb default charset=utf8;

create table if not exists bookDirectory (
	id int unsigned not null auto_increment primary key,
	book_name varchar(100) null,
	book_chapters varchar(50) null
) engine=InnoDB default charset=utf8;

create table if not exists bookChapter (
	id int unsigned not null auto_increment primary key,
	book_name varchar(100) null,
	book_author varchar(30) null,
	book_type varchar(50) null,
	book_cover varchar(50) null,
	book_last_chapter varchar(100) null,
	book_chapter_amount int null,
	book_bytes int null,
	book_create_at date null,
	book_last_update date null
) engine=InnoDB default charset=utf8;

