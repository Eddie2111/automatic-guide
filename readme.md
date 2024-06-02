# Project Documentation: User Authentication and Role-Based Access Control

## Table of Contents

1. [Introduction]()
2. [Frontend]()
   - [Pages]()
   - [Routes Protection]()
3. [Backend]()
   - [API Endpoints]()
   - [Authentication]()
   - [Middleware]()
4. [Database]()
5. [Functional Requirements]()
6. [Dependencies]()

## Introduction

This project aims to create a web application with user authentication and role-based access control. The application consists of frontend components built with React and Next.js, backend services developed with Node.js and Express, and MongoDB database with Mongoose.

## Frontend

### Pages

- **User Registration:** Allows users to create an account.
- **Login:** Enables users to log in to their accounts.
- **Dashboard with Task List:** Provides a dashboard for users to manage their tasks.

### Routes Protection

Certain routes are protected based on user roles. For example, only admins can access certain pages and endpoints, only users can access user endpoints and pages.

## Backend

### API Endpoints

- **User Registration and Login:** Endpoints for user registration and login.
- **Task List CRUD Operations:** Endpoints for creating, reading, updating, and deleting tasks.

### Authentication

JWT-based authentication is implemented to authenticate users. Upon successful login, users receive a JWT token.

### Middleware

Middleware is used to protect routes based on user roles. This ensures that only authorized users can access certain endpoints.

## Database

User information, including hashed passwords and roles, is stored in MongoDB using Mongoose. Task information is also stored, associated with user IDs.

## Functional Requirements

- Users can register and log in.
- Users receive a JWT token upon successful login.
- Certain routes/pages are accessible only to users with specific roles.
- Users can perform CRUD operations on their tasks. They can only see their own tasks.
- Administrators can view all task lists per employee.

## Dependencies

### Frontend

- `@hookform/resolvers`: Resolver library for form validation.
- `@nextui-org/react`: UI library for Next.js applications.
- `@reduxjs/toolkit`: Toolkit for Redux state management.
- `axios`: HTTP client for making requests to the backend.
- `react`, `react-dom`: Core libraries for building React applications.
- `react-redux`: Library for connecting Redux with React.
- `redux`: Library for managing application state.
- `tailwindcss`: Utility-first CSS framework for styling.

### Backend

- `@prisma/client`: Prisma client for database access.
- `argon2`: Library for password hashing.
- `cookie-parser`: Middleware for parsing cookies.
- `cors`: Middleware for enabling CORS.
- `dotenv`: Library for loading environment variables.
- `express`: Web framework for Node.js.
- `jsonwebtoken`: Library for generating and verifying JWT tokens.
- `mongoose`: MongoDB object modeling for Node.js.
- `nodemon`: Utility for automatically restarting the server.
- `uuid`: Library for generating UUIDs.
- `zod`: Library for schema validation.

## Starting the project

- We need the database first, we can use mongo Atlas or Docker.
- If we have docker, then running this command will do the trick
- ```
  docker run -d -p 5600:27017 -p 5500:27017 --name mongodb mongo:latest
  ```
For Services,
- Both the services have packages which are to be installed, I have used pnpm as package manager, any other package managers are also can be used.
- Install the packages for both client and server like this, npm i [if npm], yarn [if yarn], pnpm i [if pnpm]

For Backend,
- A .env file has to be kept inside the /server folder.
- Backend is located at "/server". Using PNPM as package manager.
- You have to convert all the ts files to js files by running `tsc --outDir ./dist --rootDir ./src` inside the project folder
- the command `pnpm run dev` will start the backend

For Frontend,

- Using PNPM as package manager.
- the command `pnpm run dev` will start the frontend which will be available in localhost:3000

A .env is kept at both folders with example values
