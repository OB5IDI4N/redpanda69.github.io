let abtMe = document.getElementById("AboutMe")
let skills = document.getElementById("Skills")
let home = document.getElementById("Home")
let bg = document.getElementsByClassName("bg")

function onIntersectionHome(entries) {
    if (entries[0].isIntersecting > 0.0){   
        for (let i = 0; i < bg.length;i++){
            bg[i].classList.remove(bg[i].classList[1])
            bg[i].classList.add("bgHome")
        }
        home.style.opacity = 1
        abtMe.style.opacity = 0
        skills.style.opacity = 0
    }
}
function onIntersectionAbtMe(entries) {
    if (entries[0].isIntersecting){
        for (let i = 0; i < bg.length;i++){
            bg[i].classList.remove(bg[i].classList[1])
            bg[i].classList.add("bgAbtMe")
        }
        abtMe.style.opacity = 1
        home.style.opacity = 0
        skills.style.opacity = 0
    }
  }
function move(el,percent) {
    var i = 0;
    if (i == 0) {
      i = 1;
      var elem = document.getElementById(el);
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= percent) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
      }
    }
  }
function onIntersectionSkills(entries) {
    if (entries[0].isIntersecting){
        for (let i = 0; i < bg.length;i++){
            bg[i].classList.remove(bg[i].classList[1])
            bg[i].classList.add("bgSkills")
        }
        abtMe.style.opacity = 0
        home.style.opacity = 0
        skills.style.opacity = 1
        move("html",95)
        move("py",90)
        move("js",80)
        move("php",50)
        move("gdscrpt",60)
    }
  }
let observer1 = new IntersectionObserver(onIntersectionAbtMe,{threshold:0.5});
let observer2 = new IntersectionObserver(onIntersectionHome,{threshold:0.5});
let observer3 = new IntersectionObserver(onIntersectionSkills,{threshold:0.5});
observer1.observe(abtMe);
observer2.observe(home);
observer3.observe(skills)
let header = document.getElementById("header")
window.onscroll = ()=>{
    if (scrollY >= 300){
        header.style.backgroundColor = "var(--scndry-color)"
        header.style.boxShadow = "0 5px 10px 0 rgba(0, 0, 0, 0.5), 0 10px 20px 0 rgba(0, 0, 0, 0.25)"
    }
    else{
        header.style.backgroundColor = "transparent"
        header.style.boxShadow = "none"
    }
}
let isCacheSupported = 'caches' in window;


function handleColorClick(elem) {
  let clr = elem.style.backgroundColor
  console.log(clr)
  document.documentElement.style.setProperty("--prmry-color",clr)
}
