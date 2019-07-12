create database finalproject;

use finalproject;

create table users (
	id int auto_increment primary key,
    firstname varchar(20) not null,
    lastname varchar(20) not null,
    username varchar(20) not null unique,
    email varchar(50) not null unique,
    password varchar(100) not null
);

create table address (
	id int auto_increment primary key,
    user_id int not null,
    foreign key (user_id) references users(id),
    address_title varchar(100) not null,
    recepient_name varchar(100) not null,
    phone varchar(15) not null,
    address varchar(500) not null,
    city varchar(50) not null,
    province varchar(50) not null,
    country varchar(50) not null,
    postal_code varchar(15) not null,
    main_address varchar(10)
);

create table admins (
	id int auto_increment primary key,
    username varchar(30) not null unique,
    password varchar(100) not null
);

create table books (
	id int auto_increment primary key,
    cover varchar(50) not null,
    categories int not null,
    foreign key (categories) references book_categories(id), 
    title varchar(200) not null,
    writer varchar(100) not null,
    price int not null,
    quantity int not null,
    synopsis varchar(10000)
);

create table book_categories (
	id int auto_increment primary key,
    category varchar(100) unique
);

create table cart (
	id int auto_increment primary key,
    user_id int not null,
    foreign key (user_id) references users(id)
    on delete cascade on update cascade,
    book_id int not null,
    foreign key (book_id) references books(id)
    on delete cascade on update cascade,
    quantity int,
    createdAt timestamp default current_timestamp
);

create table payment_method (
	id int auto_increment primary key,
    bank_name varchar(100),
    bank_account bigint
);

create table shipping_method (
	id int auto_increment primary key,
    kind varchar(100),
    price int
);

alter table cart
modify column quantity int default 1;

alter table cart 
add column totprice int;

alter table users
add column avatar varchar(50);

alter table users
add column phone varchar(15);

SELECT * FROM users;
SELECT * FROM address;
SELECT * FROM admins;
SELECT * FROM books;
SELECT * FROM book_categories;
SELECT * FROM cart;
SELECT * FROM payment_method;
SELECT * FROM 

-- drop table users;
-- drop table address;
-- drop table books;
drop table cart;
drop table payment_method;
drop table shipping_method;

desc cart;

select avatar from users where username = "ifanhana";
 INSERT INTO books SET cover='buku', categories=1, title='book', writer='ifan', price=1, quantity=1, synopsis='aku adalah anak gembala';

select b.id, b.cover, bo.category, b.title, b.writer, b.price, b.quantity, b.synopsis from books b
join book_categories bo on bo.id = b.categories;

select a.id, a.user_id, b.cover, b.title, b.price, a.quantity from cart a
join books b on b.id = a.book_id where user_id = 1;

select cart.quantity * books.price as value 
from cart, books
where books.id = 12 and cart.id = 4;

select sum(totprice) as total_price from cart where user_id = 1;

INSERT INTO payment_method (`bank_name`, `bank_account`) 
VALUES 	('BCA', 3723098781),
		('Mandiri', 1650070070017),
		('BNI', 8006006009),
		('BRI', 037701000435301);
        
INSERT INTO shipping_method (`kind`, `price`) 
VALUES 	('Same Day', 2),
		('Next Day', 1),
		('Selo (>2 days)', 0.5);

UPDATE cart SET quantity = 3 WHERE id = 4;

desc books;