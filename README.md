# National Movies API

The **National Movies API** is an application developed with Node.js and Express, aimed at managing a collection of Brazilian films. This project was developed as part of the mini project for the M4 course "Programmers of Tomorrow," with the goal of promoting access to culture and national cinema. In this new update, I bring the Frontend of the project, which consumes the previously presented API.

## Context

According to the Federal Constitution, access to leisure and culture is a citizen's right. In 2018, the National High School Exam addressed the theme "Democratization of access to cinema in Brazil," highlighting the need to discuss the effectiveness of existing legislation and the challenges that still persist, especially regarding social inequality.

The democratization of cinema is essential not only as a form of entertainment but also as a strategy for education and a tool for social transformation. Projects like Cinema de Rua have shown that it is possible to bring films to communities, promoting the consumption of national cinema in an accessible way.

## Technologies Used

- **React**: 18.3.1
- **Axios**: 1.7.7
- **CORS**: 2.8.5
- **Node.js**: 14.x
- **Express**: 4.x
- **Nodemon**: For automatic server restart during development
- **CORS**: To enable Cross-Origin Resource Sharing
- **Body-Parser**: To interpret requests with JSON bodies

## Steps to Run the Project

### 1. Clone the repository

```
git clone https://github.com/dborahfagundes/FilmesNacionais.git
```
### 2. Install the dependencies
```
npm install
```
### 3. Run the API
```
npm start
```
The API should be running at http://localhost:3000/api/filmes.

### 4. Test the endpoints
You can use tools like Postman or Insomnia to test the following endpoints:

```
GET /api/filmes - Lists all movies
POST /api/filmes - Adds a new movie
PUT /api/filmes/:id - Updates an existing movie
DELETE /api/filmes/:id - Removes a movie
```
### Contribution <3

Feel free to contribute with improvements or new features. Create a new branch for your changes and submit a pull request.

I hope you enjoy it!
