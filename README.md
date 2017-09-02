# PrimitiveSocialMediaSite-API-Mongo-Node-Express
This will be the an API for the Primitive Social Media Site project. This version of the API will be written in Javascript using Mongodb, Nodejs, and Express to provide access to the following resources by the indicated methods:
- [ ] API 
  - [x] Personal Information
    - [x] post: create a new user (sign up)
    - [x] get: get a user's (or multiple users') information
    - [x] put: update user information
    - [x] delete: delete a user (delete account)
  - [x] Member Authentication
    - [x] post: create a new session (sign in)
    - [x] get: get the current session (check credentials)
    - [x] delete: delete the current session (sign out)
  -[x] Sign up
    - [x] post: create a new user
  - [x] Messages
    - [x] post: create a new message
    - [x] get: get messages
    - [x] delete: delete a message
  - [x] Posts
    - [x] post: create a new post
    - [x] get: get posts
    - [x] delete: delete a post
  - [x] premium (manage premium content)
    - [x] post: create a new premium item
    - [x] get: get premium items
    - [x] delete: delete a premium item
  - [x] Services
    - [x] DatabaseService
      - [x] Mock
      - [x] Mongodb
- [x] View (compiled front end from the PrimitiveSocialMediaSite-Angular-Front-End rep)
- [x] Database (integration with MongoDB)
- [ ] Tests
  - [ ] Services
  - [ ] routes
    
## Usage
This repository contains an implementation of the backend for a social media site as well as the transpiled front end. The app is ready to deploy. The source code for the front end as well as a detailed discussion of the features of the app may be found in [PrimitiveSocialMediaSite-Angular-Front-End](https://github.com/albertpatterson/PrimitiveSocialMediaSite-Angular-Front-End)
  
 ## Intallation & Getting Started
 1) Clone this repository
 2) install: $> npm install
 3) update the "privateDbUrl" variable in services/mongodbDatabaseService.js to point to a collection in your own database containing a document "users". Information about the URI format may be found in the [mongoDB doc](https://docs.mongodb.com/manual/reference/connection-string/)
4) run $> npm start, the app should then be available at http://localhost::3000
