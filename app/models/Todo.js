export class Todos {
constructor(data) {

}

get todoListHTML() {
    return `
    <h2>My Checklist</h2>
    <ul id="checklist">
        <li>
            <label for="item1">Item 1</label>
            <input type="checkbox" id="item1">
        </li>
        <li>
            <label for="item2">Item 2</label>
            <input type="checkbox" id="item2">
        </li>
        <li>
            <label for="item3">Item 3</label>
            <input type="checkbox" id="item3">
        </li>
        <!-- Add more items as needed -->
    </ul>
    `
}
}
