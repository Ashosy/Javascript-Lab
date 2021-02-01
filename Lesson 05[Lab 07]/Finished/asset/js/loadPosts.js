// UI Vars 
const postDiv2 = document.getElementById('myPosts');



//load a single customer function 
function loadPosts() {

    // Create the xhr object 
    const xhr = new XMLHttpRequest();

    // Open the connection [URL can be local or remote]
    xhr.open('GET', '/Lesson 05[Lab 07]/Finished/asset/jsonData/posts.json', true);

    //on ready state is 4 when it reaches this method 
    xhr.onload = function() {
        // Check status is OK 
        if (this.status === 200) {

            //the data will be parsed as an array object from the responseText object 
            const posts = JSON.parse(this.responseText);

            let output = '';

            posts.forEach(post => {

                // Creating the UI by concatenation
                output += `
              <div class="item">
              <div class="image">
                  <img src="${posts.image}">
              </div>
              <div class="content">
                  <a class="header" href="#" id="bTitle">
                  ${posts.postTitle}
                  </a>
                  <div class="meta">
                      <span id="bDate">${posts.date} </span>
                      <span>By: <a href="#" id="bAuthor"> ${posts.name}</a></span>
                  </div>
                  <div class="description">
                      <p id="bDesc">
                      ${posts.postText}
                      </p>
                  </div>
                  <div class="extra">
                      <a class="ui floated basic violet button" href="#">Read Mores</a>
                  </div>
              </div>
          </div>
          `;

            });



            // Assign it to the DIV
            postDiv2.innerHTML = output;
        }
    }

    // Send the Request 
    xhr.send();
}