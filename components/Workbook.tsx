import React, { useEffect, useReducer, useState } from "react";
import TextArea from "./layout/TextArea";
import CanvasDraw from "react-canvas-draw";
import SimpleDrawCanvas from "./layout/SimpleDrawCanvas";
import { InstructionsModal } from "./InstructionsModal";
import { useRedux } from "../redux";
import { setShowGuide } from "../redux/user/userSlice";

export const Workbook = () => {
  // В данном случае useEffect будет вызываться при первом рендеринге страницы и содержит код для изменения title
  useEffect(() => {
    document.title = "ТЕХНИЧЕСКАЯ МЕХАНИКА";
  });

  const { dispatch, useSelector } = useRedux()

  const showGuide = useSelector((state) => state.user.showGuide);

  return (
    <div id="title" className="p-10 md:max-w-3xl mx-auto">
      {showGuide ? <InstructionsModal handleHideModal={() => dispatch(setShowGuide(false))} /> : null}
      <h2 className="text-6xl text-center pt-8 pb-10">РАБОЧАЯ ТЕТРАДЬ</h2>
      <h3 className="text-3xl text-center pb-3">
        <b>по дисциплине: &quot;ТЕХНИЧЕСКАЯ МЕХАНИКА&ldquo;</b>
      </h3>
      <p className="text-2xl text-center pb-10">
        (разделы «Теоретическая механика» «Сопротивление материалов»)
      </p>
      <span className="pb-3 text-xl">
        <b>Уважаемые студенты!</b>
      </span>
      <p className="my-5 text-xl text-justify leading-loose indent-8">
        &nbsp;Вы держите в руках рабочую тетрадь , которая представляет собой
        учебное пособие для Вашей индивидуальной самостоятельной работы по
        освоению дисциплины «Техническая механика». Работа с ней является
        обязательным видом учебной деятельности студентов колледжа. Рабочая
        тетрадь – это учебное пособие, которое включает задания для
        самостоятельной работы, список рекомендуемой литературы.
      </p>
      <p className="my-5 text-xl text-justify leading-loose indent-8">
        Начинать работу с тетрадью необходимо с обязательного изучения
        материалов лекций и соответствующих разделов рекомендуемой литературы.
      </p>
      <p className="my-5 text-xl text-justify leading-loose indent-8">
        Рабочие тетради все чаще и чаще используются в процессе преподавания (и,
        соответственно, изучения) самых разных дисциплин. Данное учебное пособие
        предназначено для студентов 2 курса системы СПО, специальности
        «Техническое обслуживание и ремонт автомобильного транспорта», изучающих
        дисциплину «Техническая механика»
      </p>
      <p className="my-5 text-xl text-justify leading-loose indent-12">
        - Перый тип
      </p>
      <p className="my-5 text-xl text-justify leading-loose indent-12">
        - Второй тип
      </p>
      <p className="my-5 text-xl text-justify leading-loose indent-8">
        Материал в пособии представлен в порядке изучения тем на занятиях.
        Задания в рабочей тетради приведены в виде теоретических вопросов и
        расчетно-графических работ. После изучения темы на уроке студенты должны
        сначала ответить на предлагаемые теоретические вопросы, а затем решить
        ряд задач. Некоторые задания даны по вариантам, что должно исключить
        возможность списывания. Все задания в рабочей тетради даны в очень
        доступной форме, сложность вопросов соответствует подготовке студентов
        данной специальности. Предлагаемая рабочая тетрадь поможет развить у
        студентов техническое мышление, поможет закрепить изучаемый на уроках
        материал, применить полученные знания при решении расчетно-графических
        работ, лучше подготовиться к экзаменам по «Технической механике».
      </p>
      <p className="my-5 text-xl text-justify leading-loose indent-8 pb-10">
        Рабочая тетрадь способствует организации самостоятельной работы
        студентов, проведению контроля знаний преподавателем и самоконтролю.
      </p>
      <br id="readme"></br>
      <p className="pb-3 text-xl text-center">
        <b>Пояснительная записка</b>
      </p>
      <p className="pb-3 text-xl text-justify indent-8">
        Данное учебное пособие предназначено для студентов системы среднего
        специального образования, изучающих дисциплину «Техническая механика».
      </p>
      <p className="pb-3 text-xl text-justify indent-8">
        Рабочая тетрадь полностью соответствует рабочей программе дисциплины
        «Техническая механика» для специальности «Техническое обслуживание и
        ремонт автомобильного транспорта».{" "}
      </p>
      <p className="pb-3 text-xl text-justify indent-8">
        В рабочей тетради представлены задания, которые позволяют наиболее полно
        проработать и повторить ту или иную тему. Материал в пособии приведен в
        порядке изучения тем на уроках.
      </p>
      <p className="pb-3 text-xl text-justify indent-8">
        Задания, представленные в рабочей тетради, имеют вид теоретических
        вопросов или расчетно-графических работ, то есть сначала формулируются
        основные понятия, а затем предлагаются задачи для решения. Многие
        расчетно-графические задания для решения студентами представлены по 10
        вариантам.
      </p>
      <p className="pb-3 text-xl text-justify indent-8">
        Данная рабочая тетрадь помогает развивать техническое мышление
        студентов, помогает закрепить изучаемый на уроках материал, применять
        полученные знания при проведении расчетов и решении расчетнографических
        задач.{" "}
      </p>
      <p className="pb-3 text-xl text-justify indent-8">
        В результате освоения дисциплины «Техническая механика» согласно
        обучающийся должен уметь:{" "}
      </p>
      <p className="pb-3 text-xl text-justify indent-12">
        ⦁ Производить расчет на растяжение сжатие, на срез, смятие, кручение и
        изгиб;{" "}
      </p>
      <p className="pb-3 text-xl text-justify indent-12">
        ⦁ Выбирать детали и узлы на основе анализа их свойств для конкретного
        применения.{" "}
      </p>
      <p className="pb-3 text-xl text-justify indent-8">
        В результате освоения дисциплины обучающийся должен знать:
      </p>
      <p className="pb-3 text-xl text-justify indent-12">
        ⦁ Основные понятия и аксиомы теоретической механики, законы равновесия и
        перемещения тел;
      </p>
      <p className="pb-3 text-xl text-justify indent-12">
        ⦁ Методики выполнения основных расчетов по теоретической механике,
        сопротивлению материалов и деталям машин;{" "}
      </p>
      <p className="pb-3 text-xl text-justify indent-12">
        ⦁ Основы проектирования деталей и сборочных единиц;
      </p>
      <p className="pb-3 text-xl text-justify indent-12">
        ⦁ Основы конструирования
      </p>
      <p className="pb-3 text-xl text-justify indent-12">
        Рабочая тетрадь предназначена для организации самостоятельной работы
        студентов, проведения контроля их знаний преподавателем и самоконтроля.{" "}
      </p>
      <hr className="border-black border-2"></hr>
      <br id="topic1_1"></br>
      <h3 className="text-3xl text-center pb-3">
        <b>ТЕОРЕТИЧЕСКАЯ МЕХАНИКА</b>
      </h3>
      <h3 className="text-xl text-center italic pb-3">Статика</h3>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.1. Основные понятия и аксиомы статики</b>
      </h3>
      <p className="text-xl">Дайте определения следующим основным понятиям: </p>
      <p className="pb-3 text-xl indent-12">1. Сила -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">2. Система сил -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">3. Эквивалентная система -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">4. Уравновешенная система сил - </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">5. 1-я аксиома статики -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">6. 2-я аксиома статики -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">7. 3-я аксиома статики -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">8. 4-я аксиома статики -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">9. 5-я аксиома статики</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">10. Связями называется</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">11. Реакции связей</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        12. Приведите примеры и сделайте рис. к понятию «связь - гладкая опора»
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="black"
        img_src={undefined}
      />
      <p className="pb-3 text-xl indent-12">
        13. Приведите примеры и сделайте рис. к понятию «гибкая связь»
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="black"
        img_src={undefined}
      />
      <p className="pb-3 text-xl indent-12">
        14. Приведите примеры и сделайте рис. к понятию «связь – жесткий
        стержень»
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="black"
        img_src={undefined}
      />
      <p className="pb-3 text-xl indent-12">
        15. Приведите примеры и сделайте рис. к понятию «шарнирная опора»
        (подвижный шарнир и неподвижный шарнир).{" "}
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="black"
        img_src={undefined}
      />
      <p className="pb-3 text-xl indent-12">
        16. Приведите примеры и сделайте рис. к понятию «связь - заделка» .{" "}
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="black"
        img_src={undefined}
      />
      <p className="pb-3 text-xl indent-12">
        17. Укажите направления реакций в опорах.
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/KjYVFKB.png"}
      />
      <hr className="border-black border-2"></hr>
      <br id="topic1_2"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>
          Тема 1.2. Плоская система сходящихся сил Определение равнодействующей
          геометрическим способом
        </b>
      </h3>
      <p className="pb-3 text-xl indent-12">
        1. Плоская система сходящихся сил -{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        2. Равнодействующую двух пересекающихся сил можно определить с помощью -
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Найдите равнодействующую двух сил с помощью параллелограмма и
        треугольника -
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/6mFWsyY.png"}
      />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Найдите равнодействующую плоской системы сходящихся сил
        геометрическим способом -{" "}
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/TleaOqm.png"}
      />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        5. Условие равновесия плоской системы сходящихся сил при геометрическом
        способе нахождения равнодействующей -
      </p>
      <TextArea />
      <p className="text-xl underline text-center pb-3">
        <b>Определение равнодействующей аналитическим способом </b>
      </p>
      <p className="pb-3 text-xl indent-12">
        1. Величина проекции силы на ось равна -
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        2. Определите величины и знаки проекций представленных на рисунке сил (
        в общем виде) -
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/vJ3bnOv.jpeg"}
      />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Напишите формулу определения равнодействующей системы сил -
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Условие равновесия плоской системы сходящихся сил в аналитической
        форме
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        5. Определите величину и направление равнодействующей плоской системы
        сходящихся сил аналитическим способом
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/QbGUAso.jpeg"}
      />
      <img src={"https://i.imgur.com/JhQ76VD.png"} />
      <hr className="border-black border-2"></hr>
      <br></br>
      <br></br>
      <br id="topic1_3"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.3. Пара сил и момент силы относительно точки</b>
      </h3>
      <p className="pb-3 text-xl indent-12">1. Парой сил называется </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">2. Момент пары сил равен </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Определите величины и знаки проекций представленных на рисунке сил (
        в общем виде) -
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/Esc4hTg.jpeg"}
      />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Момент равнодействующей пары равен
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Напишите условие равновесия пар сил
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Дана система пар сил. Определите момент результирующей пары.
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/a5f0PSV.jpeg"}
      />
      <img src={"https://i.imgur.com/otwxmtF.png"} />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Момент силы относительно точки равен
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        5. Определить сумму моментов сил относительно точки А.
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/uR6Onaw.jpeg"}
      />
      <img src={"https://i.imgur.com/2vi1Vw6.png"} />
      {/* <TextArea /> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br id="topic1_4"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.4 Плоская система произвольно расположенных сил </b>
      </h3>
      <p className="pb-3 text-xl indent-12">
        1. Сформулируйте теорему Пуансона о параллельном переносе сил
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        2. Плоская система произвольно расположенных сил приводится к одной силе
        – главному вектору и одной паре – главному моменту. Главный вектор равен
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">Главный момент равен</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Условие равновесия произвольной плоской системы сил
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Найти главный вектор и главный момент системы сил
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/1h2dngJ.jpg"}
      />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        5. Привести систему сил к точке В, определить главный вектор и главный
        момент системы сил. АВ = 4м, ВС = 1м, СD = 2м, F1 = 15 кН, F2 = 10 кН,
        F3 = 20 кН , F4 = 5 кН , m = 30 кН.м
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/J41EYQZ.jpg"}
      />
      <TextArea />
      <h3 className="text-xl underline text-center pb-3">
        <b>Балочные системы. Определение реакций опор и моментов защемления.</b>
      </h3>
      <p className="pb-3 text-xl indent-12">
        1. По способу приложения нагрузки делятся
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">Сделайте к п.1 рисунки</p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="black"
        img_src={undefined}
      />
      <p className="pb-3 text-xl indent-12">
        2. Напишите разновидности опор балочных систем и сделайте к ним рисунки
      </p>
      <TextArea />
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="black"
        img_src={undefined}
      />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Нанесите реакции в опорах балок
      </p>
      <TextArea />
      <SimpleDrawCanvas width={100} height={100} color="black" img_src={""} />

      <p className="pb-3 text-xl indent-12">
        4. Запишите систему уравнений равновесия для определения реакций в опоре
        защемленной балки
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        5. Запишите систему уравнений равновесия для определения реакций в
        опорах двух- опорной балки, закрепленной на двух шарнирах
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        6. Определите величины реакций в опоре защемленной балки. Провести
        проверку правильности решения.
      </p>
      <TextArea />
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/inqq4iX.png"}
      />
      <img src="https://i.imgur.com/Vlqocof.png" />
      <p className="pb-3 text-xl indent-12">
        7. Определите величины реакций для балки с шарнирными опорами. Провести
        проверку правильности решения.
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/cQiJWCU.png"}
      />
      <img src="https://i.imgur.com/Vlqocof.png" />
      <br id="topic1_5"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.5. Трение</b>
      </h3>
      <p className="pb-3 text-xl indent-12">1. Что называется трением -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">2. Назовите виды трения:</p>
      <img src="https://i.imgur.com/ZL4QRjk.png" />
      <TextArea />
      <p className="pb-3 text-xl indent-12">3. Трение скольжения </p>

      <p className="pb-3 text-xl indent-12">
        {" "}
        Сформулируйте законы Кулона (законы трения скольжения):{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. От чего зависит коэффициент трения f{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">5. Трение качения </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">Напишите условие качения колеса</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        6. Тело движется по наклонной плоскости. Масса тела 25 кг, коэффициент
        трения 0,2. Определите возникающую силу трения.
      </p>
      <img src="https://i.imgur.com/Zesoy3s.png" />
      <TextArea />
      <br id="topic1_6"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.6. Пространственная система сил</b>
      </h3>
      <h3 className="text-xl underline text-center pb-3">
        <b>Момент силы относительно оси</b>
      </h3>
      <p className="pb-3 text-xl indent-12">1. Момент силы относительно оси </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        2. Момент силы относительно оси считается положительным, если
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Момент силы относительно оси равен нулю, если
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. На тело в форме куба с ребром а = 10 м действуют силы. Определить
        моменты сил относительно осей координат, совпадающих с ребрами куба.
      </p>
      <img src="https://i.imgur.com/uVvCP9l.png" />
      <TextArea />
      <img src="https://i.imgur.com/wUzodaG.png" />
      <h3 className="text-xl underline text-center pb-3">
        <b>Пространственная система сходящихся сил </b>
      </h3>

      <p className="pb-3 text-xl indent-12">
        1. Пространственная система сходящихся сил – это система сил
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        2. Сделайте рисунок пространственной системы сходящихся сил
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="black"
        img_src={undefined}
      />
      <p className="pb-3 text-xl indent-12">
        3. Модуль равнодействующей системы сходящихся сил определяется по
        формуле
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Пространственная система сходящихся находится в равновесии, если
      </p>
      <TextArea />
      <h3 className="text-xl underline text-center pb-3">
        <b>Произвольная пространственная система сил</b>
      </h3>

      <p className="pb-3 text-xl indent-12">
        1. Произвольная пространственная система сил - это система сил
      </p>
      <TextArea />

      <p className="pb-3 text-xl indent-12">
        2. Сделайте рисунок к произвольной пространственной системе сил
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="black"
        img_src={undefined}
      />
      <p className="pb-3 text-xl indent-12">
        3. Произвольная пространственная система сил приводится к
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Чему равно абсолютное значение главного вектора
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        5. Чему равно абсолютное значение главного момента
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        6. Напишите условия равновесия пространственной системы произвольно
        расположенных сил
      </p>
      <TextArea />
      <br id="topic1_7"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.7. Центр тяжести</b>
      </h3>

      <p className="pb-3 text-xl indent-12">Сформулируйте: </p>
      <p className="pb-3 text-xl indent-12">1. Сила тяжести – это </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">2. Центр тяжести – это</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Напишите формулы определения центра тяжести тела, составленного из
        однородных тонких стержней{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Найдите центр тяжести тела, составленного из тонких однородных
        стержней.
      </p>
      <img src="https://i.imgur.com/Nh4NK11.png" />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        5. Напишите формулы определения центра однородного плоского тела{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        6. Напишите формулы определения координат центра тяжести следующих
        плоских фигур.
      </p>
      <img src="https://i.imgur.com/Vu4HNeu.png" />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        7. Определите центр тяжести заданного сечения.{" "}
      </p>
      <p className="pb-3 text-xl indent-12">
        B = 50 мм, b = 30 мм, H = 60 мм, R = 10 мм{" "}
      </p>
      <img src="https://i.imgur.com/MtOD9LZ.png" />
      <TextArea />
      <br id="topic1_8"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Кинематика</b>
      </h3>
      <br id="topic1_8"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.8. Основные понятия кинематики </b>
      </h3>
      <p className="pb-3 text-xl indent-12">
        1. Дайте определение траектории движения точки:{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">2. Что такое пройденный путь -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Напишите уравнение движения точки:{" "}
      </p>
      <p className="pb-3 text-xl indent-12">а) координатным способом задания</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        б) естественным способом задания{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Дайте определение скорости движения точки -
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        5. Средняя скорость определяется по формуле
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">6. Ускорение точки – это </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        7. Среднее значение ускорения определяется по формуле{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        8. Ускорение точки делится на две взаимно перпендикулярные составляющие:{" "}
      </p>
      <p className="pb-3 text-xl indent-12">а) </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">б)</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        9. Нормальное ускорение определяется по формуле{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        10. Тангенциальное ускорение определяется по формуле
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        11. Полное ускорении определяется по формуле
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        12. Дано уравнение движения точки S = 0,48t2 + 0,18t Определить
        начальную скорость и скорость точки в конце пятой минуты.
      </p>
      <TextArea />
      <br id="topic1_9"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.9. Кинематика точки </b>
      </h3>
      <p className="pb-3 text-xl indent-12">
        1. Равномерное движение - это движение с постоянной{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">υ =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">S =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        2. Начертите кинематические графики S=f(t), υ = f(t) для равномерного
        движения{" "}
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/iK4Bf6y.png"}
      />
      <p className="pb-3 text-xl indent-12">
        Для прямолинейного равномерного движения
      </p>
      <p className="pb-3 text-xl indent-12"> at = </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">an =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        Для криволинейного равномерного движения{" "}
      </p>
      <p className="pb-3 text-xl indent-12">at =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">an =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">Полное ускорение a = </p>
      <p className="pb-3 text-xl indent-12">
        3. Равнопеременное движение – это движение с постоянным{" "}
      </p>
      <p className="pb-3 text-xl indent-12">υ =</p>
      <p className="pb-3 text-xl indent-12">S =</p>
      <p className="pb-3 text-xl indent-12">
        4. Начертите кинематические графики S=f(t), υ = f(t), а = f(t) для
        равнопеременного движения{" "}
      </p>
      <SimpleDrawCanvas
        width={100}
        height={100}
        color="red"
        img_src={"https://i.imgur.com/iK4Bf6y.png"}
      />
      <img src="https://i.imgur.com/2cf6z7q.png" />

      <p className="pb-3 text-xl indent-12">
        Для прямолинейного равнопеременного движения
      </p>
      <p className="pb-3 text-xl indent-12">at =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">an =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">Полное ускорение a = </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        {" "}
        Для криволинейного равнопеременного движения{" "}
      </p>
      <p className="pb-3 text-xl indent-12">at =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">an =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">Полное ускорение a = </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">5. Неравномерное движение. </p>
      <p className="pb-3 text-xl indent-12">υ =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">S = </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        6. Точка движется по дуге согласно уравнению S = 0,3 t3 + 0,1t.
        Определить начальную скорость и полное ускорение через 3с движения. R =
        0,2 м.
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        7. По графику скоростей точки определить путь, пройденный за время
        движения{" "}
      </p>
      <img src="https://i.imgur.com/0LrBZ6i.png" />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        8. Автомобиль движется по круглому арочному мосту R = 100 м согласно
        уравнению S = 20 t . Определить полное ускорение автомобиля через 5 с.{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        9. Тело движется по дуге радиусом R = 60 м с постоянной скоростью 24
        м/с. Определить ускорение движения.{" "}
      </p>
      <TextArea />
      <br id="topic1_10"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.10. Простейшие движения твердого тела </b>
      </h3>
      <p className="pb-3 text-xl indent-12">Допишите фразы: </p>
      <p className="pb-3 text-xl indent-12">
        1. Поступательное движение твердого тела – это движение{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        2. Вращательное движение твердого тела – это движени
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        Угловыми параметрами вращательного движения являются:{" "}
      </p>
      <p className="pb-3 text-xl indent-12">φ - </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">[φ] =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">[ω] = </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">ε -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12"> [ε ] =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Напишите формулы определения: а) угловых параметров при равномерном
        вращательном движении
      </p>
      <p className="pb-3 text-xl indent-12">φ =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">ω =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12"> ε = </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        б) линейных параметров при равномерном вращательном движении{" "}
      </p>
      <p className="pb-3 text-xl indent-12">υ =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">аt =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">an = </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">aполное = </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        5. Закон вращательного движения φ = 0,56 t3 + t (φ – рад, t – с)
        Определить угловую скорость ω в момент времени t = 5 с{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        6. Маховое колесо вращается равномерно с частотой вращения n = 100
        об/мин. Радиус колеса R = 0,5 м.{" "}
      </p>
      <p className="pb-3 text-xl indent-12">
        Определить линейную скорость υ и полное ускорение а точек на ободе
        колеса.{" "}
      </p>
      <img src="https://i.imgur.com/bZLZx7C.png" />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        7. Напишите формулы определения: а) угловых параметров при
        равнопеременном вращательном движении
      </p>
      <p className="pb-3 text-xl indent-12">φ =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">ω =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">ε =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        б) линейных параметров при равнопеременном вращательном движении{" "}
      </p>
      <p className="pb-3 text-xl indent-12">υ =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">аt =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">an =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">a полное =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        8. Скорость ротора менялось согласно графику и за 100 оборотов достигла
        ω = 35 рад/с{" "}
      </p>
      <p className="pb-3 text-xl indent-12">
        Определить время разгона до указанной скорости.{" "}
      </p>
      <img src="https://i.imgur.com/qmIKA7E.png" />
      <TextArea />
      <br id="topic1_11"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b> Тема 1.11 Сложное движение</b>
      </h3>
      <h3 className="text-xl underline text-center pb-3">
        <b>Сложное движение точки</b>
      </h3>
      <p className="pb-3 text-xl indent-12">
        1. Какое движение называется сложным{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        2. Абсолютное движение – это движение относительно{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Относительное движение - это движение{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Переносное движение – это движение{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        5. Сформулируйте теорему сложения скоростей
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        6. Чему равен модуль абсолютной скорости, если задан угол между
        относительной и переменными скоростями{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        7. По течению реки равномерно плывет лодка, приводимая в движение
        гребным винтом от мотора. Скорость течения реки 4 км/ч, скорость лодки,
        сообщаемая ей гребным винтом по отношению к воде, составляет 8 км/ч.
        Определить скорость лодки относительно берегов и расстояние, которое
        проходит лодка вдоль берегов за 20 мин.{" "}
      </p>
      <TextArea />
      <h3 className="text-xl underline text-center pb-3">
        <b>Плоскопараллельное движение твердого тела </b>
      </h3>

      <p className="pb-3 text-xl indent-12">
        1. Какое движение называется плоскопараллельным{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        2. Приведите примеры плоскопараллельного движения
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. На какие два движения раскладывают плоскопараллельное движение
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Колесо автомобиля движется по дороге. Скорость центра колеса υо = 60
        м/c, угловая скорость точки В на ободе колеса ωв = 10 рад/с. Радиус
        колеса 0,3 м.{" "}
      </p>
      <p className="pb-3 text-xl indent-12">
        Определить скорость перемещения точки В относительно Земли.{" "}
      </p>
      <img src="https://i.imgur.com/cJ5W6rJ.png" />
      <TextArea />

      <p className="pb-3 text-xl indent-12">
        5. Что такое мгновенный центр скоростей{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">6. Определите положения МЦС</p>
      <img src="https://i.imgur.com/UEgTwT0.png" />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        7. Известна скорость одной точки тела υА = 10 м/c и угловая скорость
        вращения тела ω = 2 рад/с Определить положение МЦС и найти скорость
        точки В{" "}
      </p>
      <img src=" https://i.imgur.com/QBLMljQ.png" />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        8. Скорость точки А υА = 20 м/c и МЦС. Определить скорость точки В
      </p>
      <img src=" https://i.imgur.com/qFE4x1p.png" />
      <TextArea />
      <br id="topic1_12"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Динамика </b>
      </h3>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.12. Основные понятия и аксиомы динамики </b>
      </h3>
      <p className="pb-3 text-xl indent-12">
        1. Сформулируйте аксиомы динамики:{" "}
      </p>
      <p className="pb-3 text-xl indent-12">I аксиома динамики:</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">II аксиома динамики :</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">III аксиома динамики : </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">IV аксиома динамики : </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        2. Свободная материальная точка, масса которой 10 кг, движется
        прямолинейно согласно уравнению 0,5 t2 + 0,3 t. Определить действующую
        на нее силу.{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Свободная материальная точка весит 3 кг, на нее действует постоянная
        сила, равная 15 кН. Какое ускорение получает точка и какое расстояние
        она успела пройти за 10 с действия силы, считая, что движение
        прямолинейное
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. На материальную точку М действует система сил. Определить числовое
        значение ускорения, полученного материальной точкой m = 5 кг, если F1 =
        10 Н, F2 = 12 Н, F3 = 20 Н.{" "}
      </p>
      <img src="https://i.imgur.com/UUqAvsc.png" />
      <TextArea />
      <br id="topic1_13"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.13. Движение материальной точки</b>
      </h3>
      <p className="pb-3 text-xl indent-12">1.Дайте определение: </p>
      <p className="pb-3 text-xl indent-12">свободная точка -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">несвободная точка -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">2. Инертность -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">3. Сила инерции - </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. К каким телам приложена сила инерции, как направлена и по какой
        формуле рассчитывается{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        5. В чем заключается метод кинетостатики (принцип Даламбера
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        6. Тело массой 400 кг поднимается вверх по наклонной плоскости согласно
        уравнению S = 0,35 t2 . Коэффициент трения f = 0,15. Определить величину
        движущей силы F.{" "}
      </p>
      <img src="https://i.imgur.com/9N2QsRV.png" />
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        7. Груз массой 500 кг, подвешенный на тросе, опускается вертикально вниз
        с ускорением а = 3 м/с2{" "}
      </p>
      <p className="pb-3 text-xl indent-12">
        Найти натяжение троса, пренебрегая его собственной массой.{" "}
      </p>
      <img src="https://i.imgur.com/UFm6FZX.png" />
      <TextArea />
      <br id="topic1_14"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.14 Работа и мощность </b>
      </h3>

      <p className="pb-3 text-xl indent-12">1. Мерой чего является работа </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        2. Работа векторная или скалярная величина -{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Напишите единицы измерения работы -{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Какие силы называются движущими
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        5. Какие силы называются силами сопротивления
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        Работа постоянной силы на прямолинейном участке{" "}
      </p>
      <p className="pb-3 text-xl indent-12">
        Напишите формулы определения работы для следующих случаев, если
      </p>
      <p className="pb-3 text-xl indent-12">
        1. Сила совпадает с направлением перемещения{" "}
      </p>
      <img src="https://i.imgur.com/QAYr7yT.png" />
      <p className="pb-3 text-xl indent-12">W =</p>
      <TextArea />
      <img src="https://i.imgur.com/pbN4N9v.png" />
      <p className="pb-3 text-xl indent-12">W =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        2. Сила перпендикулярна направлению перемещения{" "}
      </p>
      <img src="https://i.imgur.com/V3WTTjo.png" />
      <p className="pb-3 text-xl indent-12"> W =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Сила направлена в противоположную сторону перемещения.{" "}
      </p>
      <img src="https://i.imgur.com/YRSpCmf.png" />
      <p className="pb-3 text-xl indent-12"> W =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        Работа постоянной силы на криволинейном участке{" "}
      </p>
      <img src="https://i.imgur.com/AvEj1Db.png" />

      <p className="pb-3 text-xl indent-12">W =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">Работа силы тяжести </p>
      <img src="https://i.imgur.com/HADSYYG.png" />
      <p className="pb-3 text-xl indent-12">W =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">Работа равнодействующей силы </p>
      <img src="https://i.imgur.com/H9U3Q4c.png" />
      <p className="pb-3 text-xl indent-12">W =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        Сформулируйте теорему о работе равнодействующей
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        4. Какую работу совершит сила F, если тело равномерно переместить на 20
        м вверх по наклонной плоскости. Трением пренебречь. Сила тяжести тела
        300 Н
      </p>
      <img src="https://i.imgur.com/865XDSy.png" />
      <TextArea />
      <p className="pb-3 text-xl indent-12">5. Дайте определении мощности -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">6. Единицы измерения мощности</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        7. Напишите формулу определения мощности
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        Напишите формулы определения мощности для следующих случаев:{" "}
      </p>
      <p className="pb-3 text-xl indent-12">
        Мощность при поступательном движении{" "}
      </p>
      <img src="https://i.imgur.com/Ngixaug.png" />
      <p className="pb-3 text-xl indent-12">Р =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        9. Мощность при вращательном движении
      </p>
      <img src="https://i.imgur.com/4j0qejq.png" />
      <p className="pb-3 text-xl indent-12">Р =</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        10. Чему равен коэффициент полезного действия (КПД) -{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        11. Определить потребную мощность мотора лебедки для подъема груза 20кг
        на высоту 100 м за 5 мин.{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        12. Определить общий КПД механизма, если мощность на выходном валу
        двигателя Р = 50 кВт при скорости 20 км/ч и общей силе сопротивления 6
        кН.{" "}
      </p>
      <TextArea />
      <br id="topic1_15"></br>
      <h3 className="text-xl underline text-center pb-3">
        <b>Тема 1.15. Общие теоремы динамики </b>
      </h3>
      <p className="pb-3 text-xl indent-12">1. Импульс силы это -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">2. Количество движения это - </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        3. Сформулируйте теорему об изменении количества движения
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">4. Потенциальная энергия это -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">5. Кинетическая энергия это -</p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        6. Сформулируйте закон изменения кинетической энергии{" "}
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        7. Напишите основное уравнение динамики вращающего тела
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        8. Момент инерции тела относительно оси вращения
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        9. Напишите формулы моментов инерции:{" "}
      </p>
      <p className="pb-3 text-xl indent-12">а) сплошного цилиндра </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">б) шара </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">в) тонкого стержня </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        10. Тело массой 25 кг поднято на высоту 5 м. Определите потенциальную
        энергию тела и работу, которое тело совершает при падении с этой высоты.
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">
        11. Тело массой m = 60 кг движется вниз по наклонной плоскости под
        действием силы тяжести с ускорением а = 6,2 м/с2 Определить запас
        кинетической энергии накопленной телом за 10 с, если начальная скорость
        = 0.
      </p>
      <img src="https://i.imgur.com/cKAHjZy.png" />
      <p className="pb-3 text-xl indent-12">
        12. Под действием вращающего момента М = 150 Нм колесо вращается
        равноускоренно из состояния покоя (ω = 0) За 10 с его скорость достигла
        160 об/мин Определите момент инерции колеса.
      </p>
      <TextArea />
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>
      <p className="pb-3 text-xl indent-12">ТЕЕЕЕЕЕЕЕЕЕКСТ</p>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
