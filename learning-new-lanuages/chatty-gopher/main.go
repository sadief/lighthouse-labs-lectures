package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

func main() {
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("Assets"))))

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "views/index.html")
	})

	http.HandleFunc("/gopher-talk", func(w http.ResponseWriter, r *http.Request) {
		conn, err := upgrader.Upgrade(w, r, nil)
		if err != nil {
			log.Println(err)
			return
		}

		for {
			msgType, msg, err := conn.ReadMessage()
			if err != nil {
				return
			}

			fmt.Printf("%s sent: %s\n", conn.RemoteAddr(), string(msg))

			if err = conn.WriteMessage(msgType, msg); err != nil {
				log.Println(err)
				return
			}
		}

	})

	log.Printf("Listening on port 3030")
	http.ListenAndServe(":3030", nil)
}
