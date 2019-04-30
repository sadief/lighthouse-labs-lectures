package main

import "fmt"

func main() {
	// Logging message
	fmt.Println("Hello world")

	// Variable declaration
	var zebra = "I am a zebra"
	fmt.Println(zebra)

	// Variable shorthand
	ocelot := "I am an ocelot"
	fmt.Println(ocelot)

	// Declaring a variable type and value
	var kangaroo bool
	kangaroo = false
	fmt.Println(kangaroo)

	// Trying to assign a variable the wrong type - Errors
	// var kangaroo string
	// kangaroo = 6
	// fmt.Println(kangaroo)

	// If statement
	if !kangaroo {
		fmt.Println("kangaroo is false")
	}

	// //For loops - Fizz Buzz
	for i := 0; i <= 100; i++ {
		if i%15 == 0 {
			fmt.Println("Fizz Buzz")
		} else if i%3 == 0 {
			fmt.Println("Fizz")
		} else if i%5 == 0 {
			fmt.Println("Buzz")
		} else {
			fmt.Println(i)
		}
	}

	// Calling a function
	text := sayHello("Sadie", 2019)
	fmt.Println(text)

	// Pointers
	cats := 42
	c := &cats

	fmt.Println(*c)

	*c = 21

}

// Function
func sayHello(name string, num int) string {
	r := fmt.Sprintf("Hello %v the year is %v", name, num)
	return r
}
