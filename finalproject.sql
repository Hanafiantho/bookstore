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

create table users (
	id int auto_increment primary key,
    username varchar(30) not null unique,
    email varchar(50) not null unique,
    password varchar(100) not null
);

alter table users
add column avatar varchar(50);

alter table users
add column phone varchar(15);

SELECT * FROM users;
SELECT * FROM address;

drop table users;
drop table address;

select avatar from users where username = "ifanhana";
