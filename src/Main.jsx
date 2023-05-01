const Main = ({page, data}) => {

    const exams = data.exams===undefined?[]:data.exams;
    const subjects = {
        'math': 'Математика профильная',
        'inf': 'Информатика и ИКТ (КЕГЭ)',
        'phys': 'Физика',
        'rus': 'Русский язык'
    };

    return page(

<div className="page">
<header>
    <div className="header_bar"></div>
    <div className="header_content">
        <div className="header_logo"></div>
        <div className="header_text">
            <div className="header_text-1">Официальный информационный портал</div>
            <div className="header_text-2">Единого государственного экзамена</div>	
        </div>
    </div>
</header>
    <div className="content">
        <div id="rcoi-msg"></div>
        <div className="account-block">
            <span id="username">Петров А.А.</span>
            <a style={{marginLeft:'5px'}} href="/conspects/math" onClick={page.location('/conspects/math')} id="logout">Выход</a>
        </div>
        <h3>Ваши результаты ЕГЭ</h3>
        
        <div className="mb-20">
            <a href="https://obrnadzor.gov.ru/gia/gia-11/raspisanie-gia-11/" onClick={page.window("https://obrnadzor.gov.ru/gia/gia-11/raspisanie-gia-11/")}>График публикации результатов экзаменов</a>
        </div>
        <div id="table-container" className="table-container">
            <table className="table mb-20">
                <thead>
                    <tr>
                        <th className="width-110">Дата экзамена</th>
                        <th>Предмет</th>
                        <th className="width-110">Тестовый балл</th>
                        <th>Статус экзамена</th>
                        <th className="width-110">Апелляция</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        exams.map((exam, i) =>
                            <tr className={i%2?"even":"odd"} key={i}>
                                <td>{exam.date}</td>
                                <td>{exam.status?<a onClick={page.window(exam.blanks)} href={exam.blanks}>{subjects[exam.subject]}</a>:subjects[exam.subject]}</td>
                                <td><span className="bold green">{exam.result}</span></td>
                                <td>{exam.status?"Оценённый результат":"Нет результата"}</td>
                                <td>нет</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        <p className="red">
            Внимание!
        </p>
        <p className="mb-15">
            В случае если:<br/>
            — напротив предмета установлен статус «Результат скрыт»<br/>
            — напротив предмета установлен статус «Экзамен обработан» и при этом значение тестового балла пустое <br/>
            Вам необходимо обратиться в РЦОИ Вашего региона для получения результатов.
        </p>
        <p className="red">
            Обращаем Ваше внимание, что результаты ЕГЭ могут быть изменены в&nbsp;связи с&nbsp;проведением процедур апелляции и/или&nbsp;перепроверок результатов на&nbsp;региональном и&nbsp;федеральном уровнях. Рекомендуем осуществлять периодические повторные проверки Ваших результатов ЕГЭ.
        </p>
    </div>
<footer>
    <div>
        Страница является копией страницы федеральной службы по надзору в сфере образования и науки
    </div>
    <div>
        При использовании материалов портала ЕГЭ на внешних Интернет-ресурсах ссылка на <a href="http://obrnadzor.gov.ru/" onClick={page.window("http://obrnadzor.gov.ru/")}>первоисточник</a> обязательна
    </div>
</footer>
</div>
)
};

export default Main;