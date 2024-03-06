# Restaurant Finder

## Overview
Restaurant Finder is a full-stack web application that allows users to discover restaurants and leave reviews. It provides CRUD functionality for managing restaurants and reviews, allowing users to add, view, edit, and delete restaurant details and reviews.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Deployment**: AWS (EC2), Nginx, PM2
- **Other Tools**: Axios, Bootstrap, CORS

## Features
- Users can add new restaurants with details such as name, location, and price range.
- Users can leave reviews for restaurants, including a rating and written feedback.
- CRUD functionality for managing both restaurants and reviews.
- Deployed on an AWS EC2 instance with Nginx as a reverse proxy and PM2 for process management.
- Responsive design for mobile and desktop users.

## Setup
To run the application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Navigate to `http://localhost:3000` in your web browser.

## Deployment
The application is deployed on an AWS EC2 instance. Nginx is used as a reverse proxy to route HTTP requests to the Node.js server running on port 3001. PM2 is used to manage the Node.js process and keep it running continuously.

## Contributing
Contributions are welcome! If you'd like to contribute to the project, please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request.
