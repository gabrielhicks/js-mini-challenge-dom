document.addEventListener("DOMContentLoaded", () => {
/***** Deliverable 1 *****/
const header = document.querySelector("#header");
console.log("Here's your header:", header);


/***** Deliverable 2 *****/
header.style = "color:red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS);
const dad = document.querySelector(".player-container");

for (player of PLAYERS) {
    let div = document.createElement("div");
    let kid = dad.appendChild(div)
    kid.classList.add("player");
    kid.dataset.number = `${player.number}`;
    let header = document.createElement("h3");
    let h3 = kid.appendChild(header);
    h3.innerHTML = `${player.name} (<em>${player.nickname}</em>)`
    let img = document.createElement("img");
    h3.appendChild(img)
    img.src = `${player.photo}`
    img.alt = `${player.name}`
}
console.log(dad);

/***** Deliverable 4 *****/
document.querySelector("div[data-number='7']").remove();
});