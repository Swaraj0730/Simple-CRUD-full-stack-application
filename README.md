🚀 Employee Management System
This is a full-stack web application that enables basic employee management functionality such as listing, adding, updating, and deleting employee records.

🛠 Tech Stack
Frontend: ReactJS

Backend: Spring Boot (Java 21)

Database: MySQL

Security: Spring Security

ORM: Hibernate (Spring Data JPA)

Containerization: Docker & Docker Compose

🧰 Features

📋 View all employees

➕ Add new employee

🖊️ Update existing employee

❌ Delete employee

🔐 Secured endpoints using Spring Security

🔄 Real-time updates with React state management

🐳 Dockerized Setup
MySQL is started as a container with pre-defined root password and database.

Spring Boot connects to MySQL using internal Docker network (via service name mysqldb).

React frontend runs on Nginx (via port 3000) and connects to the backend seamlessly.



📦 Project Structure
```
├── backend/        # Spring Boot application
├── frontend/       # ReactJS frontend app
├── docker-compose.yml
└── README.md
```
