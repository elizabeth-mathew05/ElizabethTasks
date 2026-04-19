-- ecommerce.sql
-- Simple e-commerce database: customers, orders, products

CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

-- Customers table
CREATE TABLE IF NOT EXISTS customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    address VARCHAR(255)
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description VARCHAR(255)
);

-- Orders table
CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Sample data
INSERT INTO customers (name, email, address) VALUES
    ('Alice Smith', 'alice@example.com', '123 Main St'),
    ('Bob Johnson', 'bob@example.com', '456 Oak Ave'),
    ('Carol Lee', 'carol@example.com', '789 Pine Rd');

INSERT INTO products (name, price, description) VALUES
    ('Product A', 30.00, 'Description for Product A'),
    ('Product B', 25.00, 'Description for Product B'),
    ('Product C', 50.00, 'Description for Product C'),
    ('Product D', 80.00, 'Description for Product D');

INSERT INTO orders (customer_id, order_date, total_amount) VALUES
    (1, CURDATE() - INTERVAL 10 DAY, 120.00),
    (2, CURDATE() - INTERVAL 40 DAY, 200.00),
    (1, CURDATE() - INTERVAL 5 DAY, 180.00),
    (3, CURDATE() - INTERVAL 20 DAY, 90.00);

-- Queries

-- Retrieve all customers who have placed an order in the last 30 days
SELECT DISTINCT c.* FROM customers c JOIN orders o ON c.id = o.customer_id WHERE o.order_date >= CURDATE() - INTERVAL 30 DAY;

-- Get the total amount of all orders placed by each customer
SELECT c.name, SUM(o.total_amount) AS total_spent FROM customers c JOIN orders o ON c.id = o.customer_id GROUP BY c.id, c.name;

-- Update the price of Product C to 45.00
UPDATE products SET price = 45.00 WHERE name = 'Product C';

-- Add a new column discount to the products table
ALTER TABLE products ADD COLUMN discount DECIMAL(5,2) DEFAULT 0.00;

-- Retrieve the top 3 products with the highest price
SELECT * FROM products ORDER BY price DESC LIMIT 3;

-- Join orders and customers to retrieve the customer's name and order date for each order
SELECT c.name, o.order_date FROM orders o JOIN customers c ON o.customer_id = c.id;

-- Retrieve the orders with a total amount greater than 150.00
SELECT * FROM orders WHERE total_amount > 150.00;

-- Create order_items table for normalization
CREATE TABLE IF NOT EXISTS order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Retrieve the average total of all orders
SELECT AVG(total_amount) AS average_order_total FROM orders;

-- Get the names of customers who have ordered Product A
SELECT DISTINCT c.name FROM customers c JOIN orders o ON c.id = o.customer_id JOIN order_items oi ON o.id = oi.order_id JOIN products p ON oi.product_id = p.id WHERE p.name = 'Product A';
