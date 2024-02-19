export class Quote {

    constructor(data) {
        this.id = data._id;
        this.content = data.content;
        this.author = data.author;
        this.tags = data.tags;
        this.authorSlug = data.authorSlug;
        this.dateAdded = data.dateAdded;
        this.dateModified = data.dateModified;
        this.length = data.length;
    }




    get QuoteTemplate() {
        return `
            <div class="quote">
                <p class="quote-text">${this.content}</p>
                <p class="quote-author">- ${this.author}</p>
            </div>
        `;
    }
}