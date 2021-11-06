import "./TaskPage.css";
import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Task2Img from "../imgs/task2_img.jpeg";
import Task4Img from "../imgs/task4_img.png";
import Task7_AImg from "../imgs/task7_a.png";
import Task7_BImg from "../imgs/task7_b.png";
import Task7_CImg from "../imgs/task7_c.png";
import Task7_1Img from "../imgs/task7_1.png";
import Task7_2Img from "../imgs/task7_2.png";
import Task7_3Img from "../imgs/task7_3.png";
import Task7_4Img from "../imgs/task7_4.png";
import Task7_5Img from "../imgs/task7_5.png";
import Task7_6Img from "../imgs/task7_6.png";
import Task7_7Img from "../imgs/task7_7.png";
import Task7_8Img from "../imgs/task7_8.png";
import Task7_9Img from "../imgs/task7_9.png";
import Task7_10Img from "../imgs/task7_10.png";
import Task7_11Img from "../imgs/task7_11.png";
import Task7_12Img from "../imgs/task7_12.png";
import Task7_13Img from "../imgs/task7_13.png";
import Task7_14Img from "../imgs/task7_14.png";
import Task7_15Img from "../imgs/task7_15.png";
import Task7_16Img from "../imgs/task7_16.png";
import Task7_17Img from "../imgs/task7_17.png";
import Task7_18Img from "../imgs/task7_18.png";
import Task7_19Img from "../imgs/task7_19.png";
import Task7_20Img from "../imgs/task7_20.png";
import Task7_21Img from "../imgs/task7_21.png";
import Task7_22Img from "../imgs/task7_22.png";

