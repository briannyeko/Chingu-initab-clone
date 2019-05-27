//tablinks

// onClick tabs (Github Issues or pull requests)
let i = document.getElementById("issues");
let p = document.getElementById("pullrequests");
let ai = document.getElementById("issues-tabs");
let ap = document.getElementById("pull-requests-tabs");
let content = document.getElementsByClassName("github-issue");
let contentB = document.getElementsByClassName("github-pull-requests");

i.addEventListener("click", function() {
  for(let c=0; c<contentB.length; c++) {
    contentB[c].style.display = "none";
  }
  console.log("cek-content onClick i");
  for(let c=0; c<content.length; c++) {
    content[c].style.display = "block";
  }
  ai.style.visibility = "visible";
  ap.style.visibility = "hidden";
  console.log(ai);
});

p.addEventListener("click", function() {
  for(let c=0; c<contentB.length; c++) {
    contentB[c].style.display = "block";
  }
  console.log("cek-content onClick p");
  for(let c=0; c<content.length; c++) {
    content[c].style.display = "none";
  }
  ap.style.visibility = "visible";
  ai.style.visibility = "hidden";
  console.log(ap);
})
