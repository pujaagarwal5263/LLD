package main

import (
	"fmt"
	"sync"
)

type PaymentGatewayManager struct{}

var instance *PaymentGatewayManager
var mtx sync.Mutex

func GetInstance() *PaymentGatewayManager {
	if instance == nil { // First check (no lock)
		mtx.Lock() // Acquire lock
		defer mtx.Unlock()

		if instance == nil { // Double-check inside lock
			fmt.Println("Payment Gateway Manager initialized.")
			instance = &PaymentGatewayManager{}
		}
	}
	return instance
}

func (pg *PaymentGatewayManager) ProcessPayment(amount float64) {
	fmt.Printf("Processing payment of $%.2f through the payment gateway.\n", amount)
}

func main() {
	pg1 := GetInstance()
	pg1.ProcessPayment(100.0)

	pg2 := GetInstance()

	if pg1 == pg2 {
		fmt.Println("Both instances are the same. Singleton pattern is working.")
	} else {
		fmt.Println("Singleton pattern is not working correctly.")
	}
}
