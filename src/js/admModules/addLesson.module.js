import { main_url } from "../indexAdmP.module.js";

const main_contentPad_content = document.querySelector(
  ".main_contentPad_content"
);

export function addLesson() {
  if (document.querySelector(".addLesson_button")) {
    const addLesson = document.querySelector(".addLesson_button");
    // обработчик кнопки "Добавить урок"
    addLesson.addEventListener("click", () => {
      if (!document.querySelector(".main_contentPad_content_FORM")) {
        // если форма не открыта, то добавляем ее на страницу
        main_contentPad_content.insertAdjacentHTML(
          "afterbegin",
          `   <form action="http://localhost:3000/api/addLesson" method="post" class="main_contentPad_content_FORM flex flex-column">
                            <h3 class="main_contentPad_content_FORM_header">+ добавление нового урока</h3>
                            <div class="cancel_icon form_button_icon img cancel_button"></div>
                            <label for="content_type">Тип задания</label>
                            <select name="content_type" id="content_type">
                                <option value="">-- Выберите тип контента --</option>
                                <option value="text">Текст</option>
                                <option value="audio">Аудио</option>
                                <option value="video">Видео</option>
                                <option value="survey">Опрос</option>
                            </select>
                            <label for="award_type">Тип вознаграждения</label>
                            <select name="award_type" id="award_type">
                                <option value="silver">Серебро</option>
                                <option value="gold">Золото</option>
                                <option value="pearl">Жемчуг</option>
                            </select>
                            <label for="award_value">Значение вознаграждения за задание</label>
                            <input placeholder="Сколько валюты получит ученик" value="100" type="text" name="award_value" id="award_value" class="sellForm"/>
                            <label for="description">Описание задания</label>
                            <textarea placeholder="Описание задания, которое увидит ученик при его выполнении" name="description" id="description" cols="30" rows="10"></textarea>

                        <div class="form_button_pad flex flex-row">
                            <div class="form_button flex flex-row submit">
                                <div class="form_button_icon submit_icon img"></div>
                                <span class="form_button_text">Сохраниь</span>
                            </div>

                            <div class="form_button flex flex-row cancel">
                                <div class="form_button_icon cancel_icon img"></div>
                                <span class="form_button_text">Закрыть</span>
                            </div>
                        </div>
                        </form>`
        );

        // обработчик SELECT выбора типа контента
        const content_typeSelect = document.querySelector("#content_type");
        const award_type = document.querySelector("#award_type");
        console.log("audio");
        content_typeSelect.addEventListener("change", () => {
          if (
            content_typeSelect.value === "audio" ||
            content_typeSelect.value === "video"
          ) {
            console.log("audio");
            if (!document.querySelector(".file_box")) {
              award_type.insertAdjacentHTML(
                "afterEnd",
                `
                      <div class="file_box flex flex-column">
                              <label for="input_file">Добавьте файл</label>
                              <input type="file" name="input_file" id="input_file" class="input_file_transition">
                              <div class="input_file flex flex-row ">
                                  <div class="input_file_icon img"></div>
                                  <span class="input_file_text">Файл не выбран</span>
                              </div>
                          </div>
                      `
              );

              //выбираем input type=file
              const input_file_transition = document.querySelector(
                ".input_file_transition"
              );
              //выбираем div - кнопка для input type=file
              const input_file = document.querySelector(".input_file");

              // dispatchEvent для div - кнопка для input type=file
              input_file.addEventListener("click", () => {
                const click = new MouseEvent("click");
                input_file_transition.dispatchEvent(click);
              });

              // Обработчик change input type=file
              input_file_transition.addEventListener("change", () => {
                document.querySelector(".input_file_text").textContent =
                  input_file_transition.value;
              });
            }
          }
        });

        const form = document.querySelector(".main_contentPad_content_FORM");
        // обработчик кнопки Отправиьт
        document.querySelector(".submit").addEventListener("click", () => {
          console.log("SUBMIT");
          const submitBody = new FormData(form);

          (async () => {
            const request = fetch(`http://localhost:3000/api/addLesson`, {
              method: "POST",
              body: submitBody,
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Error occurred!");
                }
                return response.json();
              })
              .catch((err) => {
                console.log(err);
              });
            const result = await request;
            console.log(result);
            console.log(result.url);
            console.log(result.response);
            console.log(result.status);

          })();
        });

        // обработчик крестика Закрыть
        document
          .querySelector(".cancel_button")
          .addEventListener("click", () =>
            document.querySelector(".main_contentPad_content_FORM").remove()
          );
        // обработчик кнопки Отмена
        document
          .querySelector(".cancel")
          .addEventListener("click", () =>
            document.querySelector(".main_contentPad_content_FORM").remove()
          );
      } else {
        // если форма открыта, то при нажатии кнопки "Добавить урок" - она удалиится
        document.querySelector(".main_contentPad_content_FORM").remove();
      }
    });
  }
}
