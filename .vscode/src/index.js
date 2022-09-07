// write your code here
document.addEventListener ("DOMContentLoaded", onLoad);
let log = console.log();

const image  = document.querySelector(".image");
const title = document.querySelector(".title");
const likes = documen.querySelector(".likes");
const likeBtn = document.querySelector(".like-button");
const comments = doucument.querySelector(".comments");

function onLoad() {
    return fetch ("http://localhost:3000/images/1")
        .then ((resp) =>  resp.json())
        .then ((data) => {
            loadImage(data);
        });
}

function loadImage(data) {
    image.scr = data.image 
    title.textContent = data.title;

likeBtn.addEventListener("click", () => {
    let updateLikes = data.likes ++;
    likes.textContent = updateLikes + " likes";
    log(updateLikes);
})

comments.innerText = " "
data.comments.forEach(element => {
    let li = document.createElement("li")
    li.appeand(element.content)
    comments.append(li);
});

}

