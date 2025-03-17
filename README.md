# E-Commerce Application (MERN Stack)  

Welcome to the E-Commerce Application project! This project is part of the **Follow Along Project: Milestone 1**, where we will learn to build a full-fledged e-commerce application from scratch using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  

## Project Overview  
The goal of this project is to provide hands-on experience with real-world development concepts and tools. By the end of this project, you will have a functional e-commerce application with features like user authentication, product management, and order handling.  

## Learning Goals 
- Understand the overall structure of a MERN stack project.  
- Set up a new project repository and initialize it effectively.  
- Gain clarity on the functionalities of an e-commerce application.  
- Learn the foundational steps of backend development, database schema design, and REST API creation.  

## Key Features  
1. **MERN Stack:** A JavaScript-only approach for full-stack development.  
2. **REST API Creation:** Scalable endpoints for user authentication, product management, and order handling.  
3. **Authentication:** Secure login and registration functionalities.  
4. **Database Schema Design:** Structured data models using MongoDB.  
5. **Backend Development:** Robust server-side logic with Node.js and Express.  
6. **Frontend:** React for building a dynamic and user-friendly interface.  

## Milestone 1 Overview  
- **Introduction to the MERN Stack:** Understanding the technologies and how they work together.  
- **REST API Structure:** Building endpoints for essential features like user authentication, product management, and order handling.  
- **Database Schema Design:** Creating well-structured data models in MongoDB.  
- **Authentication:** Learning the role of authentication in web applications and implementing it.  
## Milestone 2:
Project Structure and Login Page


Created a structured folder hierarchy for separating frontend and backend code.

Set up the React application for the frontend and a Node.js server for the backend.

Configured Tailwind CSS for streamlined styling.

Developed a functional and styled Login Page for the frontend.

Outcome: Project was structured, and the first user-facing feature (Login Page) was implemented.

## Milestone 3:
Backend Setup and Database Connection


Created a dedicated folder structure for organizing backend code (routes, controllers, models, etc.).

Configured a Node.js server with Express.js to handle API requests.

Connected the backend to MongoDB for data storage.

Implemented basic error handling for better debugging.

Outcome: Backend setup was completed with MongoDB integration, making the application ready for further development.

## Milestone 4:
User Model, Controller, and File Uploads


Designed the User Model with a schema defining user details (e.g., name, email, password).

Developed the User Controller to manage user data operations like adding or fetching users.

Integrated Multer to enable file uploads (e.g., profile pictures) and store them in the backend.

## Milestone 5:
In this milestone, we focused on developing the signup page to enable users to create an account within the application. Key achievements include: Signup Page Implementation: Developed the Signup.jsx component with a user-friendly interface for account registration. Included form fields for user details such as name, email, and password. Form Validation: Added client-side validation logic to ensure proper input formatting and error messages for invalid entries. Integration with Routing: Configured navigation to and from the signup page using React Router for seamless user flow. Styling: Enhanced the design of the signup page to align with the application's overall styling for a consistent user experience. Code Organization: Refactored the code into reusable components where possible to promote cleaner and more maintainable code. This milestone enhances the user experience by allowing new users to register, paving the way for further integration with back-end user authentication systems.

## Milestone 6:
In this milestone, we completed the following:

- Implemented advanced product filtering and search functionality.
- Optimized backend API endpoints for better performance.
- Integrated payment processing using Stripe.
- Enhanced user authentication with JWT expiration handling.
- Improved UI/UX by refining product pages and checkout flows.
- Fixed bugs from previous milestones and improved error handling.





## Milestone 7:
Login Authentication S

User Enters Credentials: The user provides their email/username and password on the login page.
Fetch User Data from Database: The backend retrieves the user record based on the provided email/username. If the user is not found, return an error: "User does not exist."
Compare Encrypted Passwords: Process the user's input password using the same hashing algorithm (e.g., bcrypt). Compare the resulting hash to the stored hashed password. If they match, the user is authenticated; if not, send an error.
Create Login Endpoint: Accept user credentials (email/username and password). Retrieve the corresponding user from the database.
Validate Password: Use bcrypt to hash the entered password. Compare it with the stored hashed password for authentication.
Return Response: If authentication is successful, generate and return a session/token. If authentication fails, return an error message.


