'use strict'

console.log('Задание 3')

class Storage {
  constructor(items = []) {
    this.items = items
  }
  getItems() {
    return this.items
  }
  addItem(item) {
    this.items.push(item)
  }
  removeItem(item) {
    if (this.items.indexOf(item) >= 0) {
      this.items.splice(this.items.indexOf(item), 1)
    }
  }
}

//const removeItem = (item) => this.items.filter(el => el !== item)

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
])

const items = storage.getItems()
console.table(items)

storage.addItem('Дроид')
console.table(storage.items)

storage.removeItem('Пролонгер')
console.table(storage.items)
