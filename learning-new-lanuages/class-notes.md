# W9D1 Learning a new Language/Framework on the Job
# Ft. Golang

I guarantee that there will be something in your new dev job that is strange an unfamiliar. Whether that's a language, framework or piece of technology that you've never worked with before, the point is that Lighthouse has set you up to be able to learn on your feet quickly. Here's some tips for approaching this in a new job. I've used Go as an example, partly because it's a pretty cool language, and partly because it's the language I had to learn on the job.

The recording will be updated at some point today - I just need to stitch the videos together and upload due to the laptop crashes.

Also, the bug we saw at the very end was down to this:

```js
socket.onmessage = function (e) {
    output.innerHTML += "Server: " + e.data + "\n"
}
```

The `onmessage` was actually `onMessage` which is not a socekt function and therefore wasn't firing.

## Investigation
Do some preliminary investigation into the language before you start diving in. This will help you understand more about the language and why it is used.

### Questions to ask
    - Why does it exist?
    - What is it commonly used for?
    - What made you decide to use this stack?
    - Is it object oriented? What are the paradigms

## Documentation

READ

THE

DOCS

Not all docs were created equal, but it's up to you to utlise them to the best of your ability. I can't tell you how many times I've been stuck on something and then read the docs and facepalmed because it was **RIGHT THERE** all along.

Here's the documentation we looked at today

[GoDocs](https://golang.org/)
[Gorilla](https://www.gorillatoolkit.org/pkg/websocket) - A Go library for Websockets

## Pulling out key differences

Identify the unfamiliar:
- Is there a specific setup for this?
- What the heck is a pointer?

- Static Typing [What is it?](https://stackoverflow.com/questions/1517582/what-is-the-difference-between-statically-typed-and-dynamically-typed-languages)

- [Concurrency](https://medium.com/@trevor4e/learning-gos-concurrency-through-illustrations-8c4aff603b3)
- [Channels](https://tour.golang.org/concurrency/2)
- [Goroutines](https://tour.golang.org/concurrency/1)


## Fundamentals
Identify the familiar:
- How do I declare a variable in this language?
- Write an if statement?
- Write for loops
- Declare a function


## Record the things you don't understand and make someone explain them to you

Try to keep a log of terms and technologies that make your brain want to explode and if you are able to snag some time each week with your senior dev, use that time to interrogate them and get you up to speed.

[Here's](https://docs.google.com/document/d/1oG37QSXbi7yADFd2d-3Z_QpBGjvXcri0_31gcWh0H1g/edit?usp=sharing) my example


## Make something

One thing I like to do is walk through an online tutorial but with my own concept. This means I'm not just following along aimlessly (I never learn anything from copy-pasting tutorials)

## Resources

If you're interested in Go, here's some more resources:
[Golang Weekly](https://golangweekly.com/) - An awesome newsletter. They also have ones for Ruby, Js, React, etc.

[Go by Example](https://gobyexample.com/) - Examples of everything in go (variables, structs, loops)

[Games with Go](https://gameswithgo.org/) Fancy making a game with Go?