# Put it on your list
[![MIT License Badge](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](/LICENSE)
![Sequelize Badge](https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue)
![PostgreSQL Badge](https://img.shields.io/badge/postgresql-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Express Badge](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Handlebars Badge](https://img.shields.io/badge/handlebars.js-000000?style=for-the-badge&logo=handlebarsdotjs&logoColor=white)
![express-session Badge](https://img.shields.io/badge/express--session-000000?style=for-the-badge&logo=express&logoColor=white)

## Table of Content
- [Description](#description)
- [Deployment](#deployment)
- [Dependencies](#dependencies)
- [Issues](#issues)
- [Collaborators](#collaborators)
- [License](#license)

## Description
Our world is constantly creating new content that it can be overwhelming keeping track of all the latest releases, before long there might be something you wanted to see but completely forgot about it. This full stack application allows users to create an their own personal account so that they can keep track of all their nerdy hobbies.  

The purpose of this project was to create an application using the Model-View-Controller(MVC) concept that seamlessly connects the front and backend intuitively.  

The backend consisted of two main packages, Express to create the server and routes, accompanied by Sequelize that creates the connection to the database. 

Sequelize plays the role of the Model in the MVC paradigm which creates objects in javascript that act as tables and columns in a database. 

Using the models, routes will be requested by the user to perform various CRUD methods on the Models.

Once the data from the backend is ready, the application sends the data to be rendered to the user (View) using Handlebars files.

Express session plays a key role in verifying and authenticating users by creating a session that stores sensitive data ,like user id, on the server side.  

On the client side, a cookie holds that session id so that the user information is specialized for their account.

![homepage-img](https://github.com/user-attachments/assets/2aeca62a-f0f3-4343-8f50-eecbad14c597)


![login-img](https://github.com/user-attachments/assets/7dda68a0-86ea-486b-b75a-9d1fe52e29b0)

## Deployment

This application is deployed on render, under the link:

https://list-it-kw5e.onrender.com/

## Dependencies

run npm i

## Issues

1. Create Login Handlebars: When the user first opens up the application, the login page will be displayed. Handlebars will set the initial page to be the user login and have the option to create an account.

2. Create New User Handlebars: When the user wants to create a new account, they will be redirected to a new page that will contain a form that will give the user the option to enter their credentials to sign up

3. User API routes for creating user and verifying existing user: API routes will be created to verify all the users credentials during login, as well as create a new user account

4. Creating List form and send to api route: When the user wants to create a new list, the user input will be grabbed and an API post route will be hit to make that new list. Once the list is created user will be redirected back to the list page for that category

5. Create a button to delete a specific list: User will have the option to delete an item that is in the list. When the delete button is pressed, it will grab that list item id and hit the API route that will delete the specific item.

6. Display List on the page for drag and drop: When the user selects the category they want to go to, handlebars will redirect the user to the page where they can view their lists for that category.

7. Create buttons for each category: When the user is directed to the dashboard, there will be options for which category the user wants to view. A button will take the user to the page that contains all the list for the category that was selected.


## Collaborators
- [Ezekiel Campos](https://github.com/EzekielCampos)
- [Ifeyinwa Ekezie](https://github.com/Ifylee)
- [Emily Soriano](https://github.com/So-Emily)
- [Angel Beltran](https://github.com/ABELTRAN177)
- [Alfonso Rodriquez](https://github.com/Rodriguez-Alfonso)

## License

MIT License

Copyright (c) 2019-2024 Othneil Drew

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