## Milestone 8:
Displays a list of products in a grid format.
Uses a Product component to render individual product cards with an image, name, description, and price.
The Home component maps over a predefined list of products and renders them using the Product component.
Styled using Tailwind CSS for responsiveness and modern UI design.
=======

## Milestone 9:
In this milestone, we implemented a product input form to allow users to add new products to the application. Key achievements include:

Product Input Form: Created a frontend form to collect product details such as name, description, price, and images.
Multiple Image Uploads: Enabled users to upload multiple product images for better product representation.
Form Validation: Implemented validation to ensure required fields are filled correctly before submission.
State Management: Used React state to handle form inputs dynamically.
Backend Integration: Connected the form to the backend API to store product details in the database.
UI/UX Enhancements: Styled the form using Tailwind CSS for a clean and user-friendly design.
This milestone improves the product management system by allowing users to add new products efficiently. 

## Milestone 10 :
In this milestone, we focused on defining the structure of product data and creating an API endpoint to store product details in MongoDB.

Product Schema Definition: Defined a structured product schema using Mongoose to store product data in MongoDB. Ensured each field has proper validation to maintain data integrity: Name: Required, string Description: Required, string Price: Required, number, with validation for non-negative values Image URL(s): Required, array of strings for multiple image storage Category: Required, string CreatedAt: Automatically generated timestamp
Endpoint Creation: Developed a POST endpoint (/api/products) to accept product details from the frontend. Implemented validation to ensure only correctly formatted data is stored in the database. Saved product information to MongoDB using Mongoose models.
Data Validation & Integrity: Enforced strict validation to prevent invalid or incomplete product entries. Returned appropriate error messages for missing or incorrect data inputs.



## Milestone 11 :

In this milestone, we: 

 mile11
Created an API endpoint to fetch all product data from MongoDB.
Connected the frontend to retrieve this data dynamically.
Used the existing product card component to display products.
Ensured real-time updates by fetching data on page load.
Improved the homepage by making product listings dynamic .
Committed and pushed all changes to GitHub .



## Milestone 12 :
Created an endpoint in Express to fetch products from MongoDB filtered by the logged-in user's email.
Implemented a frontend function to request and receive product data from the backend.
Dynamically displayed the products using a previously created product card component.
Updated the README file to document the progress and key implementations for this milestone.
Pushed all changes to the GitHub repository and submitted the assignment link.


## Milestone 13:

Created a backend endpoint in Express to update a product by its ID in MongoDB.
Used MongoDB’s findByIdAndUpdate() method to modify the product details.
Added an Edit button to each product card in the frontend UI.
When the button is clicked, the existing product details are auto-filled into a form.
Allowed users to modify and save the updated details.
Sent a PUT request to update the product in the database.
Ensured the updated product details appear in the UI after a successful update.
Committed all changes to GitHub and updated the README with Milestone 13 progress.




## Milestone 14:
Created a backend endpoint in Express to delete a product by its ID from MongoDB.
Used MongoDB’s findByIdAndDelete() method to remove the product.
Updated the frontend UI by adding a Delete button to each product card.
When the button is clicked, it sends a DELETE request to the backend with the product ID.
Ensured that the product disappears from the UI after successful deletion.
Tested the API using Postman or an API client.
Committed the changes to GitHub and updated the README with Milestone 14 progress.
Submitted the repository link as required.



## Milestone 15:
Created a Nav component containing links to:
=>Home
=>My Products
=>Add Product
=>Cart
Implemented React Router to enable seamless navigation between pages.
Ensured responsiveness using CSS/Flexbox/Tailwind, making the navbar adapt to all screen sizes.
Added the Nav component to all pages for consistency.
Used state management (if needed) for active link highlighting.
Tested navigation to confirm smooth transitions.
Committed all changes to GitHub and updated the README with Milestone 15 details.
=======



