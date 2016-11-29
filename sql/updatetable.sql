use crawler;

alter table bookDirectory add column book_id int default null;

alter table bookChapter add column book_id int default null;

alter table bookChapter add column book_name varchar(100) default null;