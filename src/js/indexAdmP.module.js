import {addLesson} from './admModules/addLesson.module.js'

const buttonCourse = document.querySelector(".button-course");
const main_contentPad = document.querySelector(".main_contentPad");

export const main_url = 'http://localhost:5000'

function addNavPnel() {
  buttonCourse.addEventListener("click", () => {
    console.log("click");
    if (!document.querySelector(".main_contentPad_nav")) {
      main_contentPad.insertAdjacentHTML(
        "afterbegin",
        `
                  <nav class="main_contentPad_nav flex flex-column">
                  <div class="main_contentPad_nav__item flex flex-column viewFlow_button">
                      <div class="main_contentPad_nav__item_icon img viewFlow"></div>
                      <span class="main_contentPad_nav__item_text">просмотреть поток</span>
                  </div>
                  <div class="main_contentPad_nav__item flex flex-column addLesson_button">
                      <div class="main_contentPad_nav__item_icon img addLesson"></div>
                      <span class="main_contentPad_nav__item_text">добавить урок</span>
                  </div>
                  <div class="main_contentPad_nav__item flex flex-column studentList_button">
                      <div class="main_contentPad_nav__item_icon img studentList"></div>
                      <span class="main_contentPad_nav__item_text">списоок учеников</span>
                  </div>
                  <div class="main_contentPad_nav__item flex flex-column studentAdd_button">
                      <div class="main_contentPad_nav__item_icon img studentAdd"></div>
                      <span class="main_contentPad_nav__item_text">добавить ученика</span>
                  </div>
              </nav>
                  `
      );

      addLesson()
    } else {
      // если панель навигации открыта, то при нажатии кнопки "КУРС" - она удалиится
      document.querySelector(".main_contentPad_nav").remove();
    }
  });
}

addNavPnel();