package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

const (
	distPath    = "ui/dist"
	indexPath   = distPath + "/index.html"
	faviconPath = distPath + "/favicon.ico"
)

func fileHandler(filePath string) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, filePath)
	}
}

func main() {
	r := mux.NewRouter()

	r.HandleFunc("/status", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		payload := struct {
			Status string `json:"status"`
		}{
			Status: "ok",
		}
		json.NewEncoder(w).Encode(payload)
	})

	r.PathPrefix("/logos").Handler(http.FileServer(http.Dir(distPath)))
	r.PathPrefix("/static").Handler(http.FileServer(http.Dir(distPath)))
	r.HandleFunc("/favicon.ico", fileHandler(faviconPath))
	r.PathPrefix("/").HandlerFunc(fileHandler(indexPath))

	server := http.Server{
		Addr:         ":8003",
		Handler:      r,
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 5 * time.Second,
		IdleTimeout:  120 * time.Second,
	}

	log.Fatal(server.ListenAndServe())
}
