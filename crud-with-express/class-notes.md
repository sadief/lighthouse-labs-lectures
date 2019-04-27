# W2D3 CRUD with Express

We made a Cow CRUD app!

[Link](https://github.com/sadief/lighthouse-labs-lectures/tree/april-10-19/crud-with-express) to Repo

## What is Express?
A framework designed to make easier to create routes

## What does CRUD stand for?

    C Create `/cows/new`
    R Read `/cows` `/cows/:id` 
    U Update `/cows/:id`
    D Delete `/cows/:id/delete`

    BREAD
    browse, read, edit, add, delete


## Goals for today
 - Perform all CRUD actions upon given data
 - Use forms to submit http requests

 I want to be able to access a bunch of data and perform particular actions on it and I want to do that through a web interface.

 Let's make a cow CRUD app


## What is EJS?
A templating language that lets you generate HTML with Javascript

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