---

# Milestone 16: Product Info Page

## 📌 Overview
This milestone focuses on creating a **product info page** that displays detailed product information, allows users to select a quantity, and includes an **Add to Cart** button.

## 🚀 Learning Objectives
By completing this milestone, we have learned:
- How to create a new page to display product details.
- How to implement a quantity selector.
- How to add an "Add to Cart" button to update the cart.

# Milestone 17:

- Update **user schema** to store cart products.  
- Create an **API endpoint** to add products to the cart.  
- Push code to **GitHub**, update **README**, and submitted  the **repo link**. 

# 🚀 Milestone 18: Cart Page Backend  

- Create an **API endpoint** to fetch user cart products.  
- Retrieve cart items using **user email**.  
- Push code to **GitHub**, update **README**, and submit the **repo link**.  

# Milestone 19: Cart Page & Quantity Management  

- Created a **Cart Page UI** displaying products.  
- Added `+` and `-` buttons to update product quantity.  
- Implemented **state management** for dynamic updates.  
- Built backend **API endpoints** for quantity changes.  
- Connected **frontend with backend** for real-time updates.  
- Ensured **database updates** when quantity changes.  
- Improved **user experience** with interactive controls.  

# Milestone 20: Profile Page & User Data Endpoint  

- Created a **backend API** to send user data via email.  
- Designed a **frontend profile page** to display user details.  
- Showcased **profile photo, name, and email** in one section.  
- Displayed **address details** separately with an "Add Address" button.  
- Handled **empty addresses** with a "No address found" message.  
- Integrated **frontend with backend API** for dynamic updates.  
- Ensured **responsive UI** for better user experience.  
 

# Milestone 21: Address Form Frontend

1. Created a frontend form for address input.
2. The form collects details like country, city, address1, address2, zip code, and address type.
3. Implemented state management to store input address data.
4. Ensured navigation from the profile page to the address form when clicking "Add Address."
5. Designed a user-friendly layout for easy input and submission.
6. Updated the README file with progress details for Milestone 21.
7. Pushed the code to a public GitHub repository for submission.
8. Submitted the repository link as per the assignment guidelines.


 # Milestone 22: Backend Endpoint for Address Storage  



1. **Objective:** Create a backend endpoint to store user addresses in the database.  
2. **Backend Development:** Implement an API route to receive address data from the frontend form.  
3. **Database Integration:** Store the address inside the `user` collection as an array.  
4. **Request Handling:** Ensure proper validation and handling of incoming address data.  
5. **Data Persistence:** Use MongoDB (with Mongoose) to update user profiles efficiently.  
6. **API Testing:** Verify functionality using tools like Postman.  
7. **GitHub Submission:** Push code to a public repository and update README with progress.  
8. **Learning Outcome:** Understand how to create and integrate backend endpoints for user data storage. 



# Milestone 23: Implementing Place Order Feature

- Add a "Place Order" button inside the cart page.
- Navigate to a select address page upon clicking the button.
- Display all user addresses on the select address page.
- Allow users to choose a delivery address.
- Create a backend endpoint to retrieve all user addresses.
- Write a Mongoose schema to store order details.
- Update the README file with your progress.


# Milestone 24: Implementing Order Confirmation Page



- Create an order confirmation page that displays the products being ordered.
- Show the address selected for delivery.
- Display the total value of the cart.
- Add a "Place Order" button at the bottom of the page.
- Update the README file with your progress.
- Push your code to GitHub and submit the repository link.
- Implement the final step in the place order functionality.

## Milestone 25: Placing an Order - Backend Endpoint

In this milestone, you'll create a backend endpoint to handle placing orders.  
The endpoint will receive product, user, and address details and retrieve the user's `_id` using their email.  
Each product will have a unique order, but with the same address.  
You will store the order details in the MongoDB order collection using the order schema.  
Push your code to GitHub and update your README with progress.









