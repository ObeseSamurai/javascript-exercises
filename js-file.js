// your JavaScript file
const container = document.querySelector("#container");

// red p
const content = document.createElement("p");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
content.style.cssText = "color: red; background: black; font-size: 36px;";
//content.style.cssText = "";

container.appendChild(content);

// blue h3 IM a blue h3!
const blueTitle = document.createElement("h3");
blueTitle.classList.add("blueTitle");
blueTitle.textContent = "I'm a blue h3!";
blueTitle.style.cssText = "color: blue; background: black; font-size: 45px;";

container.appendChild(blueTitle);

// div with black border pink back and contains an h1 that says im a div
// and a p that says me too! 
const container2 = document.createElement("div");
container2.classList.add("container2");
container2.style.cssText = "border: 5px solid black; background: pink;";


container.appendChild(container2);


const title = document.createElement("h1");
title.classList.add("title");
title.textContent = "I'm a div";
title.style.cssText = "color: purple; background: gray; font-size: 50px;";

container2.appendChild(title);


const para = document.createElement("p");
para.classList.add("para");
para.textContent = "Im also a div!!";
para.style.cssText = "color: orange; font-size: 60px;";

container2.appendChild(para);