const tasks = [
  {
    id: "1",
    name: "На уважність",
    description: `<span>Дуже багато можна дізнатися про людину з відкритих джерел. Наприклад, Вам необхідно дізнатися номер мобільного телефону викладача кафедри, який займається довузівської роботою зі школярами та прийомом випускників технікумів на 1 курс кафедри. 
    <br><br>Підказка - це інформація з головної сторінки сайту кафедри за посиланням <a href="https://csn.khai.edu">https://csn.khai.edu</a>
    <br>Нижче необхідно ввести без пробілів останні 4 цифри номера телефону цього викладача.</span>`,
  },
  {
    id: "2",
    name: "Знання алгоритмів",
    description: `<span>Поставте у відповідність програми схемами алгоритмів:
    <br><br><div class="task2-img">
      <img src="${Task2Img}"/>
    </div>
    <br>
    <div class="task2-table-wrapper">
    <div class="task2-table">
        <pre class="task2-table-border"> A

 day = input("Сьогодні вихідний або робочий день?")
 mood = input("Як Ви себе почуваєте?")
 if mood == "добре":
   if day == "вихідний":
     print("Радий, що Ваші вихідні проходять добре.")
   elif day == "робочий":
     print("Відмінно, Вам подобається Ваша робота!")
 elif mood == "погано":
   if day == "вихідний":
     print("Веселіше, сьогодні ж вихідний!")
   elif day == "робочий":
     print("Нічого, скоро вихідний!")</pre>
     <div class="task2-table-wrapper task2-table-border">
     <div>Програма A відповідає алгоритму
     <br><br><input type="radio" id="1-1" name="task2-q1" value="1">
     <label for"1-1"> 1</label>
     <br><input type="radio" id="1-2" name="task2-q1" value="2">
     <label for"1-2"> 2</label>
     <br><input type="radio" id="1-3" name="task2-q1" value="3">
     <label for"1-3"> 3</label>
     </div>
     </div>
        <pre class="task2-table-border"> B

 mood = input("Як Ви себе почуваєте?")
 if mood == "добре":
   print("Чудово!")
 elif mood == "погано":
   print("Шкода")
 elif mood == "втомився":
   print("Вам необхідно відпочити")
 else:
   print("Ого! Правда?")
   </pre>
  <div class="task2-table-wrapper task2-table-border"> 
    <div>Програма B відповідає алгоритму
     <br><br><input type="radio" id="2-1" name="task2-q2" value="1">
     <label for"2-1"> 1</label>
     <br><input type="radio" id="2-2" name="task2-q2" value="2">
     <label for"2-2"> 2</label>
     <br><input type="radio" id="2-3" name="task2-q2" value="3">
     <label for"2-3"> 3</label>
     </div>
  </div>

        <pre> C
 mood = input("Як Ви себе почуваєте?")
 if mood == "добре":
   print("Чудово!")
 if mood == "погано":
   print("Шкода")
 if mood == "втомився":
   print("Вам необхідно відпочити")
          </pre>
          <div class="task2-table-wrapper">
          <div>Програма C відповідає алгоритму
     <br><br><input type="radio" id="3-1" name="task2-q3" value="1">
     <label for"3-1"> 1</label>
     <br><input type="radio" id="3-2" name="task2-q3" value="2">
     <label for"3-2"> 2</label>
     <br><input type="radio" id="3-3" name="task2-q3" value="3">
     <label for"3-3"> 3</label>
     </div>
     </div>
    </div>
    </div>
    </span>`,
  },
  {
    id: "3",
    name: "Пошук власника ресурсу",
    description: `<span>Дуже багато можна дізнатися про людину з відкритих джерел.
    Завдання на пошук інформації по відкритих джерелах - хто є власником Telegram-групи для Абітурієнтів кафедри комп'ютерних систем, мереж і кібербезпеки? 
    <br><br>Підказка - можна перейди до Telegram-групи за посиланням <a href="https://t.me/joinchat/Gtt37RdDV7byFPbQ8nf5eA">https://t.me/joinchat/Gtt37RdDV7byFPbQ8nf5eA</a>
    <br>Нижче необхідно ввести username власника групи.
    </span>`,
  },
  {
    id: "4",
    name: "Відновлення шифрованого тексту",
    description: `<span>
    Шифр Цезаря або шифр зсуву — симетричний моноалфавітний алгоритм шифрування,
     в якому кожна буква відкритого тексту заміняється на ту,
     що віддалена від неї в алфавіті на сталу кількість позицій. 
    Ключем є величина зсуву. Нижче наведено приклади алфавітів для ключів 1-5.
     Наприклад, якщо зашифрувати слово "кіт" з ключем, що дорівнює 1, отримаємо "йис".
     <br><br>
     <div class="task4-img">
     <img src="${Task4Img}"/>
   </div>
     <br><br>
     Злодій Джо під час листування з двома своїми компаньонами використовував шифр Цезаря.
    <br>Спецслужби знали, що вони планують зустріч, та змогли перехопити повідомлення, у якому містилась дата зустрічі. Також відомо, що ключем шифрування повідомлення є кількість учасників зустрічі. Необхідно допомогти спецслужбам та розшифрувати повідомлення.
    <br><br>Зашифрований текст повідомлення:
    <br><b>еропнжкгйлоч мгнхлал їшплал</b>
    <br><br>  
Нижче необхідно ввести дату зустрічі злодіїв у форматі ДД.ММ (дві цифри означають день, інші дві означають місяц, між ними крапка).
    </span>`,
  },
  {
    id: "5",
    name: "Пошук назви заходу",
    description: `<span>Як називався щорічний захід для школярів і випускників технікуму на кафедрі комп'ютерних систем, мереж і кібербезпеки, який відбувся 23.05.2020?
    <br><br>Підказка - інформація про цей захід була опублікована в інстраграмі кафедри 503 <a href="https://www.instagram.com/csn.khai.edu503">https://www.instagram.com/csn.khai.edu503</a>
    <br>Нижче необхідно ввести назву заходу (як на афіші).</span>`,
  },
  {
    id: "6",
    name: "Веб-розроблення",
    description: `<span>
      <div class="task6-task">
        <span class="task6-label">
            1. HTML - це ...
        </span>
        <div>
          <input type="radio" id="1-1" name="task6-q1" value="1">
          <label for="1-1">компільована, статично типізована мова
         програмування загального призначення</label>
         </div>
         <div>
          <input type="radio" id="1-2" name="task6-q1" value="2">
          <label for="1-2">стандартизована мова розмітки документів у Всесвітній павутині</label>
          </div>
          <div>
          <input type="radio" id="1-3" name="task6-q1" value="3">
          <label for="1-3">сильно типізована об'єктно-орієнтована мова програмування,
         розроблена компанією Sun Microsystems</label>
         </div>
      </div>

      <div class="task6-task">
        <span class="task6-label">
            2. Навіщо потрібні каскадні таблиці стилів?
        </span>
        <div>
          <input type="radio" id="2-1" name="task6-q2" value="1">
          <label for="2-1">для динамічного додавання елементів на сторінці
          </label>
         </div>
         <div>
          <input type="radio" id="2-2" name="task6-q2" value="2">
          <label for="2-2">для стилізації елементів на веб-сторінці
          </label>
          </div>
          <div>
          <input type="radio" id="2-3" name="task6-q2" value="3">
          <label for="2-3">для структуризації елементів на веб-сторінці
          </label>
         </div>
      </div>

      <div class="task6-task">
        <span class="task6-label">
            3. Адаптивний веб-дизайн - це ...
        </span>
        <div>
          <input type="radio" id="3-1" name="task6-q3" value="1">
          <label for="3-1">наявність у сайту анімації перед входом на нього
          </label>
         </div>
         <div>
          <input type="radio" id="3-2" name="task6-q3" value="2">
          <label for="3-2">властивість веб-сторінки коректно виглядати на пристроях з різним розміром екрану
          </label>
          </div>
          <div>
          <input type="radio" id="3-3" name="task6-q3" value="3">
          <label for="3-3">властивість веб-сайту швидко завантажуватися при повільному з'єднанні
          </label>
         </div>
      </div>

      <div class="task6-task">
        <span class="task6-label">
            4. Тег - це ...
        </span>
        <div>
          <input type="radio" id="4-1" name="task6-q4" value="1">
          <label for="4-1">елемент мови розмітки тексту
          </label>
         </div>
         <div>
          <input type="radio" id="4-2" name="task6-q4" value="2">
          <label for="4-2">посилання на файл всередині веб-проекту
          </label>
          </div>
          <div>
          <input type="radio" id="4-3" name="task6-q4" value="3">
          <label for="4-3">структурований список
          </label>
         </div>
      </div>

      <div class="task6-task">
        <span class="task6-label">
           5. JQuery - це ...
        </span>
        <div>
          <input type="radio" id="5-1" name="task6-q5" value="1">
          <label for="5-1">библіотека для JavaScript
          </label>
         </div>
         <div>
          <input type="radio" id="5-2" name="task6-q5" value="2">
          <label for="5-2">библіотека для PHP
          </label>
          </div>
          <div>
          <input type="radio" id="5-3" name="task6-q5" value="3">
          <label for="5-3">библіотека для MySQL
          </label>
         </div>
      </div>
    </span>`,
  },
  {
    id: "7",
    name: "Опис переміщення пишучого вузла міні плотера за заданим контуром",
    description: `<span>
    <span class="task7-top-text">
    Замкнутий контур на рис. 1а містить точки 0 .. 5 на координатній сітці.
     Точки з'єднуються відрізками (векторами) з напрямками переміщення 1 .. 8 (рис. 1б): 1(5) – переміщення по осі Y вгору (вниз),
      3(7) – переміщення по осі X вправо (вліво), 2(4,6,8) – одночасні переміщення по X і Y.
       Переміщення по X і Y на кожному кроці мають фіксовану величину, яка визначається особливостями міні плотера.</span>
          <br><br><div class="task7-top-imgs">
            <div>
              <span>а)</span>
              <img src="${Task7_AImg}"/>
            </div>
            <div>
              <span>б)</span>
              <img src="${Task7_BImg}"/>
            </div>
            <div>
              <span>в)</span>
              <img src="${Task7_CImg}"/>
            </div>
          </div>
          <br><span class="task7-middle-text">Рисунок 1. Вид контуру (а), напрямку переміщення (б)
           і опис переміщення (в)
          <br><br>Кожен з відрізків контуру позначається напрямком переміщення 1 .. 8.
           Послідовність переміщень по контуру, таким чином, описується рядком “01235760”
            при переміщенні за годинниковою стрілкою і рядком “02317650” - при переміщенні
             проти годинникової стрілки.
          <br><br>Для індивідуального варіанту, що збігається з днем Вашого народження
           (якщо день народження 23 і більше, відніміть 22), необхідно побудувати опис переміщення
            пишучого вузла за годинниковою стрілкою. </span>
            <br><br>
            <div class="task7-bottom-imgs">
            <div>
                <span>1)</span>
                <img src="${Task7_1Img}"/>
            </div>
                <div>
                <span>2)</span>
                <img src="${Task7_2Img}"/>
                </div>
                <div>
                <span>3)</span>
                <img src="${Task7_3Img}"/>
                </div>
                <div>
                <span>4)</span>
                <img src="${Task7_4Img}"/>
                </div>
                <div>
                <span>5)</span>
                <img src="${Task7_5Img}"/>
                </div>
                <div>
                <span>6)</span>
                <img src="${Task7_6Img}"/>
                </div>
                <div>
                <span>7)</span>
                <img src="${Task7_7Img}"/>
                </div>
                <div>
                <span>8)</span>
                <img src="${Task7_8Img}"/>
                </div>
                <div>
                <span>9)</span>
                <img src="${Task7_9Img}"/>
                </div>
                <div>
                <span>10)</span>
                <img src="${Task7_10Img}"/>
                </div>
                <div>
                <span>11)</span>
                <img src="${Task7_11Img}"/>
                </div>
                <div>
                <span>12)</span>
                <img src="${Task7_12Img}"/>
                </div>
                <div>
                <span>13)</span>
                <img src="${Task7_13Img}"/>
                </div>
                <div>
                <span>14)</span>
                <img src="${Task7_14Img}"/>
                </div>
                <div>
                <span>15)</span>
                <img src="${Task7_15Img}"/>
                </div>
                <div>
                <span>16)</span>
                <img src="${Task7_16Img}"/>
                </div>
                <div>
                <span>17)</span>
                <img src="${Task7_17Img}"/>
                </div>
                <div>
                <span>18)</span>
                <img src="${Task7_18Img}"/>
                </div>
                <div>
                <span>19)</span>
                <img src="${Task7_19Img}"/>
                </div>
                <div>
                <span>20)</span>
                <img src="${Task7_20Img}"/>
                </div>
                <div>
                <span>21)</span>
                <img src="${Task7_21Img}"/>
                </div>
                <div>
                <span>22)</span>
                <img src="${Task7_22Img}"/>
                </div>
            </div>
       </span>`,
  },
];
const TaskPage = (props) => {
  const [answer, setAnswer] = useState("");
  const [errorAnswer, setErrorAnswer] = useState(false);
  const [option, setOption] = useState("");
  const [errorOption, setErrorOption] = useState(false);

  const answerSubmit = () => {
    setErrorAnswer(false);

    if (!Boolean(answer)) {
      setErrorAnswer(true);
    }
    if (Boolean(answer)) {
      return props.history.push("/tasks");
    }
  };

  const optionSubmit = () => {
    setErrorOption(false);

    if (!Boolean(answer)) {
      setErrorOption(true);
    }
    if (Boolean(answer)) {
      return props.history.push("/tasks");
    }
  };

  const radioSubmit = () => {
    return props.history.push("/tasks");
  };

  const taskContext = useContext(TaskContext);
  return tasks.map((task, index) => {
    if (task.id === props.match.params.id) {
      return (
        <div>
          <div className="bg-task-page-image"></div>
          <div className="task-page" key={index}>
            <div className="task-name">{task.name}</div>
            <div
              className="task-description"
              dangerouslySetInnerHTML={{ __html: task.description }}
            />
            <div className="task-input ui input">
              {task.id === "7" ? (
                <div className="task7-inputs">
                  <span className="task7-input-labels">Номер варіанта</span>
                  <div className="task-input ui input">
                    <input
                      className={`task-input ui input ${
                        errorOption ? "error" : ""
                      }`}
                      placeholder="Введіть номер варіанта"
                      value={option}
                      onChange={(e) => setOption(e.target.value)}
                    ></input>
                  </div>
                  <span className="task7-input-labels">Ваше рішення</span>
                  <div className="task-input ui input">
                    <input
                      className={`task-input ui input ${
                        errorAnswer ? "error" : ""
                      }`}
                      placeholder="Введіть відповідь"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                    ></input>
                  </div>
                </div>
              ) : null}
              {task.id === "3" ? "@" : null}
              {task.id !== "2" && task.id !== "6" && task.id !== "7" ? (
                <input
                  className={`task-input ${errorAnswer ? "error" : ""}`}
                  placeholder="Введіть відповідь"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                ></input>
              ) : null}
            </div>
            <button
              className="task-next-button ui button primary"
              onClick={() => {
                if (task.id !== "2" && task.id !== "6") {
                  if (task.id === "7") {
                    optionSubmit();
                  }
                  answerSubmit();
                }
                if (task.id === "2" || task.id === "6") {
                  radioSubmit();
                }
                taskContext.updateState({ [`task${index + 1}`]: true });
              }}
            >
              Продовжити
            </button>
          </div>
        </div>
      );
    }
  });
};
export default TaskPage;
