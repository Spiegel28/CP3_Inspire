export class Quote {

    constructor(data) {
        if (data && data._id) {
            this.id = data._id;
            this.content = data.content;
            this.author = data.author;
            this.tags = data.tags;
            this.authorSlug = data.authorSlug;
            this.dateAdded = data.dateAdded;
            this.dateModified = data.dateModified;
            this.length = data.length;
        } else {
            console.error('Error: Invalid quote data:', data);
            
        }
    }





    get QuoteTemplate() {
        return `
            <div class="quote">
                <p class="quote-text parent" onmouseover="showChild()" onmouseout="hideChild()">${this.content}</p>
                
                <p class="quote-author child hidden">- ${this.author}</p>
            </div>
        `;
    }
}