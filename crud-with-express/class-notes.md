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


Forms are only able to send GET or POST requests, so (rather counter-intuitively) we have to use POST for our Update and Delete actions.

More on [Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data).

### Morgan: Server-side Logging 

[morgan](https://github.com/expressjs/morgan) is a useful tool for logging. It owuld be a good idea to add it to your TinyApp project.