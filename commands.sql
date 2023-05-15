
CREATE TABLE blogs (id SERIAL PRIMARY KEY, author text, url text NOT NULL, title text NOT NULL, likes int DEFAULT 0);
insert into blogs (author, url, title) values ('Maxwell','cats.come','Why cats are amazing');
insert into blogs (url, title) values ('cats.com','Cats are cool');
select * from blogs;