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

1- Created React App
2- Created Git Repository
3- List Products

1.  create products array
2.  add product images
3.  render products
4.  style products
    4- Added page routing
5.  npm i react-router-dom
6.  create route for home screen
7.  create router for product screen
    5- Created Node.JS Server
8.  run npm init in root folder
9.  Update package.json set type: module
10. Add .js to imports
11. npm install express
12. create server.js
13. add start command as node backend/server.js
14. require express
15. create route for / return backend is ready.
16. move products.js from frontend to backend
17. create route for /api/products
18. return products
19. run npm start
    6- Fetch Products From Backend
20. set proxy in package.json
21. npm install axios
22. use state hook
23. use effect hook
24. use reducer hook
    7- Managed State By Reducer Hook
25. define reducer
26. update fetch data
27. get state from usReducer
    8- Added bootstrap UI Framework
28. npm install react-bootstrap bootstrap
29. update App.js
    9- Created Product and Rating Component
30. create Rating component
31. Create Product component
32. Use Rating component in Product component
    10- Created Product Details Screen
33. fetch product from backend
34. create 3 columns for image, info and action
    11- Created Loading and Message Component
35. create loading component
36. use spinner component
37. craete message component
38. create utils.js to define getError fuction
    12- Created React Context For Add Item To Cart
39. Create React Context
40. define reducer
41. create store provider
42. implement add to cart button click handler
    13- Completed Add To Cart
43. check exist item in the cart
44. check count in stock in backend
    14- Created Cart Screen
45. create 2 columns
46. display items list
47. create action column
    15- Completed Cart Screen
48. click handler for inc/dec item
49. click handler for remove item
50. click handler for checkout
    16- Created Signin Screen
51. create sign in form
52. add email and password
53. add signin button
    17- Connected To MongoDB Database
    18- Seed Sample Products
54. create Product model
55. create seed route
56. use route in server.js
57. seed sample product
    19- Seeded Sample Users
58. create user model
59. seed sample users
    20- Created Signin Backend API
60. create signin api
61. npm install jsonwebtoken
62. define generateToken
    21- Completed Signin Screen
63. handle submit action
64. save token in store and local storage
65. show user name in header
    22- Created Shipping Screen
66. create form inputs
67. handle save shipping address
68. add checkout wizard bar
    23- Created Sign Up Screen
69. create input forms
70. handle submit
71. create backend api
    24- Implemented Select Payment Method Screen
72. create input forms
73. handle submit
    25- Created Place Order Screen
74. show cart items, payment and address
75. calculate order summary
    26- Implemented Place Order Action
76. handle place order action
77. create order create api
    27- Created Order Screen
78. create backend api for order/:id
79. fetch order api in frontend
80. show order information in 2 cloumns
    28- Pay Order By PayPal
81. generate paypal client id
82. create api to return client id
83. install react-paypal-js
84. use PayPalScriptProvider in index.js
85. use usePayPalScriptReducer in Order Screen
86. implement loadPaypalScript function
87. render paypal button
88. implement onApprove payment function
89. create pay order api in backend
    29- Display Order History
90. create order screen
91. create order history api
92. use api in the frontend
    30- Created Profile Screen
93. get user info from context
94. show user information
95. create user update api
96. update user info
    31 Added Sidebar and Search Box
97. add sidebar
98. add search box
    32- Created Search Screen
99. show filters
100.  create api for searching products
101.  display results
      33- Created Admin Menu
102.  define protected route component
103.  define admin route component
104.  add menu for admin in header
      34- Created Dashboard Screen
105.  create dashboard ui
106.  implement backend api
107.  connect ui to backend
      35- Manage Products
108.  create products list ui
109.  implement backend api
110.  fetch data
      36- Create Product
111.  create products button
112.  implement backend api
113.  handle on click
      37- Create Edit Product
114.  create edit button
115.  create edit product ui
116.  dispaly product info in the input boxes
      38- Implement Update Product
117.  create edit product backend api
118.  handle update click
      39- Upload Product Image
119.  create cloudinary account
120.  use the api key in env file
121.  handle upload file
122.  implement backend api to upload
      40- Delete Product
123.  show delete button
124.  implement backend api
125.  handle on click
      41- List Orders
126.  create order list screen
127.  implement backen api
128.  fetch and display orders
      42- Deliver Order
129.  add deliver button
130.  handle click action
131.  implement backen api for deliver
      43- Delete Order
132.  add delete button
133.  handle click action
134.  implement backen api for delete
      44- List Users
135.  create user list screen
136.  implement backen api
137.  fetch and display users
      45- Edit User
138.  create edit button
139.  create edit product ui
140.  dispaly product info in the input boxes
141.  implement backend api
142.  handle edit click
      46- Delete User
143.  add delete button
144.  handle click action
145.  implement backen api for delete
      47- Choose Address On Google Map
146.  create google map credentials
147.  update .env file with Google Api Key
148.  create api to send google api to frontend
149.  create map screen
150.  fetch google api
151.  getUserLocation
152.  install @react-google-maps/api
153.  use it in shipping screen
154.  apply map to the checkout screen
      48- Email order receipt by mailgun
155.  create mailgun account
156.  add and verify your domain to mailgun
157.  install mailgun-js
158.  set api key in env file
159.  change pay order in orderRouter
160.  send email order receipt
      49- Review Products
161.  create submit review form
162.  handle submit
163.  implement backend api for review
      50- Upload multiple Images
164.  add images to product model
165.  get images in edit screen
166.  show images in product screen
      51- Upgrade To React 18
167.  install node-check-updates
168.  ncu -u
169.  remove package-lock.json
170.  npm install
171.  replace render with createRoot
172.  fix LinkContainer error
      52- Published To Heroku
