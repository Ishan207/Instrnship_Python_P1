// const card = document.createElement('div');
// const heading = document.createElement('h2');
// heading.textContent = 'Identity Card';
// card.appendChild(heading);

// // Image section
// const img = document.createElement('img');
// img.src = 'ishan.jpg'; 
// card.appendChild(img);

// // Name section
// const Name = document.createElement('p');
// Name.innerHTML = '<strong>Name:</strong> Ishan Pawar';
// card.appendChild(Name);

// // ID section
// const id = document.createElement('p');
// id.innerHTML = '<strong>ID:</strong> 180707';
// card.appendChild(id);

// // Final step: Add card to body
// //document.body.appendChild(card);
// Card
let card = document.createElement("div");
card.style.width = "250px";
card.style.margin = "50px auto";
card.style.border = "1px solid black";
card.style.textAlign = "center";
card.style.padding = "10px";
document.body.appendChild(card);

// Title
let title = document.createElement("h2");
title.textContent = "MET Polytechnic";
title.style.backgroundColor = "red";
title.style.color = "white";
title.style.margin = "0";
title.style.padding = "10px";
card.appendChild(title);

// Photo
let img = document.createElement("img");
img.src = "S.png"; // Replace with real image path
img.style.margin = "10px 0";
img.style.height = "100px"
card.appendChild(img);

// Name
let name = document.createElement("p");
name.textContent = "Sneha S. Gaikwad";
card.appendChild(name);

// Label
let label = document.createElement("div");
label.textContent = "STUDENT";
label.style.backgroundColor = "blue";
label.style.color = "white";
label.style.padding = "5px";
card.appendChild(label);