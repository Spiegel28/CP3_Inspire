export class backgroundImage1 {
    
    
    constructor (data) {
        this.id = data.id
        this.imgUrl = data.imgUrl
        this.author = data.author 
    }
    
    get InfoCardHTMLTemplate(){
    return `
    <div class="info-card">
      <div class="hidden-details">
        <h2>
        <span>By ${this.author.name}</span>
        <a title="Go see ${this.author.first_name}'s profile on unsplash" href="${this.author.links.html}" target="_blank">
        <i class="mdi mdi-account-circle text-light"></i>
        </a>
        </h2>
        <button onclick="app.SandboxImagesController.createImage()" class="btn btn-outline-light px-3">Save</button>
      </div>
    </div>
    `
}
}

// author
// : 
// "PIRO4D"
// imgUrl
// : 
// "https://pixabay.com/get/g59f2e2156b26d809a22fd30ffc8e5331c083e7720b90a44b108bd934e06b46d44ebe4ee55d47a00dd0e81f6a5a6a64be995898e5cf278dcf4614b89afbaa539d_640.jpg"
// largeImgUrl
// : 
// "https://pixabay.com/get/g6331367f165d1cd9d2a0cd073103fbd8f19320ad23eae399b32a3f5c7ddc45eae690eadee703438f90804a08aed916b740b539cbf44c85c71046884b84522e83_1280.jpg"
// query
// : 
// "mountain"
// tags
// : 
// "schrecksee, mountain lake, allgäu"
// url
// : 
// "https://pixabay.com/get/g59f2e2156b26d809a22fd30ffc8e5331c083e7720b90a44b108bd934e06b46d44ebe4ee55d47a00dd0e81f6a5a6a64be995898e5cf278dcf4614b89afbaa539d_640.jpg"
// [[Prototype]]
// : 
// Object