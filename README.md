# QuickCart - E-Commerce Website Backend

# Overview

This repository contains the backend code for an eCommerce website. It includes user authentication, product management, cart functionality, and API routes for efficient data handling. The backend is built using Node.js, Express.js, and MongoDB.

###
## **Features : **

1. **User Authentication :**
   - Sign up, Sign in, and Logout functionalities using JWT.
   - User data is stored securely in the database.
   - Middleware for protected routes (authToken).

2. **Admin Panel :**
   - Manage all users.
   - Update user details.
   - Can Change Role.
   - Able to upload Products.

3. **Product Management :**
   - Upload, update, and retrieve products.
   - Filter products by category and search functionality.

4. **Cart Functionality :**
   - Add, update, view, and delete products from the cart.
   - Count total cart products.

5. **Secure API Endpoints :**
   - Routes secured with JWT middleware.
   - Role-based access control.

6. **Database Models :**
   - User, Product, and Cart schemas.

## **API Endpoints : **

1. **User Authentication :**
<table>
    <thead>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/signup</td>
            <td>User sign-up</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/signin</td>
            <td>User sign-in</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/user-details</td>
            <td>Fetch user details</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/userLogout</td>
            <td>User logout</td>
        </tr>
    </tbody>
</table>

2. **Admin Panel :**
<table>
    <thead>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/api/all-user</td>
            <td>Fetch all users</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/update-user</td>
            <td>Update user details</td>
        </tr>
    </tbody>
</table>

3. **Product Management :**
<table>
    <thead>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/upload-product</td>
            <td>Add a new product</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/get-product</td>
            <td>Retrieve all products</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/update-product</td>
            <td>Update product details</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/get-categoryProduct</td>
            <td>Get products by category</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/category-product</td>
            <td>Retrieve products by category</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/product-details</td>
            <td>Get product details</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/search</td>
            <td>Search products</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/filter-product</td>
            <td>Filter products</td>
        </tr>
    </tbody>
</table>

4. **Cart Management :**
<table>
    <thead>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/addtocart</td>
            <td>Add product to cart</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/countAddToCartProduct</td>
            <td>Count cart products</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/view-card-product</td>
            <td>View cart products</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/update-cart-product</td>
            <td>Update cart product details</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/delete-cart-product</td>
            <td>Delete cart product</td>
        </tr>
    </tbody>
</table>

## **Getting Started : **

- Follow the steps below to set up and run the backend server locally :

1. **Prerequisites :**
   ### Ensure you have the following installed on your system :
   - Node.js (v14+)
   - MongoDB
   - Git

2. **Installation :**
   ### Clone the Repository
   - git clone <repository-url>
   - cd ecommerce-backend

3. **Install Dependencies :**
   - npm install

4. **Environment Variables :**
   - Create a .env file in the root of the project.
   - Add the following environment variables :
     - MONGODB_URI=<your-mongodb-connection-string>
     - TOKEN_SECRET_KEY=<your-secret-key>
     - FRONTEND_URL=http://localhost:3000

5. **Run the Application :**
   - Start the development server :
   - npm start
   - The server will be running at http://localhost:8080.
   - Ensure MongoDB is connected successfully before using the APIs.