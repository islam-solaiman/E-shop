# Eshop

![Eshop](/frontend/public/images/eshop.png)

Welcome to my React and Node tutorial to build a fully-functional e-commerce website exactly like amazon. Open your code editor and follow me for the next hours to build an e-commerce website using MERN stack (MongoDB, ExpressJS, React and Node.JS).

## Demo Website

- 👉 Render : [https://mern-eshop-0d433d7dc76c.herokuapp.com/](https://mern-eshop-0d433d7dc76c.herokuapp.com/)

## Architecture Overview

### Ftontend:

- HTML5 and CSS3: Semantic Elements, CSS Grid, Flexbox
- React: Components, Props, Events, Hooks, Router, Axios
- Context API: Store, Reducers, Actions

### Backend:

- Node & Express: Web API, Body Parser, File Upload, JWT
- MongoDB: Mongoose, Aggregation
- Development: ESLint, Babel, Git, Github,
- Deployment: Heroku

## Run Locally

### 1. Clone repo

```
$ git clone https://github.com/islam-solaiman/E-shop.git
$ cd E-shop
```

### 2. Create .env File

- duplicate .env.example in backend folder and rename it to .env

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI=mongodb://localhost/E-shop
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

### 4. Run Backend

```
$ cd backend
$ npm install
$ npm start
```

### 5. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 6. Seed Users and Products

- Run this on browser: http://localhost:5000/api/seed
- It returns admin email and password and 6 sample products

### 7. Admin Login

- Run http://localhost:3000/signin
- Enter admin email and password and click signin

## Support

- Contact collaborators: [Islam](islam.solaiman92@gmail.com)[Abdelrahman](abdelrahmanmohammed049@gmail.com)

# Steps followe to build the project:

1. Create React App
2. Create Git Repository
3. List Products
   1. create products array
   2. add product images
   3. render products
   4. style products
4. Add page routing
5. Create Node.JS Server
   1. Update package.json set type: module
   2. Add .js to imports
   3. install express
   4. create server.js
   5. add start command as node backend/server.js
   6. create route for / return backend is ready.
   7. move products.js from frontend to backend
   8. create route for /api/products
   9. return products
   10. run npm start
6. Fetch Products From Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
7. Manage State By Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from usReducer
8. Add bootstrap UI Framework
   1. npm install react-bootstrap bootstrap
   2. update App.js
9. Create Product and Rating Component
   1. create Rating component
   2. Create Product component
   3. Use Rating component in Product component
10. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action
11. Create Loading and Message Component
    1. create loading component
    2. use spinner component
    3. craete message component
    4. create utils.js to define getError fuction
12. Create React Context For Add Item To Cart
    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler
13. Complete Add To Cart
    1. check exist item in the cart
    2. check count in stock in backend
14. Create Cart Screen
    1. create 2 columns
    2. display items list
    3. create action column
15. Complete Cart Screen
    1. click handler for inc/dec item
    2. click handler for remove item
    3. click handler for checkout
16. Create Signin Screen
    1. create sign in form
    2. add email and password
    3. add signin button
17. Connect To MongoDB Database
    1. create atlas monogodb database
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database
18. Seed Sample Products
    1. create Product model
    2. create seed route
    3. use route in server.js
    4. seed sample product
19. Seed Sample Users
    1. create user model
    2. seed sample users
20. Create Signin Backend API
    1. create signin api
    2. npm install jsonwebtoken
    3. define generateToken
21. Complete Signin Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
22. Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar
23. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api
24. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit
25. Create Place Order Screen
    1. show cart items, payment and address
    2. calculate order summary
26. Implement Place Order Action
    1. handle place order action
    2. create order create api
27. Create Order Screen
    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 cloumns
28. Pay Order By PayPal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
29. Display Order History
    1. create order screen
    2. create order history api
    3. use api in the frontend
30. Create Profile Screen
    1. get user info from context
    2. show user information
    3. create user update api
    4. update user info
31. Add Sidebar and Search Box
    1. add sidebar
    2. add search box
32. Create Search Screen
    1. show filters
    2. create api for searching products
    3. display results
33. Create Admin Menu
    1. define protected route component
    2. define admin route component
    3. add menu for admin in header
34. Create Dashboard Screen
    1. create dashboard ui
    2. implement backend api
    3. connect ui to backend
35. Manage Products
    1. create products list ui
    2. implement backend api
    3. fetch data
36. Create Product
    1. create products button
    2. implement backend api
    3. handle on click
37. Create Edit Product
    1. create edit button
    2. create edit product ui
    3. dispaly product info in the input boxes
38. Implement Update Product
    1. create edit product backend api
    2. handle update click
39. Upload Product Image
    1. create cloudinary account
    2. use the api key in env file
    3. handle upload file
    4. implement backend api to upload
40. Delete Product
    1. show delete button
    2. implement backend api
    3. handle on click
41. List Orders
    1. create order list screen
    2. implement backen api
    3. fetch and display orders
42. Deliver Order
    1. add deliver button
    2. handle click action
    3. implement backen api for deliver
43. Delete Order
    1. add delete button
    2. handle click action
    3. implement backen api for delete
44. List Users
    1. create user list screen
    2. implement backen api
    3. fetch and display users
45. Edit User
    1. create edit button
    2. create edit product ui
    3. dispaly product info in the input boxes
    4. implement backend api
    5. handle edit click
46. Delete User
    1. add delete button
    2. handle click action
    3. implement backen api for delete
47. Choose Address On Google Map
    1. create google map credentials
    2. update .env file with Google Api Key
    3. create api to send google api to frontend
    4. create map screen
    5. fetch google api
    6. getUserLocation
    7. install @react-google-maps/api
    8. use it in shipping screen
    9. apply map to the checkout screen
48. Email order receipt by mailgun
    1. create mailgun account
    2. add and verify your domain to mailgun
    3. install mailgun-js
    4. set api key in env file
    5. change pay order in orderRouter
    6. send email order receipt
49. Review Products
    1. create submit review form
    2. handle submit
    3. implement backend api for review
50. Upload multiple Images
    1. add images to product model
    2. get images in edit screen
    3. show images in product screen
51. Upgrade To React 18
    1. install node-check-updates
    2. ncu -u
    3. remove package-lock.json
    4. npm install
    5. replace render with createRoot
    6. fix LinkContainer error
52. Publish To Heroku
