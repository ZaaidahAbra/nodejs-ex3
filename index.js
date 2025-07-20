const pool = require('./db');

// 6a. Function to get all users
async function getAllUsers() {
    try {
        const [rows] = await pool.query('SELECT * FROM users');
        console.log('All Users:', rows);
        return rows;
    } catch (err) {
        console.error('Error fetching users:', err);
        throw err;
    }
}

// 6b. Function to get all products
async function getAllProducts() {
    try {
        const [rows] = await pool.query('SELECT * FROM products');
        console.log('All Products:', rows);
        return rows;
    } catch (err) {
        console.error('Error fetching products:', err);
        throw err;
    }
}

// 7a. Function to delete product 'Bar One'
async function deleteBaro() {
    try {
        // First check if product exists
        const [check] = await pool.query(
            'SELECT * FROM products WHERE product_name = ?',
            ['Bar One']
        );

        if (check.length === 0) {
            console.log('Bar One not found in database');
            return;
        }

        const [result] = await pool.query(
            'DELETE FROM products WHERE product_name = ?',
            ['Bar One']
        );
        
        if (result.affectedRows > 0) {
            console.log('Successfully deleted Bar One');
        } else {
            console.log('No rows deleted - product not found');
        }
        return result;
    } catch (err) {
        console.error('Error deleting Bar One:', err);
        throw err;
    }
}

// 7b. Function to insert favorite food
async function addFavoriteFood() {
    
    const favoriteFood = {
        product_code: 'pizza3',
        product_name: 'Pizza',
        product_price: 12.99,
        product_quantity: 10
    };

    try {
        const [result] = await pool.query(
            'INSERT INTO products (product_code, product_name, product_price, product_quantity) VALUES (?, ?, ?, ?)',
            [
                favoriteFood.product_code,
                favoriteFood.product_name,
                favoriteFood.product_price,
                favoriteFood.product_quantity
            ]
        );
        console.log('Successfully added favorite food:', favoriteFood);
        return result;
    } catch (err) {
        console.error('Error adding favorite food:', err);
        throw err;
    }
}

// 7c. Function to update product
async function updateProduct(productCode, updates) {
    try {
        // First check if product exists
        const [check] = await pool.query(
            'SELECT * FROM products WHERE product_code = ?',
            [productCode]
        );
        
        if (check.length === 0) {
            console.log('Product not found with code:', productCode);
            return;
        }

        const [result] = await pool.query(
            'UPDATE products SET ? WHERE product_code = ?',
            [updates, productCode]
        );
        
        console.log('Successfully updated product:', productCode);
        return result;
    } catch (err) {
        console.error('Error updating product:', err);
        throw err;
    }
}

// Test all functions with error handling
async function testAll() {
    try {
        console.log('=== Testing all functions ===');
        await getAllUsers();
        await getAllProducts();
        await deleteBaro();
        await addFavoriteFood();
        await updateProduct('mon1', { 
            product_price: 10.99, 
            product_quantity: 15 
        });
        console.log('=== Testing complete ===');
    } catch (err) {
        console.error('Test failed:', err);
    } finally {
        pool.end(); // Close the connection pool
        process.exit();
    }
}

testAll();