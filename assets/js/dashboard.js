let allMovies = [];

fetch("data/movies.json")
.then(res => res.json())
.then(data => {

    allMovies = data;

    renderMovies(data);
});

function renderMovies(data){

    document
    .querySelectorAll(".media-row")
    .forEach(row => row.innerHTML = "");

    data.forEach(movie => {

        const card =
        document.createElement("div");

        card.className =
        "media-card";

        card.innerHTML = `
            <div class="platform-badge">
                ${movie.platform}
            </div>

            <img src="${movie.poster}">

            <div class="title">
                ${movie.title}
            </div>
        `;

        const row =
        document.getElementById(
            movie.category
        );

        if(row){
            row.appendChild(card);
        }

    });
}

document
.getElementById("search")
.addEventListener("input", e => {

const value =
e.target.value.toLowerCase();

const filtered =
allMovies.filter(movie =>
movie.title
.toLowerCase()
.includes(value)
);

renderMovies(filtered);

});
