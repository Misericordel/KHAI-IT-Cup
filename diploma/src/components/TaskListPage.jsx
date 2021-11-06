import "./TaskListPage.css";
import Task from "./Task.jsx";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";

const tasks = [
  {
    number: "1",
    name: "На уважність",
    description: "Давайте перевіримо, наскільки Ви уважні.",
    link: "/task/1",
  },
  {
    number: "2",
    name: "Знання алгоритмів",
    description:
      "Визначте відповідність наведених алгоритмів і фрагментів коду.",
    link: "/task/2",
  },
  {
    number: "3",
    name: "Пошук власника ресурсу",
    description: "Визначте, хто є власником групи в Telegram.",
    link: "/task/3",
  },
  {
    number: "4",
    name: "Відновлення шифрованого тексту",
    description: "Відчуйте себе шпигуном.",
    link: "/task/4",
  },
  {
    number: "5",
    name: "Пошук назви заходу",
    description: "В Інтернеті можна знайти все.",
    link: "/task/5",
  },
  {
    number: "6",
    name: "Веб-розроблення",
    description: "Перевірте свої знання веб-технологій.",
    link: "/task/6",
  },
  {
    number: "7",
    name: "Числове управління плотером",
    description:
      "Створіть маршрут для плотера з числовим програмним управлінням.",
    link: "/task/7",
  },
];

const TaskListPage = () => {
  const taskContext = useContext(TaskContext);
  const [results, setResult] = useState({
    task1: false,
    task2: false,
    task3: false,
    task4: false,
    task5: false,
    task6: false,
    task7: false,
  });

  return (
    <div>
      <div className="bg-task-list-image"></div>
      <div className="task-list-page">
        <div>
          <div>
            {tasks.map((task, index) => (
              <Task
                key={index}
                number={task.number}
                name={task.name}
                description={task.description}
                link={task.link}
              ></Task>
            ))}

            <div className="task">
              <div className="task-name">Результати</div>
              <div className="result-wrapper">
                <div className="result-description">
                  {Object.keys(taskContext.state).map((key, index) => (
                    <div className="result-item" key={index}>
                      <span className="task-number">
                        Завдання №{index + 1} - &nbsp;
                        {taskContext.state[key] ? (
                          <div>
                            <i className="task-result-tick fas fa-check"></i>
                            &nbsp;
                            <span>Відповідь вже вказано</span>
                          </div>
                        ) : (
                          <div>
                            <i className="task-result-cross fas fa-times"></i>
                            &nbsp;
                            <span>Відповідь ще не вказано</span>
                          </div>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  onClick={taskContext.resetState}
                  to="/login"
                  className="result-button ui button primary "
                >
                  Завершити спробу
                </Link>
              </div>
            </div>
            <div className="task">
              <div className="task-name">Приєднуйся до нас!</div>
              <a
                href="https://www.facebook.com/csn.khai.edu503"
                className="socials ui facebook button"
              >
                <i className="facebook icon"></i>
                Facebook
              </a>
              <a
                href="https://twitter.com/CSN_KHAI_EDU503"
                className="socials ui twitter button"
              >
                <i className="twitter icon"></i>
                Twitter
              </a>

              <a
                href="https://www.instagram.com/csn.khai.edu503"
                className="socials ui google plus button"
              >
                <i className="instagram icon"></i>
                Instagram
              </a>
              <a
                href="https://t.me/csn_khai_edu"
                className="socials ui vk button"
              >
                <i className="telegram icon"></i>
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListPage;
