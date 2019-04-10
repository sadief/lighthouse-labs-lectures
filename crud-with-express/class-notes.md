# W2D3 CRUD with Express


## What is Express?


## What does CRUD stand for?

    C
    R
    U
    D


## Goals for today


## What is EJS?


## HTTP requests

    GET - Retrieves one or many resources

    POST - Create a resource

    PUT - Edit or create a resource

    DELETE - Deletes a resource





## REST Cheatsheet
### CRUD to HTTP

| Action    | HTTP verb/method | Cows |
| --------- | ---------------- | -----
|**C**reate | POST             | /cows/new
|**R**ead   | GET              | /cows /cows:id
|**U**pdate | PUT/PATCH        | /cows/:id
|**D**elete | DELETE           | /cows/:id/delete

**NOTE:** Browsers only support `GET` and `POST` actions from pure HTTP forms. To use `PUT`/`PATCH`/`DELETE` you'll either need to use client-side JS or the [`method-override`](http://expressjs.com/en/resources/middleware/method-override.html) middleware.

### Morgan: Server-side Logging 

[morgan](https://github.com/expressjs/morgan) is a useful tool for logging. It owuld be a good idea to add it to your TinyApp project.