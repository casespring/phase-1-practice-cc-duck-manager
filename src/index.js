// write your code here!
function main() {
    fetch("http://localhost:3000/ducks")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            duckMoreDetails(data[0])
            data.forEach(renderDucks);
        })
        
        let form = document.querySelector('#new-duck-form');
       

        form.addEventListener("submit", e => {
            e.preventDefault()
            console.log(e.target)

            let newDuck = {
                name: e.target["duck-name-input"].value,
                img_url: e.target["duck-image-input"].value,
            }
            renderDucks(newDuck);
        })
};

    function renderDucks(ducks) {
        let div = document.querySelector("#duck-nav");

        let imgDuck = document.createElement('img');

        imgDuck.src = ducks.img_url;

        div.append(imgDuck);

        imgDuck.addEventListener('click', e => {
            duckMoreDetails(ducks);
        })
    };

    function duckMoreDetails(ducks) {
        let duckName = document.querySelector('#duck-display-name');
        duckName.textContent = ducks.name;

        let duckPicture =  document.querySelector("#duck-display-image");
        duckPicture.src = ducks.img_url;

        let duckLikes = document.querySelector("#duck-display-likes");
        duckLikes.textContent = `${ducks.likes} likes`;

        let duckLikesButton = document.querySelector('#duck-display-likes');

        let duckCounter = ducks.likes;

        duckLikesButton.addEventListener('click', e => {
            duckCounter++
            duckLikesButton.textContent = `${duckCounter} likes`;
        })
        
        
    };

    

   





























document.addEventListener('DOMContentLoaded', main);