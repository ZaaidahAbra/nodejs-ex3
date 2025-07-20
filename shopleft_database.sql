CREATE DATABASE shopleft_database;
USE shopleft_database;

CREATE TABLE users (
	id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR (255) NOT NULL,
    first_name VARCHAR(255)  NOT NULL,
    last_name VARCHAR(255)  NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
	product_code VARCHAR(40) PRIMARY KEY NOT NULL,
    product_name VARCHAR (45) NOT NULL,
    product_price DECIMAL(5,2)  NOT NULL,
    product_quantity INT  NOT NULL
);

INSERT INTO users ( email, first_name, last_name, password )
VALUES ('matthew@lifechoices.co.za' , 'matthew' , 'brown' , 'matthewbrown'),
		('zaaidah@lifechoices.co.za' , 'zaaidah' , 'abrahams' , 'zaaidahabra');
        
INSERT INTO products (product_code , product_name, product_price,product_quantity)
VALUES ('baro1' , 'Bar One' , 9.99 , 20),
		('hand1' , 'Handy Andy' , 19.00 , 5),
        ('pota1' , 'Potatoes' , 38.99 , 10),
        ('catf1' , 'Cat Food' , 14.00 , 15),
        ('Pea1' , 'Peanut Butter' , 20.20 , 5),
        ('mon1' , 'Monster' , 19.00 , 7);
        
INSERT INTO products (product_code , product_name, product_price,product_quantity)
VALUES ('baro1' , 'Bar One' , 9.99 , 20);

ROLLBACK;

