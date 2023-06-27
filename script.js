const searchForm = document.querySelector(".search-form");
const cardItems = document.querySelector(".card-items-container");
const navBar = document.querySelector(".navbar");

// buttons

const searchButton = document.querySelector("#search-btn");
const cardBtn = document.querySelector("#card-btn");
const navBtn = document.querySelector("#menu-btn");

searchButton.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchButton) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

cardBtn.addEventListener("click", function () {
  cardItems.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cardBtn) &&
      !e.composedPath().includes(cardItems)
    ) {
      cardItems.classList.remove("active");
    }
  });
});
navBtn.addEventListener("click", function () {
    navBar.classList.toggle("active");
    document.addEventListener("click", function (e) {
      if (
        !e.composedPath().includes(navBtn) &&
        !e.composedPath().includes(navBar)
      ) {
        navBar.classList.remove("active");
      }
    });
  });
  
