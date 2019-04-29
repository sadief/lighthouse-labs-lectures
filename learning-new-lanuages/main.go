package main

import "fmt"

func main() {
	// fmt.Println("Hello world")

	// var zebra = "I am a zebra"
	// fmt.Println(zebra)

	// ocelot := "I am an ocelot"
	// fmt.Println(ocelot)

	// var kangaroo bool
	// kangaroo = false
	// fmt.Println(kangaroo)

	// var kangaroo string
	// kangaroo = 6
	// fmt.Println(kangaroo)

	// if !kangaroo {
	// 	fmt.Println("kangaroo is false")
	// }

	// //For loops - Fizz Buzz
	// for i := 0; i <= 100; i++ {
	// 	if i%15 == 0 {
	// 		fmt.Println("Fizz Buzz")
	// 	} else if i%3 == 0 {
	// 		fmt.Println("Fizz")
	// 	} else if i%5 == 0 {
	// 		fmt.Println("Buzz")
	// 	} else {
	// 		fmt.Println(i)
	// 	}
	// }

	// text := sayHello("Sadie", 2019)
	// fmt.Println(text)

	// cats := 42
	// c := &cats

	// fmt.Println(*c)

	// *c = 21

}

func sayHello(name string, num int) string {
	r := fmt.Sprintf("Hello %v the year is %v", name, num)
	return r
}
