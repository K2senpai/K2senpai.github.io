const close_menu = document.querySelector("#close");
const menu = document.querySelector("#menu");
const menu_container = document.querySelector(".menu_container");
const body = document.querySelector("body");
let menu_item = document.querySelectorAll(".menu_text li");
let menu_image = document.querySelectorAll(".menu_image");
const element_menu = document.querySelectorAll(".menu_text ul li a")
const element_menu_li = document.querySelectorAll(".menu_text ul li .before_link")
const tl_menu = gsap.timeline()
menu_item.forEach(function (element) {
  element.addEventListener("mouseenter", () => {
    if (element.classList.contains("connexion_menu")) {
      for (let i = 0; i < menu_image.length; i++) {
        if (menu_image[i].classList.contains("connexion_menu")) {
          menu_image[i].classList.add("menu_image_visible");
        } else {
          menu_image[i].classList.remove("menu_image_visible");
        }
      }
    } else if (element.classList.contains("tutoriel_menu")) {
      for (let i = 0; i < menu_image.length; i++) {
        if (menu_image[i].classList.contains("tutoriel_menu")) {
          menu_image[i].classList.add("menu_image_visible");
        } else {
          menu_image[i].classList.remove("menu_image_visible");
        }
      }
    } else if (element.classList.contains("faq_menu")) {
      for (let i = 0; i < menu_image.length; i++) {
        if (menu_image[i].classList.contains("faq_menu")) {
          menu_image[i].classList.add("menu_image_visible");
        } else {
          menu_image[i].classList.remove("menu_image_visible");
        }
      }
    } else if (element.classList.contains("propos_menu")) {
      for (let i = 0; i < menu_image.length; i++) {
        if (menu_image[i].classList.contains("propos_menu")) {
          menu_image[i].classList.add("menu_image_visible");
        } else {
          menu_image[i].classList.remove("menu_image_visible");
        }
      }
    } else if (element.classList.contains("contact_menu")) {
      for (let i = 0; i < menu_image.length; i++) {
        if (menu_image[i].classList.contains("contact_menu")) {
          menu_image[i].classList.add("menu_image_visible");
        } else {
          menu_image[i].classList.remove("menu_image_visible");
        }
      }
    }
  });
});
menu.addEventListener("click", (e) => {
    e.preventDefault()
    body.classList.add("change_height");
    tl_menu.to(menu_container, {
        xPercent: -100,
        duration: 0.3
    }).from(element_menu, {
        stagger: 0.1,
        x: 500,
    }).from(element_menu_li, {
        opacity: 0.1,
        scale: 0,
        stagger: 0.01
    }).from(".menu_image_visible", {
        xPercent: 100,
        duration: 0.1,
    }).to(close_menu, {
        opacity: 1,
        ease: "back.out(2)"
    }).from(".form_search", {
        opacity: 0
    })
})
close_menu.addEventListener("click", (e) => {
    e.preventDefault()
    body.classList.remove("change_height");
    gsap.to(".menu_container", {
        xPercent: 100
    })
})