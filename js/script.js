let menu_item = document.querySelectorAll(".menu_text li");
let menu_image = document.querySelectorAll(".menu_image");
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

const close_menu = document.querySelector("#close");
const menu = document.querySelector("#menu");
const menu_container = document.querySelector(".menu_container");
const body = document.querySelector("body");
let cursor = document.querySelector("#cursor");
let video_item = document.querySelectorAll(".video_item");
const header_image_canad = document.querySelector(".header_image_canad");
const video_canad_item = document.querySelector(".video_canad_item");
const image_canad_item = document.querySelectorAll(".image_canad_item");
const categorie_container = document.querySelectorAll(".categorie_container");
const faq_container_item_title = document.querySelectorAll(
  ".faq_container_item_title"
);

let x, y;
document.addEventListener("mousemove", (e) => {
  setTimeout(function () {
    cursor.classList.add("show_cursor");
  }, 300);
  x = e.clientX - 12;
  y = e.clientY - 12;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});
document.addEventListener("mouseleave", () => {
  setTimeout(function () {
    cursor.classList.remove("show_cursor");
  }, 300);
});

faq_container_item_title.forEach(function (element) {
  element.addEventListener("click", () => {
    const faq_text = element.parentElement.lastElementChild;
    faq_text.classList.toggle("show_faq");
  });
});

categorie_container.forEach(function (element) {
  element.addEventListener("click", () => {
    const enfant = element.querySelector(".categorie_container_item");
    enfant.classList.toggle("expand");
  });
});
 video_canad_item.addEventListener("mousemove", () => {
   for (let i = 0; i < image_canad_item.length; i++) {
     image_canad_item[i].classList.add("shake");
   }
 });
 video_canad_item.addEventListener("mouseleave", (e) => {
   for (let i = 0; i < image_canad_item.length; i++) {
     image_canad_item[i].classList.remove("shake");
   }
 });
// video_item.forEach(function (element) {
//   const video = element.querySelector("video");
//   element.addEventListener("mouseenter", () => {
//     video.play();
//     // const link_video_click = element.firstElementChild;
//     // link_video_click.classList.add("show_link_video");
//   });
//   // element.addEventListener("mousemove", () => {
//   //   const link_video_click = element.firstElementChild;
//   //   link_video_click.style.left = `${x - 5}px`;
//   //   link_video_click.style.top = `${y - 5}px`;
//   // });
//   element.addEventListener("mouseleave", () => {
//     video.pause();
//     // const link_video_click = element.firstElementChild;
//     // link_video_click.classList.remove("show_link_video");
//   });
// });

// menu.addEventListener("click", (e) => {
//   e.preventDefault();
//   // body.classList.add("change_height");
//   // menu_container.classList.add("show_menu");
//   // menu.classList.add("hide_button_menu");
//   // close_menu.classList.add("show_button_close");
// });
// close_menu.addEventListener("click", (e) => {
//   e.preventDefault();
//   // body.classList.remove("change_height");
//   // menu_container.classList.remove("show_menu");
//   // close_menu.classList.remove("show_button_close");
//   // menu.classList.remove("hide_button_menu");
// });
