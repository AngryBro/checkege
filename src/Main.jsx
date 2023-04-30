const Main = ({page}) => {



    return page(<div>

<div class="page">
<header>
    <div class="header_bar"></div>
    <div class="header_content">
        <div class="header_logo"></div>
        <div class="header_text">
            <div class="header_text-1">Официальный информационный портал</div>
            <div class="header_text-2">Единого государственного экзамена</div>	
        </div>
    </div>
</header>
    <div class="content">
        <div id="rcoi-msg"></div>
        <div class="account-block">
            <span id="username">Петров А.А.</span>
            <a href="" onClick={e => e.preventDefault()} id="logout">Выход</a>
        </div>
        <h3>Ваши результаты ЕГЭ</h3>
        
        <div class="mb-20">
            <a href="https://obrnadzor.gov.ru/gia/gia-11/raspisanie-gia-11/" target="_blank">График публикации результатов экзаменов</a>
        </div>
        <div id="table-container" class="table-container"><table class="table mb-20"><thead><tr><th class="width-110">Дата экзамена</th><th>Предмет</th><th class="width-110">Тестовый балл</th><th class="width-110">Минимальный балл</th><th>Статус экзамена</th><th class="width-110">Апелляция</th></tr></thead><tbody><tr class="odd"><td>27.03.2023</td><td><a href="https://checkege.rustest.ru/exams/7">Математика профильная</a></td><td><span class="bold green">100</span></td><td>27</td><td>Оценённый результат</td><td>нет</td></tr><tr><td>06.04.2023</td><td><a href="https://checkege.rustest.ru/exams/11">Информатика и ИКТ (КЕГЭ)</a></td><td><span class="bold green">98</span></td><td>40</td><td>Оценённый результат</td><td>нет</td></tr><tr class="odd"><td>29.06.2023</td><td>Физика</td><td></td><td></td><td>Нет результата</td><td></td></tr></tbody></table></div>
        <p class="red">
            Внимание!
        </p>
        <p class="mb-15">
            В случае если:<br/>
            — напротив предмета установлен статус «Результат скрыт»<br/>
            — напротив предмета установлен статус «Экзамен обработан» и при этом значение тестового балла пустое <br/>
            Вам необходимо обратиться в РЦОИ Вашего региона для получения результатов.
        </p>
        <p class="red">
            Обращаем Ваше внимание, что результаты ЕГЭ могут быть изменены в&nbsp;связи с&nbsp;проведением процедур апелляции и/или&nbsp;перепроверок результатов на&nbsp;региональном и&nbsp;федеральном уровнях. Рекомендуем осуществлять периодические повторные проверки Ваших результатов ЕГЭ.
        </p>
    </div>
<footer>
    <div>
        Страница является копией страницы федеральной службы по надзору в сфере образования и науки
    </div>
    <div>
        При использовании материалов портала ЕГЭ на внешних Интернет-ресурсах ссылка на <a href="http://obrnadzor.gov.ru/" target="_blank">первоисточник</a> обязательна
    </div>
</footer>
</div>


    </div>)
};

export default Main;