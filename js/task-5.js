'use strict'

console.log('Задание 5')

class Car {
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.speed = speed
    this.price = price
    this.maxSpeed = maxSpeed
    this.isOn = isOn
    this.distance = distance
  }
  get cost() {
    return this.price
  }

  set cost(value) {
    this.price = value
  }
  static getSpecs(car) {
    console.log(car)
  }
  turnOn() {
    this.isOn = true
  }
  turnOff() {
    this.isOn = false
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value
    }
    return this.speed
  }
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value
    }
    return this.speed
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed
    }
    return this.distance
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 })

mustang.turnOn()
mustang.accelerate(50)
mustang.drive(2)

Car.getSpecs(mustang)

mustang.decelerate(20)
mustang.drive(1)
mustang.turnOff()

Car.getSpecs(mustang)

console.log(mustang.cost)
mustang.cost = 4000
console.log(mustang.cost)
