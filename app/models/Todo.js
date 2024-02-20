import { AppState } from "../AppState.js"

export class Todos {
constructor(data) {
this.id = data.id
this.creatorId = data.creatorId
this.creator = data.creator
}

get todoListHTML() {
    return `
    <ul id="checklist">
        <li>
            <label for="item1">Item 1</label>
            <input type="checkbox" id="item1">
            ${this.DeleteButton}
        </li>
        <!-- Add more items as needed -->
    </ul>
    `
}


get DeleteButton() {
    // NOTE If we are not logged in OR if we are not the creator of this car object
    if (AppState.account == null || this.creatorId != AppState.account.id) {
      return ''
    }

    // NOTE shows delete button only for the creator of the car
    return `<button onclick="app.CarsController.removeCar('${this.id}')" class="btn btn-danger">Delete Car</button>`
  }
}
