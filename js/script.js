///////////////////////////////////////////////////////////
// Open Overlay

function openNav1() {
  document.getElementById("myNav1").style.width = "100%";
}

function closeNav1() {
  document.getElementById("myNav1").style.width = "0%";
}

function openNav2() {
  document.getElementById("myNav2").style.width = "100%";
}

function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
}

function openNav3() {
  document.getElementById("myNav3").style.width = "100%";
}

function closeNav3() {
  document.getElementById("myNav3").style.width = "0%";
}

function openNav4() {
  document.getElementById("myNav4").style.width = "100%";
}

function closeNav4() {
  document.getElementById("myNav4").style.width = "0%";
}

function openNav5() {
  document.getElementById("myNav5").style.width = "100%";
}

function closeNav5() {
  document.getElementById("myNav5").style.width = "0%";
}

function openNav6() {
  document.getElementById("myNav6").style.width = "100%";
}

function closeNav6() {
  document.getElementById("myNav6").style.width = "0%";
}

function openNav7() {
  document.getElementById("myNav7").style.width = "100%";
}

function closeNav7() {
  document.getElementById("myNav7").style.width = "0%";
}

function openNav8() {
  document.getElementById("myNav8").style.width = "100%";
}

function closeNav8() {
  document.getElementById("myNav8").style.width = "0%";
}

function openNav9() {
  document.getElementById("myNav9").style.width = "100%";
}

function closeNav9() {
  document.getElementById("myNav9").style.width = "0%";
}

function openNav10() {
  document.getElementById("myNav10").style.width = "100%";
}

function closeNav10() {
  document.getElementById("myNav10").style.width = "0%";
}

// document.documentElement.style.overflow = "hidden";
// document.body.scroll = "no";

// document.documentElement.style.overflow = "scroll";
// document.body.scroll = "yes";

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    /////////////////////////////////////////////////////////
    //Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const selectionEl = document.querySelector(href);
      selectionEl.scrollIntoView({ behavior: "smooth" });
    }

    ///////////////////////////////////////////////////////////
    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
