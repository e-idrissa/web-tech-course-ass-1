document.addEventListener("DOMContentLoaded", function() {
  
  const newsItems = document.querySelectorAll(".list-news li");
  const bannerImg = document.getElementById("banniere-img");
  let activeIndex = 0;
  let interval;

  function setActiveItem(index) {
    newsItems.forEach((item, i) => {
      item.classList.toggle("active", i === index);
      if (i === index) {
        const imgSrc = item.querySelector("img").src;
        bannerImg.src = imgSrc;
        console.log(bannerImg.src);
      }
    });
    activeIndex = index;
  }

  function getRandomIndex() {
    return Math.floor(Math.random() * newsItems.length);
  }

  function startRandomChange() {
    interval = setInterval(() => {
      setActiveItem(getRandomIndex());
    }, 5000);
  }

  newsItems.forEach((item, index) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      clearInterval(interval);
      setActiveItem(index);
      startRandomChange();
    });
  });

  setActiveItem(activeIndex);
  startRandomChange();
});