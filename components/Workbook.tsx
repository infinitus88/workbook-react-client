import React, { useEffect } from "react";
import TextArea from "./layout/TextArea";
import CanvasDraw from "react-canvas-draw";
import SimpleDrawCanvas from "./layout/SimpleDrawCanvas";


export const Workbook = () => {

  useEffect(() => {
    document.title = 'ТЕХНИЧЕСКАЯ МЕХАНИКА';
  });

  return(
    <div id="title" className="p-10 md:max-w-3xl mx-auto">
    <h2 className="text-6xl text-center pt-8 pb-10">РАБОЧАЯ ТЕТРАДЬ</h2>
    <h3 className="text-3xl text-center pb-3"><b>по дисциплине: &quot;ТЕХНИЧЕСКАЯ МЕХАНИКА&ldquo;</b></h3>
    <p className="text-2xl text-center pb-10">
      (разделы «Теоретическая механика» 
        «Сопротивление  материалов»)
    </p>
    <span className="pb-3 text-xl"><b>Уважаемые студенты!</b></span>
    <p className="my-5 text-xl text-justify leading-loose indent-8">
      &nbsp;Вы держите в руках рабочую тетрадь , которая представляет собой учебное пособие для Вашей индивидуальной самостоятельной работы по освоению дисциплины «Техническая механика».
      Работа с ней является обязательным видом учебной деятельности студентов колледжа.
      Рабочая тетрадь – это учебное пособие, которое включает задания для самостоятельной работы, список рекомендуемой литературы. 
    </p>
    <p className="my-5 text-xl text-justify leading-loose indent-8">
      Начинать работу с тетрадью необходимо с обязательного  изучения материалов лекций и соответствующих разделов рекомендуемой литературы. 
    </p>
    <p className="my-5 text-xl text-justify leading-loose indent-8">
      Рабочие тетради все чаще и чаще используются в процессе преподавания (и, соответственно, изучения) самых разных дисциплин. Данное учебное пособие предназначено для студентов 2 курса системы СПО, специальности «Техническое обслуживание и ремонт автомобильного транспорта», изучающих дисциплину «Техническая механика»
    </p>
    <p className="my-5 text-xl text-justify leading-loose indent-12">
      - Перый тип
    </p>
    <p className="my-5 text-xl text-justify leading-loose indent-12">
      - Второй тип
    </p>
    
    <p className="my-5 text-xl text-justify leading-loose indent-8"> 
      Материал в пособии представлен в порядке изучения тем на занятиях.  
      Задания в рабочей тетради приведены в виде теоретических вопросов и расчетно-графических работ. После изучения темы на  уроке студенты должны сначала ответить на предлагаемые теоретические вопросы, а затем решить ряд задач. Некоторые задания даны по вариантам, что должно исключить возможность списывания. 
      Все задания в рабочей тетради  даны в очень доступной форме, сложность вопросов соответствует подготовке студентов данной  специальности.  
      Предлагаемая рабочая тетрадь поможет развить у студентов техническое мышление, поможет закрепить  изучаемый на уроках  материал, применить полученные знания при решении расчетно-графических работ, лучше подготовиться к экзаменам по «Технической механике». 
    </p>
    <p className="my-5 text-xl text-justify leading-loose indent-8 pb-10"> 
      Рабочая тетрадь способствует организации самостоятельной работы студентов, проведению контроля знаний преподавателем и самоконтролю.
    </p>
    <br id="readme"></br>
    <p className="pb-3 text-xl text-justify text-center"><b>Пояснительная записка</b></p>
    <p className="pb-3 text-xl text-justify indent-8">Данное учебное пособие предназначено для студентов системы среднего специального образования, изучающих  дисциплину «Техническая механика».</p>
    <p className="pb-3 text-xl text-justify indent-8">Рабочая тетрадь полностью соответствует рабочей программе дисциплины «Техническая механика» для специальности «Техническое обслуживание и ремонт автомобильного транспорта».  </p>
    <p className="pb-3 text-xl text-justify indent-8">В рабочей тетради представлены задания, которые позволяют наиболее полно проработать и повторить ту или иную тему. Материал в пособии приведен в порядке изучения тем на уроках.</p>
    <p className="pb-3 text-xl text-justify indent-8">Задания, представленные в рабочей тетради, имеют вид теоретических вопросов или расчетно-графических работ, то есть сначала формулируются основные понятия, а затем предлагаются задачи для решения. Многие расчетно-графические задания  для решения студентами представлены по 10 вариантам.</p>
    <p className="pb-3 text-xl text-justify indent-8">Данная рабочая тетрадь помогает развивать техническое мышление студентов, помогает закрепить изучаемый на уроках материал, применять полученные знания при  проведении расчетов и решении расчетнографических задач. </p>
    <p className="pb-3 text-xl text-justify indent-8">В результате освоения дисциплины  «Техническая механика» согласно обучающийся должен уметь: </p>
    <p className="pb-3 text-xl text-justify indent-12">⦁	Производить расчет на растяжение сжатие, на срез, смятие, кручение и  изгиб; </p>
    <p className="pb-3 text-xl text-justify indent-12">⦁ Выбирать детали и узлы на основе анализа их свойств для конкретного применения. </p>
    <p className="pb-3 text-xl text-justify indent-8">В результате освоения дисциплины обучающийся должен знать:</p>
    <p className="pb-3 text-xl text-justify indent-12">⦁	Основные понятия и аксиомы теоретической механики, законы равновесия  и перемещения тел;</p>
    <p className="pb-3 text-xl text-justify indent-12">⦁	Методики выполнения основных расчетов по теоретической механике,  сопротивлению материалов и деталям машин; </p>
    <p className="pb-3 text-xl text-justify indent-12">⦁	Основы проектирования деталей и сборочных единиц;</p>
    <p className="pb-3 text-xl text-justify indent-12">⦁	Основы конструирования</p>
    <p className="pb-3 text-xl text-justify indent-12">Рабочая тетрадь предназначена для организации самостоятельной работы студентов, проведения контроля их знаний преподавателем и самоконтроля. </p>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr className="border-black border-2"></hr>
    <br></br>
    <br></br>
    
    <br id="topic1_1"></br>
    <h3 className="text-3xl text-center pb-3"><b>ТЕОРЕТИЧЕСКАЯ  МЕХАНИКА</b></h3>
    <h3 className="text-xl text-center italic pb-3">Статика</h3>
    <h3 className="text-xl underline text-center pb-3"><b>Тема 1.1.  Основные  понятия и аксиомы статики</b></h3>
    <p className="text-xl">Дайте определения следующим основным понятиям: </p>
    <p className="pb-3 text-xl indent-12">1.	Сила -</p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">2.	Система сил -</p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">3.	Эквивалентная система -</p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">4.	Уравновешенная система сил - </p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">5.	1-я аксиома статики -</p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">6.	2-я аксиома статики -</p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">7.	3-я аксиома статики -</p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">8.	4-я аксиома статики -</p>
    <TextArea />
    <p className="pb-3 text-xl indent-12">9.	5-я аксиома статики</p>
    <TextArea />
    <p className="pb-3 text-xl indent-12">10.	Связями называется</p>
    <TextArea />
    <p className="pb-3 text-xl indent-12">11.	Реакции связей</p>
    <TextArea />
    <p className="pb-3 text-xl indent-12">12.	Приведите примеры и сделайте рис. к  понятию  «связь -  гладкая опора»</p>
    <SimpleDrawCanvas width={100} height={100} color='black' img_src={undefined} />
    <p className="pb-3 text-xl indent-12">13.	Приведите примеры и сделайте рис. к понятию «гибкая связь»</p>
    <SimpleDrawCanvas width={100} height={100} color='black' img_src={undefined} />
    <p className="pb-3 text-xl indent-12">14.	Приведите примеры и сделайте рис. к понятию   «связь – жесткий стержень»</p>
    <SimpleDrawCanvas width={100} height={100} color='black' img_src={undefined} />
    <p className="pb-3 text-xl indent-12">15. Приведите примеры и сделайте рис. к понятию «шарнирная опора»  (подвижный   шарнир и неподвижный шарнир). </p>
    <SimpleDrawCanvas width={100} height={100} color='black' img_src={undefined} />
    <p className="pb-3 text-xl indent-12">16.	Приведите примеры и сделайте рис. к понятию «связь - заделка» . </p>
    <SimpleDrawCanvas width={100} height={100} color='black' img_src={undefined} />
    <p className="pb-3 text-xl indent-12">17. Укажите направления реакций в опорах.</p>
    <SimpleDrawCanvas width={100} height={100} color='red' img_src={'https://i.imgur.com/KjYVFKB.png'}/>
     
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr className="border-black border-2"></hr>
    <br></br>
    <br></br>
    <br id="topic1_2"></br>

    <h3 className="text-xl underline text-center pb-3"><b>Тема 1.2.  Плоская система сходящихся сил 
    Определение равнодействующей геометрическим способом
    </b></h3>
    <p className="pb-3 text-xl indent-12">1. Плоская система сходящихся сил - </p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">2. Равнодействующую двух пересекающихся сил можно определить с помощью  -</p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">3. Найдите равнодействующую двух сил с помощью параллелограмма и треугольника  -</p> 
    <SimpleDrawCanvas width={100} height={100} color='red' img_src={'https://i.imgur.com/6mFWsyY.png'}/>
    <TextArea />
    <p className="pb-3 text-xl indent-12">4. Найдите равнодействующую плоской системы сходящихся сил геометрическим способом  - </p> 
    <SimpleDrawCanvas width={100} height={100} color='red' img_src={'https://i.imgur.com/TleaOqm.png'}/>
    <TextArea />
    <p className="pb-3 text-xl indent-12">5. Условие равновесия плоской системы сходящихся сил при геометрическом способе нахождения равнодействующей  -</p> 
    <TextArea />
    <p className="text-xl underline text-center pb-3"><b>Определение равнодействующей аналитическим способом </b></p>
    
    <p className="pb-3 text-xl indent-12">1. Величина проекции силы на ось  равна  -</p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">2. Определите величины и знаки проекций представленных на рисунке сил  ( в общем виде)   -</p> 
    <SimpleDrawCanvas width={100} height={100} color='red' img_src={'https://i.imgur.com/vJ3bnOv.jpeg'}/>
    <TextArea />
    <p className="pb-3 text-xl indent-12">3. Напишите формулу определения равнодействующей системы сил -</p>
    <TextArea />
    <p className="pb-3 text-xl indent-12">4. Условие равновесия плоской системы сходящихся сил в аналитической  форме</p>
    <TextArea />
    <p className="pb-3 text-xl indent-12">5. Определите величину и направление равнодействующей плоской системы сходящихся  сил аналитическим способом</p>
    <SimpleDrawCanvas width={100} height={100} color='red' img_src={'https://i.imgur.com/QbGUAso.jpeg'}/>
    <img src={"https://i.imgur.com/JhQ76VD.png"} />

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <hr className="border-black border-2"></hr>
    <br></br>
    <br></br>
    <br id="topic1_3"></br>

    <h3 className="text-xl underline text-center pb-3"><b>Тема 1.3. Пара сил и момент силы относительно точки</b></h3>
    <p className="pb-3 text-xl indent-12">1. Парой сил называется </p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">2. Момент пары сил  равен  </p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">3. Определите величины и знаки проекций представленных на рисунке сил  ( в общем виде)   -</p> 
    <SimpleDrawCanvas width={100} height={100} color='red' img_src={'https://i.imgur.com/Esc4hTg.jpeg'}/>
    <TextArea />
    <p className="pb-3 text-xl indent-12">3.	Момент равнодействующей пары равен</p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">4.	Напишите условие равновесия пар сил</p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">3. Дана система пар сил. Определите момент результирующей пары.</p> 
    <SimpleDrawCanvas width={100} height={100} color='red' img_src={'https://i.imgur.com/a5f0PSV.jpeg'}/>
    <img src={"https://i.imgur.com/otwxmtF.png"} />
    <TextArea />
    <p className="pb-3 text-xl indent-12">4. Момент силы относительно точки равен</p> 
    <TextArea />
    <p className="pb-3 text-xl indent-12">5. Определить сумму моментов сил относительно точки  А.</p> 
    <SimpleDrawCanvas width={100} height={100} color='red' img_src={'https://i.imgur.com/uR6Onaw.jpeg'}/>
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
    </div>

  );
};
