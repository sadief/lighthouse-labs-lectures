# May 16th, W3D4 State Management & Persistence


FULL STACK DEVELOPERS

- [ ] Front End
    - CSS
    - HTML
    - Client Side JS
    - AJAX
    - jQuery
    - Flexbox
    - Fancy design thingies
    - UX/UI related stuff

- [ ] Back End
    - Serving specific pages/responses based on different routes (GET/robot) and based on certain parametes (e.g. who is logged in)
    - Store and manage the data


DATABASE Stuff

MongoDB

Tiny App

- Create a Tiny URL
- Look at (read) a Tiny URL
- Edit (update) a Tiny URL
- Delete (destroy) a Tiny URL
- Create a user

Non-crud
- Log in as a user

`npm run start`

In order to use Tiny App there has to be a server **running**

Tiny app stores data **In Memory**

urls = {

}

NOT PERSISTENT

- Add data
- Show data
- Edit data
- Delete data

Store data somewhere other than servers

When storing data, I want:

1. I want the data to persist
2. I want to have some smart interactions with the data
3. I want multiple applications to share the same source of data

smart interactions
 - How many of this thing do you have?
 - Find me this particular thing and its associated data

 A DATABASE


 INTERFACE ---- APPLICATION + LOGIC ---- DATA

 Pretty stuff --- "user does not exist" ----- Everything we need

 - Write to a text file

 ```
name, job-title, favorite_dog
sadie, developer, german shepherd,
benjamin, morgue attendant, chihuahua
 ```


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

A DATABASE MANAGEMENT SYSTEM

MongoDB

A place to store a bunch of JSON

- PostGres <--- Learning next week
- MySQL
- MariaDB
- CouchDB
- Oracle

NO SQL DATABASE

SERVER - MONGO SERVER PROGRAM
- many databases
    - collections
        - documents


- WAREHOUSE
    - OFFICE
        - FOLDERS
            - PAPERS


SERVER -> DATABASES -> COLLECTIONS -. DOCUMENTS


