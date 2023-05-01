const Exam = ({page, data}) => {
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
        <div className="account-block mb-10">
            <span id="username">Деревягин А.А.</span>
            <a href="https://checkege.rustest.ru/exams/7#" id="logout">Выход</a>
        </div>
        <div className="fl-right">
            <a href="https://checkege.rustest.ru/exams">Все экзамены</a>
        </div>
        <h3>Результаты экзамена</h3>	
			
        <p className="size-l mb-10" id="gek">
            Экзамен утвержден протоколом ГЭК:<br/>
            <a href="https://checkege.rustest.ru/exams/7" target="_blank">№<span id="gek-number">34</span> от <span id="gek-date">10.04.2023</span></a>
        </p>

        <h5><span id="exam-name">Математика профильная</span> <span id="exam-date">27.03.2023</span></h5>

        <div className="mb-10" id="marks">
            <p className="size-l" id="primary-mark-p">
                Ваш первичный балл: <span id="primary-mark">29</span>
            </p>
            <p className="size-l">
                <span className="c-test-mark-label">Ваш тестовый балл:</span><span className="c-test-mark-label hidden">Ваш результат:</span> <span id="test-mark"><span className="green bold">100</span></span>
            </p>
            <p className="size-l" id="threshold-p">
                Минимальный проходной (тестовый) балл: <span id="threshold">27</span>
            </p>
        </div>
        
        <div id="checkSumDiv" className="mb-10 hidden">
            <h5>Контрольная сумма</h5>
            <p className="size-l" id="checkSum"></p>
        </div>

        <div id="blanks" className="">
            <h5>Бланки ответов</h5>
            <p className="size-l mb-10">
            
        <a href="http://86.102.67.20:81/blanks/02/2023.03.27/E/A/EANQS2CTO6SVLRVMV7DQPRMAPQ.png" target="_blank">Бланк ответов №1.</a><br/>
    
        <a href="http://86.102.67.20:81/blanks/02/2023.03.27/A/K/AKUI42QA33TCHBBNTUQC6EWGD4.png" target="_blank">Бланк ответов №2. Страница 1.</a><br/>
    
        <a href="http://86.102.67.20:81/blanks/02/2023.03.27/Q/Z/QZCI42IGAYJDNJ2GLSUB4GTCXY.png" target="_blank">Бланк ответов №2. Страница 2.</a><br/>
    
        <a href="http://86.102.67.20:81/blanks/02/2023.03.27/G/7/G7RWSUMK4YYQ3YZPCZ3TR45UJM.png" target="_blank">Бланк ответов №2. Страница 3.</a><br/>
    
        <a href="http://86.102.67.20:81/blanks/02/2023.03.27/7/M/7MPYBVBIAEE7INVLRTMMB6IJXA.png" target="_blank">Бланк ответов №2. Страница 4.</a><br/>
    
        <a href="http://86.102.67.20:81/blanks/02/2023.03.27/N/C/NCIS4YYZ3JJP56NF7CGCIFPZXM.png" target="_blank">Бланк ответов №2. Страница 5.</a><br/>
    
        <a href="http://86.102.67.20:81/blanks/02/2023.03.27/5/R/5RRV6RJTO22Q3SHOIF4FXX4PEI.png" target="_blank">Бланк ответов №2. Страница 6.</a><br/>
    
        <a href="http://86.102.67.20:81/blanks/02/2023.03.27/S/4/S4ELDVVRHVP7RPGMMLWRZWPALM.png" target="_blank">Бланк ответов №2. Страница 7.</a><br/>
    
        <a href="http://86.102.67.20:81/blanks/02/2023.03.27/2/Q/2Q6F7M2EGBCIENIXCWSCTIASYI.png" target="_blank">Бланк ответов №2. Страница 8.</a><br/>
    
        <a href="http://86.102.67.20:81/blanks/02/2023.03.27/S/3/S34ENZ6CDH63N23UGBP223JGF4.png" target="_blank">Бланк ответов №2. Страница 9.</a><br/>
    </p>
        </div>

        <h5>Ответы на задания</h5>

        <div className="notice mb-15">
            Подробную информацию по критериям оценивания смотрите в спецификации КИМ на <a href="https://fipi.ru/ege/demoversii-specifikacii-kodifikatory" target="_blank">сайте ФИПИ</a>
        </div>
	
        <div id="table-container" className="table-container">
        <table className="table mb-15">
            <colgroup>
            <col className="width-60"/>
            <col/><col/>
            <col className="width-180"/>
            <col className="width-180"/>
            </colgroup>
            <thead>
                <tr>
                    <th colspan="5">Результаты выполнения заданий с кратким ответом</th>
                </tr>
                <tr className="sub-head">
                    <th>№</th>
                    <th>Ваш ответ</th>
                    <th>Допустимые символы</th>
                    <th>Ваш балл<span className="red">*</span></th>
                    <th>Максимальный балл<span className="red">*</span></th>
                </tr>
            </thead>
            <tbody>
                <tr className="odd">
                    <td>1</td>
                    <td className="align-left">24</td>
                    <td className="align-left">Цифры, минус, запятая</td>
                    <td className="bold">1</td>
                    <td className="bold">1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td className="align-left">63</td>
                    <td className="align-left">Цифры, минус, запятая</td>
                    <td className="bold">1</td>
                    <td className="bold">1</td>
                </tr>
                <tr className="odd">
                    <td>3</td>
                    <td className="align-left">0,75</td>
                    <td className="align-left">Цифры, минус, запятая</td>
                    <td className="bold">1</td>
                    <td className="bold">1</td>
                </tr>
                <tr className="odd">
                    <td>11</td>
                    <td className="align-left">-2</td>
                    <td className="align-left">Цифры, минус, запятая</td>
                    <td className="bold">1</td>
                    <td className="bold">1</td>
                </tr>
            </tbody>
            <tfoot>
                <tr></tr><td className="align-right" colspan="3">Итого</td>
                <td>11</td>
                <td>11</td>
            </tfoot>
        </table>
        <table className="table mb-20">
            <colgroup>
                <col className="width-60"/><col/>
                <col className="width-180"/>
                <col className="width-180"/>
            </colgroup>
            <thead>
                <tr>
                    <th colspan="4">Результаты выполнения заданий с развёрнутым ответом</th>
                </tr>
                <tr className="sub-head">
                    <th>№</th>
                    <th>Критерии<span className="red">**</span></th>
                    <th>Ваш балл<span className="red">*</span></th>
                    <th>Максимальный балл<span className="red">*</span></th>
                </tr>
            </thead>
            <tbody>
                <tr className="odd"><td>12</td><td className="align-left"></td><td><b>2</b></td><td><b>2</b></td></tr><tr><td>13</td><td className="align-left"></td><td><b>1</b></td><td><b>3</b></td></tr><tr className="odd"><td>14</td><td className="align-left"></td><td><b>2</b></td><td><b>2</b></td></tr><tr><td>15</td><td className="align-left"></td><td><b>2</b></td><td><b>2</b></td></tr><tr className="odd"><td>16</td><td className="align-left"></td><td><b>3</b></td><td><b>3</b></td></tr><tr><td>17</td><td className="align-left"></td><td><b>4</b></td><td><b>4</b></td></tr><tr className="odd"><td>18</td><td className="align-left"></td><td><b>4</b></td><td><b>4</b></td></tr></tbody><tfoot><tr></tr><td className="align-right" colspan="2">Итого</td><td>18</td><td>20</td></tfoot></table></div>

        <div className="table-subscript">
            <div id="notice-1" className="">
                <span className="red">*</span> Первичный балл
            </div>
            <div id="notice-2" className="">
                <span className="red">**</span> Критерии указываются, если задание оценивается по двум или более критериям	
            </div>
            <div id="notice-3" className="hidden">
                <span className="red">***</span> При получении 0 баллов по критерию «Решение коммуникативной задачи» всё задание оценивается в 0 баллов
            </div>
        </div>

        <p id="composition-notice" className="hidden">
            Для получения «зачета» необходимо получить «зачет» по критериям № 1 и № 2 (выставление «незачета» по одному из этих критериев автоматически ведет к «незачету» за работу в целом), а также дополнительно «зачет» хотя бы по одному из других критериев (№№3-5).
        </p>
    </div>
<footer>
    <div>
        © 2001-<span id="current-year">2023</span> Федеральная служба по надзору в сфере образования и науки
    </div>
    <div>
        При использовании материалов портала ЕГЭ на внешних Интернет-ресурсах ссылка на <a href="http://obr/nadzor.gov.ru/" target="_blank">первоисточник</a> обязательна
    </div>
</footer>
</div>
);
};

export default Exam;