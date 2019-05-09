## HTTP is Stateless

[Link to the repo](https://github.com/sadief/lighthouse-labs-lectures/tree/may-08-19/user-authentication)

HTTP requests dont _remember_ information - they don't have user information unless we send this aloing with every request.

We took this from the simplest implementation all the way up to hashing.

We could potentially store user information in our query params:

`www.getcookies.com?userID=1?name=sadie`

User id 
```js
    const userID = req.query.userID
    const user = userDB[userID]
    res.json(user)
```

Bu this makes our URLS messy and also gives visibility of the id


## Cookies

Cookies technically work the same way where by we are sending along a little bit of information with every request, we just don't have to deal with it in the URL.

The server send a cookie and then the browesr stores it to use with every request.

We used `cookie-parser` to implement cookies in our app, but this meant that our UserIDs were visible, and therefore guessable.

The next level up is to use `cookie-parser` which will encrypt your cookies and turn them from:

pass123 -> sdf89dfsk3aslkj23r-9dfohi2r3

(or something like that)

## Storing Passwords

Never

Store

Passwords

In

Plain

Text

[Facebook did a bad thing and they should feel bad](https://krebsonsecurity.com/2019/03/facebook-stored-hundreds-of-millions-of-user-passwords-in-plain-text-for-years/)

### Encryption
An algorithm that modifies an input into a different output

Given the algorithm, you can decrypt


### Hashing

Same idea, but one way. You cannot decrypt.

With hashing we use Salt. Salt is little bits of random data that gets sprinkled into our hashing which means that every time something in encrypted the result is different.

We used `bcrypt` to secure our passwords which is a very good hashing algorithm, though there are others out there.

[Bcrypt](https://en.wikipedia.org/wiki/Bcrypt)
