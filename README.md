# CareerConnect - Full Stack Java Job Portal

## Project Overview

CareerConnect is a Full Stack Job Portal application that connects job seekers and employers on a single platform.

Candidates can register, login, search jobs, apply for jobs, and manage their profiles. Employers can manage job postings, and administrators can manage the platform.

The application is developed using **React.js for frontend** and **Spring Boot REST API for backend** with **MySQL database**.

---

# Features

## Candidate Features

- Candidate Registration
- Candidate Login
- View Available Jobs
- Search Jobs
- Apply for Jobs
- View Applied Jobs
- Manage Profile
- Logout

---

## Employer Features

- Employer Login
- Post Jobs
- Manage Job Listings
- View Applications
- Update Application Status

---

## Admin Features

- Admin Login
- Manage Users
- Manage Companies
- Manage Jobs
- Monitor Applications

---

# Technology Stack

## Frontend

- React.js
- JavaScript (ES6)
- HTML5
- CSS3
- React Router
- Axios

## Backend

- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate
- REST APIs
- Maven

## Database

- MySQL

## Tools Used

- IntelliJ IDEA / Eclipse
- Visual Studio Code
- MySQL Workbench
- Postman
- Git & GitHub

---

# Project Architecture

```
CareerConnect

Frontend (React.js)
        |
        |
      Axios
        |
        |
Backend (Spring Boot REST API)
        |
        |
     JPA/Hibernate
        |
        |
MySQL Database
```

---

# Project Structure

## Frontend

```
src
│
├── components
│     ├── Login.jsx
│     └── Register.jsx
│
├── pages
│     ├── CandidateDashboard.jsx
│     ├── EmployerDashboard.jsx
│     └── AdminDashboard.jsx
│
├── services
│     └── UserService.js
│
├── css
│     ├── App.css
│     └── Dashboard.css
│
└── App.js
```

---

## Backend

```
src/main/java/com/careerconnect

│
├── config
│     └── SecurityConfig.java
│
├── controller
│     └── UserController.java
│
├── dto
│     ├── LoginRequest.java
│     └── LoginResponse.java
│
├── entity
│     └── User.java
│
├── repository
│     └── UserRepository.java
│
├── service
│     └── UserService.java
│
└── CareerConnectApplication.java
```

---

# Database Configuration

Database Name:

```
careerconnect
```

MySQL Configuration:

```
spring.datasource.url=jdbc:mysql://localhost:3306/careerconnect

spring.datasource.username=root

spring.datasource.password=your_password

server.port=8082
```

---

# Database Tables

The project contains the following tables:

### Users

Stores candidate, employer, and admin details.

Columns:

- user_id
- full_name
- email
- password
- phone
- role


### Companies

Stores employer company information.


### Jobs

Stores available job postings.


### Applications

Stores candidate job applications.


### Candidate Profiles

Stores candidate resume and skills.


### Notifications

Stores user notifications.


### Interviews

Stores interview schedules.

---

# API Endpoints

## User Registration

### POST

```
http://localhost:8082/api/users/register
```

Request:

```json
{
    "fullName":"John",
    "email":"john@gmail.com",
    "password":"123456",
    "phone":"9876543210",
    "role":"CANDIDATE"
}
```

---

## User Login

### POST

```
http://localhost:8082/api/users/login
```

Request:

```json
{
    "email":"gnana@gmail.com",
    "password":"123456"
}
```

Response:

```json
{
    "message":"Login Successful",
    "role":"CANDIDATE",
    "fullName":"V Gnanaprasuna"
}
```

---

## Get All Users

### GET

```
http://localhost:8082/api/users
```

---

## Get User By ID

### GET

```
http://localhost:8082/api/users/{id}
```

---

# Installation and Setup

## Backend Setup

1. Clone the project

```
git clone <repository-url>
```

2. Open backend project in IntelliJ/Eclipse.

3. Configure MySQL database.

4. Update:

```
application.properties
```

5. Run Spring Boot application.

Backend runs on:

```
http://localhost:8082
```

---

## Frontend Setup

Go to frontend folder:

```
cd frontend
```

Install dependencies:

```
npm install
```

Start React application:

```
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# Sample Login Credentials

## Candidate

```
Email:
gnana@gmail.com

Password:
123456
```

Role:

```
CANDIDATE
```

---

## Admin

```
Username:
admin

Password:
admin123
```

---

# Future Enhancements

- JWT Authentication
- Password Encryption using BCrypt
- Resume Upload
- Email Notifications
- Advanced Job Search
- Employer Dashboard
- Admin Analytics Dashboard
- Cloud Deployment
- Docker Support

---

# Author

**V Gnanaprasuna**

Bachelor of Engineering - Computer Science and Engineering

Full Stack Java Developer

---

# License

This project is developed for educational and learning purposes.
