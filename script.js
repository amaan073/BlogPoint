var navbar = document.querySelectorAll(".nav>li>a");
var currentPage = window.location.pathname.split("/").pop().split(".")[0]; // Get the current page name using url of the page

if (currentPage == "index") {
  var currentPage = "home"; //file name as "index" for github
}

navbar.forEach((nav) => {
  var targetLink = nav.getAttribute("data-page");

  if (targetLink === currentPage) {
    return;
  }

  var targetSvg = document.querySelector("#" + targetLink + ">path");

  nav.addEventListener("mouseover", () => {
    targetSvg.setAttribute("fill", "#000");
    nav.classList.add("active");
    nav.classList.remove("text-white");
  });

  nav.addEventListener("mouseout", () => {
    targetSvg.setAttribute("fill", "#fff");
    nav.classList.remove("active");
    nav.classList.add("text-white");
  });
});

const date = new Date().getFullYear();
document.querySelector("#date").innerHTML = date;

////////////////////////////////

//like button response

const likeIcon = document.querySelector(".like>svg.bi-heart");
const likeFilledIcon = document.querySelector(".like>svg.bi-heart-fill");
var likeCount = document.querySelector(".likeCount");

likeIcon.addEventListener("click", () => {
  likeIcon.style.display = "none";
  likeFilledIcon.style.display = "inline-block";
  likeCount.innerHTML = parseInt(likeCount.innerHTML) + 1;
});

likeFilledIcon.addEventListener("click", () => {
  likeIcon.style.display = "inline-block";
  likeFilledIcon.style.display = "none";
  likeCount.innerHTML = parseInt(likeCount.innerHTML) - 1;
});

///////////////////////////////////

// /////////////////////////
// COMMENT FUNCTION

function handleForm(event) {
  event.preventDefault();
  var commentUser = document.querySelector("input[name='Name']").value;
  var commentText = document.querySelector("#commentText").value;
  var commentList = document.querySelector(".commentList");

  //for empty username or comment
  if (commentText.trim().length === 0 || commentUser.trim().length === 0) {
    return;
  }

  var commentCount = document.querySelector(".commentCount");
  commentCount.innerHTML = parseInt(commentCount.innerHTML) + 1;

  var commentContainer = document.createElement("div");
  var username = document.createElement("h3");
  var text = document.createElement("p");

  commentContainer.classList.add(
    "comment",
    "border-start",
    "border-dark",
    "border-3",
    "rounded-end",
    "shadow",
    "w-100",
    "p-4",
    "my-3",
    "bg-light",
  );
  username.innerHTML = commentUser;
  text.innerHTML = "> " + commentText;

  commentList.appendChild(commentContainer);
  commentContainer.appendChild(username);
  commentContainer.appendChild(text);
}
