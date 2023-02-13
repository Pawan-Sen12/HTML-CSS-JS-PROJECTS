const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const courseOverviewEl = document.querySelector(".course_overview_container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click",()=>{
    courseOverviewEl.classList.remove("active");
});

closeIconEl.addEventListener("click",()=>{
    courseOverviewEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})