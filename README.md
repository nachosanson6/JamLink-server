# Jamlink

## Back-end Repository (Node.js with Express)
### Table of Contents 

1. [Table of Contents](#table-of-contents)
2. [Description](#description)
3. [Setup](#setup)
    - [Scripts](#scripts)
    - [Environment variables](#environment-variables)
4. [File Structure](#file-structure)
5. [Used Technologies](#used-technologies)
6. [API end Points](#api-end-points)

[![Front-end Repository](https://img.shields.io/badge/Front--end-Repository-blue?style=for-the-badge&logo=github)](https://github.com/nachosanson6/JamLink-client)


## Description

Jamlink is a web application created during the Ironhack bootcamp, providing a social platform for musicians. The application aims to connect musicians who want to organize and participate in jam sessions. Some key features of Jamlink include:

- **Musician Profile:** Create and customize your musical profile, showcasing your instruments, skills, and preferences.
- **Social Network:** Connect with other musicians, add them as friends, and discover new musical talents in the community.
- **Jam Events:** Create your own jam session events, specifying the date, time, location, and desired instruments.
- **Event Participation:** Join jam session events organized by other musicians, indicating the instrument you'd like to play.
- **Friends List:** Build a list of musical friends with whom you can interact, collaborate, and organize private jam sessions.
- **Comment Interaction:** Leave comments on events and profiles of other musicians to encourage communication and collaboration.

## Setup

#### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine before getting started.

Follow the steps below to setup the application in your local development environment:

1. Install dependencies

```bash
npm install
```

2. Run the application

```bash
npm run dev
```

The application will open automatically on localhost (port 5005 if it's not in use already).



### Scripts

The following commands can be found in the [`package.json`](./package.json) file in the project root. To execute them, simply use the command the following way:

```
npm run <command>
```

| Command   | Description                                       |
| --------- | --------------------------------------------------|
| `start`   | Starts the Node.js server for production.          |
| `dev`     | Starts the server with nodemon for development.    |


### Environment variables


| Variable            | Description                      |
| ------------------- | -------------------------------- |
| `PORT`              | Port for the API                 |
| `ORIGIN`            | App origin/title                 |
| `MONGODB_URI`       | MongoDB connection URI           |
| `TOKEN_SECRET`      | Secret key for authentication    |
| `CLOUDINARY_NAME`   | Cloudinary account name          |
| `CLOUDINARY_KEY`    | Cloudinary API key               |
| `CLOUDINARY_SECRET` | Cloudinary API secret            |

## File Structure

The file structure in the Jamlink front-end is organized as follows:

```plaintext
.
|-- .github/
|-- config/  
|-- controllers/  
|-- db/  
|-- error-handling/
|-- middleware/  
|-- models/ 
|-- routes/     
|-- .gitignore
|-- README.md
|-- app.js
|-- package-lock.json
|-- package.json
|-- server.js

```

## Used Technologies

- **Front-end:**
  - [React](https://reactjs.org/) - JavaScript library for building user interfaces.
  - [Vite](https://vitejs.dev/) - Fast development tool for JavaScript and TypeScript-based projects.
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - Markup language for web page structure.
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Style sheet language for styling the user interface.
  - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language for client-side logic.
  - [Bootstrap](https://getbootstrap.com/) - CSS framework for fast and responsive web development.
  - [Google Autocomplete](https://developers.google.com/maps/documentation/javascript/places-autocomplete) - Google Maps Autocomplete component.

- **Back-end:**
  - [Express](https://expressjs.com/) - Web framework for Node.js used on the server.
  - [Node.js](https://nodejs.org/) - Runtime environment for JavaScript on the server side.
  - [MongoDB](https://www.mongodb.com/) - NoSQL database used for data storage.
  - [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js.

- **Tools and Utilities:**
  - [GitHub Actions](https://github.com/features/actions) - For continuous integration and automatic deployment.

## API end Points

| User routes            |
| ---------------------- |
| Base URL : /user       |

| HTTP Method            | URI path     | Description                 |
| ---------------------- | ------------ | --------------------------- |
| GET                    | /getAllUsers | All users list              |
| GET                    | /:id         | Matching ID user details    |
| PUT                    | /:id/edit    | Matching ID user edition    |
| DELETE                 | /:id/delete  | Matching ID user deletion   |

| Events routes          |
| ---------------------- |
| Base URL : /events     |

| HTTP Method            | URI path     | Description                 |
| ---------------------- | ------------ | --------------------------- |
| GET                    | /getAllUsers | All events list             |
| POST                   | /saveEvent   | Create new event            |
| GET                    | /:id         | Matching ID events details  |
| PUT                    | /:id/edit    | Matching ID events edition  |
| DELETE                 | /:id/delete  | Matching ID events deletion |

| Auth routes            |
| ---------------------- |
| Base URL : /auth       |

| HTTP Method            | URI path     | Description                 |
| ---------------------- | ------------ | --------------------------- |
| POST                   | /signup      | Signup user                 |
| POST                   | /login       | Login user                  |
| GET                    | /verify      | Verify Auth token           |
