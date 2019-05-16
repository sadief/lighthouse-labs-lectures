# May 16th, W3D4 State Management & Persistence

[Link](https://github.com/sadief/lighthouse-labs-lectures/tree/may-16-19/state-mgmt-persistence) to repo

[Mongo Shell Docs](https://docs.mongodb.com/)
[Mongo Node JS Driver Docs](https://mongodb.github.io/node-mongodb-native/)

You are full stack developers now! We've added state management to our back end skills.

So what makes up a full stack developer?

## FULL STACK DEVELOPERS

- [x] Front End
    - CSS
    - HTML
    - Client Side JS
    - AJAX
    - jQuery
    - Flexbox
    - Fancy design thingies
    - UX/UI related stuff

- [x] Back End
    - Serving specific pages/responses based on different routes (GET/robot) and based on certain parametes (e.g. who is logged in)
    - Store and manage the data

Today we looked at MongoDB within the context of Tiny App. With Tiny App, as soon as we stopped our server, any new urls were lost because the data did not _persist_

With Tiny App, we could:

- Create a Tiny URL
- Look at (read) a Tiny URL
- Edit (update) a Tiny URL
- Delete (destroy) a Tiny URL
- Create a user

Non-crud
- Log in as a user

In order to use Tiny App there has to be a server **running**
`npm run start`


Tiny app stores data **In Memory**

```json
urls = {
    "ssfd983": "www.google.com"
}
```

Storing data 'in memory' means that our data is NOT PERSISTENT

Some of the things we want to be able to do with our data are:
- Add data
- Show data
- Edit data
- Delete data

So lets store our data somewhere other than our servers:

When storing data, I want:

1. I want the data to persist
2. I want to have some smart interactions with the data
3. I want multiple applications to share the same source of data

Smart Interactions?
 - How many of this thing do you have?
 - Find me this particular thing and its associated data

 ## A DATABASE

 INTERFACE ---- APPLICATION + LOGIC ---- DATA

 Pretty stuff --- "user does not exist" ----- Everything we need


How can we store data?

We could:
 - Write to a text file:

 ```
name, job-title, favorite_dog
sadie, developer, german shepherd,
benjamin, morgue attendant, chihuahua
 ```


- Or for more flexibility we could write to a json text file
```
[
    {
        'name': 'benjamin,
        'job-title': 'morgue attendant',
        'favorite_dog': 'chihuahua',
        'skills': {
            'knitting': 7,
            'baking': 4,
            'organ identification': 10,
        }
    }
]
```

## A DATABASE MANAGEMENT SYSTEM

MongoDB which is basically place to store a bunch of JSON

Some other systems you may encounter:
- PostGres <--- Learning next week
- MySQL
- MariaDB
- CouchDB
- Oracle

Mongo is a NO SQL DATABASE

The architecure behind Mongo is:

SERVER - MONGO SERVER PROGRAM
- many databases
    - collections
        - documents

Or in a real world example:
WAREHOUSE
    - OFFICE
        - FOLDERS
            - PAPERS


SERVER -> DATABASES -> COLLECTIONS -. DOCUMENTS

## Some Quick Shell commands

- `show dbs` // show the databases

- `use <db>` // switch into a particular database

- `db.<collection>.find()` // show everything in a collection

- `db.<collection>.findOne()` // return only one thing

can also do find() with filters!

e.g. find({"name": "sadie" })
if the filter doesn't match anything, then we get nothing back

Lecture & Notes influenced my Nima's lecture - check it out here if you want to see the hiphop database in action

[Nima's Kanye Mongo lecture](https://web.compass.lighthouselabs.ca/activities/133/lectures/2262)