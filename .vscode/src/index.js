// write your code here
document.addEventListener ("DOMContentLoaded", onLoad);
let log = console.log();

const image  = document.getERlementById(".image");
const title = document.getElementById(".title");
const like = documen.getElementById(".like-count");
const likeBtn = document.getElementById(".like-button");
const comments = doucument.getERlementById(".comments");

function onLoad() {
    return fetch ("http://localhost:3000/images/1")
        .then ((resp) =>  resp.json())
        .then ((data) => {
            updateImage(data);
        });
}

function updateImage(data) {
    image.scr = data.image 
    title.textContent = data.title;

}

likeBtn.addEventListener("click" , () => {
    let updateLikes = data.likes +1
    likes.textContent = updateLikes + "likes";
    log(updateLikes)
})

comments.innerText = " "
data.comments.forEach(element => {
    let li = document.createElement("li")
    li.appeand(element.content)
    comments.append(li)
});
