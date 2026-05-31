// ДАННЫЕ ВИКТОРИНЫ (20 ВОПРОСОВ)

const questions = [
    // --- ВОПРОСЫ 1-20 ---
    {
        subject: "Алгебра (8 класс)",
        question: "Какая формула используется для нахождения корней квадратного уравнения ax² + bx + c = 0?",
        answers: [
            "Формула Виета",
            "Дискриминант: D = b² − 4ac, затем x = (−b ± √D) / 2a",
            "Формула сокращённого умножения (a + b)²",
            "Теорема Пифагора"
        ],
        correct: 1
    },
    {
        subject: "Геометрия (7 класс)",
        question: "Чему равна сумма внутренних углов любого треугольника?",
        answers: ["90°", "180°", "270°", "360°"],
        correct: 1
    },
    {
        subject: "Физика (8 класс)",
        question: "В каких единицах измеряется сила в международной системе СИ?",
        answers: ["Джоуль (Дж)", "Ватт (Вт)", "Ньютон (Н)", "Паскаль (Па)"],
        correct: 2
    },
    {
        subject: "Химия (8 класс)",
        question: "Какой химический элемент обозначается символом «O»?",
        answers: ["Золото (Aurum)", "Кислород (Oxygenium)", "Осмий", "Олово (Stannum)"],
        correct: 1
    },
    {
        subject: "Биология (9 класс)",
        question: "Какая органелла клетки отвечает за синтез белков?",
        answers: ["Митохондрия", "Рибосома", "Лизосома", "Аппарат Гольджи"],
        correct: 1
    },
    {
        subject: "История России (9 класс)",
        question: "В каком году произошла Октябрьская революция в России?",
        answers: ["1905", "1914", "1917", "1922"],
        correct: 2
    },
    {
        subject: "Литература (8 класс)",
        question: "Кто является автором романа «Преступление и наказание»?",
        answers: ["Лев Толстой", "Фёдор Достоевский", "Антон Чехов", "Иван Тургенев"],
        correct: 1
    },
    {
        subject: "География (7 класс)",
        question: "Какая река традиционно считается самой длинной в мире по школьной программе?",
        answers: ["Амазонка", "Нил", "Янцзы", "Миссисипи"],
        correct: 1
    },
    {
        subject: "Информатика (9 класс)",
        question: "Что такое алгоритм?",
        answers: [
            "Язык программирования высокого уровня",
            "Точная последовательность команд для решения задачи за конечное число шагов",
            "Устройство ввода информации",
            "Вид оперативной памяти"
        ],
        correct: 1
    },
    {
        subject: "Обществознание (10 класс)",
        question: "Что, согласно Конституции РФ, является высшей ценностью в России?",
        answers: [
            "Государственный суверенитет",
            "Экономическое развитие",
            "Человек, его права и свободы",
            "Территориальная целостность"
        ],
        correct: 2
    },
    {
        subject: "Алгебра (9 класс)",
        question: "Что такое арифметическая прогрессия?",
        answers: [
            "Последовательность, где каждый следующий член получается умножением на одно и то же число",
            "Последовательность, где каждый следующий член получается прибавлением одного и того же числа",
            "Случайная последовательность чисел",
            "Последовательность только чётных чисел"
        ],
        correct: 1
    },
    {
        subject: "Физика (9 класс)",
        question: "Какая формула выражает второй закон Ньютона?",
        answers: ["F = m · a", "E = m · c²", "P = F / S", "Q = I² · R · t"],
        correct: 0
    },
    {
        subject: "Химия (9 класс)",
        question: "Какой тип химической связи характерен для молекулы воды (H₂O)?",
        answers: ["Ионная связь", "Ковалентная полярная связь", "Металлическая связь", "Водородная связь (как основная)"],
        correct: 1
    },
    {
        subject: "Литература (9 класс)",
        question: "Кому принадлежат строки: «Я помню чудное мгновенье: Передо мной явилась ты...»?",
        answers: ["Михаил Лермонтов", "Александр Пушкин", "Сергей Есенин", "Владимир Маяковский"],
        correct: 1
    },
    {
        subject: "Информатика (10 класс)",
        question: "Что такое «переменная» в программировании?",
        answers: [
            "Команда для вывода текста на экран",
            "Именованная область памяти для хранения данных, которые могут изменяться",
            "Тип цикла для повторения действий",
            "Ошибка в коде программы"
        ],
        correct: 1
    },
    {
        subject: "Геометрия (10 класс)",
        question: "Чему равен объём куба с ребром 3 см?",
        answers: ["9 см³", "18 см³", "27 см³", "81 см³"],
        correct: 2
    },
    {
        subject: "История (10 класс)",
        question: "Какой документ был принят на съезде народных депутатов СССР в 1990 году и отменил 6-ю статью Конституции о руководящей роли КПСС?",
        answers: [
            "Беловежские соглашения",
            "Закон «О внесении изменений и дополнений в Конституцию СССР»",
            "Декларация о государственном суверенитете",
            "Новый союзный договор"
        ],
        correct: 1
    },
    {
        subject: "Биология (10 класс)",
        question: "Что такое фотосинтез?",
        answers: [
            "Процесс расщепления глюкозы для получения энергии",
            "Процесс синтеза органических веществ из неорганических с использованием света",
            "Процесс деления клетки",
            "Процесс транспорта веществ через мембрану"
        ],
        correct: 1
    },
    {
        subject: "География (8 класс)",
        question: "Какая природная зона России занимает наибольшую площадь?",
        answers: ["Тундра", "Тайга", "Степь", "Смешанные леса"],
        correct: 1
    },
    {
        subject: "Обществознание (10 класс)",
        question: "Что из перечисленного НЕ является признаком правового государства?",
        answers: [
            "Разделение властей",
            "Верховенство права",
            "Гарантии прав и свобод человека",
            "Однопартийная система"
        ],
        correct: 3
    }
];

// ПЕРЕМЕННЫЕ СОСТОЯНИЯ

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// ЭЛЕМЕНТЫ DOM

const progressEl = document.getElementById('progress');
const subjectEl = document.getElementById('q-subject');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('nextBtn');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const resultScoreEl = document.getElementById('result-score');
const resultTitleEl = document.getElementById('result-title');
const promoCodeEl = document.getElementById('promo-code');

// ФУНКЦИИ

/**
 * Загрузка текущего вопроса
 */
function loadQuestion() {
    answered = false;
    nextBtn.disabled = true;
    nextBtn.textContent = "Далее →";
    
    const q = questions[currentQuestionIndex];
    progressEl.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    subjectEl.textContent = q.subject;
    questionEl.textContent = q.question;
    answersEl.innerHTML = '';

    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index, btn);
        answersEl.appendChild(btn);
    });
}

/**
 * Проверка выбранного ответа
 */
function checkAnswer(selectedIndex, selectedBtn) {
    if (answered) return;
    answered = true;
    nextBtn.disabled = false;

    const q = questions[currentQuestionIndex];
    const buttons = answersEl.querySelectorAll('.answer-btn');

    if (selectedIndex === q.correct) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        buttons[q.correct].classList.add('correct');
    }

    buttons.forEach(btn => btn.disabled = true);
}

/**
 * Показ результатов викторины
 * Адаптировано под 20 вопросов
 */
function showResults() {
    quizScreen.style.display = 'none';
    resultScreen.classList.add('active');
    resultScoreEl.textContent = `Вы ответили верно на ${score} из ${questions.length}`;

    const percentage = (score / questions.length) * 100;

    if (percentage === 100) {
        resultTitleEl.textContent = "Идеально! 🎉";
        resultTitleEl.style.color = "#28a745";
        promoCodeEl.style.display = "block";
        promoCodeEl.innerHTML = `🎉 Поздравляем! Ваш промокод на скидку 50%: <br><span style="color: var(--title-red); font-size: 1.4rem;">SUPER-SALE-50</span>`;
    } else if (percentage >= 80) { // 16+ из 20
        resultTitleEl.textContent = "Отличный результат! 👍";
        resultTitleEl.style.color = "#5c8cd9";
        promoCodeEl.style.display = "block";
        promoCodeEl.innerHTML = `Отличная работа! Ваш промокод: <br><span style='color:#d9534f; font-size:1.4rem'>GOOD-JOB-20</span> (скидка 20%)`;
    } else {
        resultTitleEl.textContent = "Стоит повторить материал 📚";
        resultTitleEl.style.color = "#d9534f";
        promoCodeEl.style.display = "none";
    }
}

// ОБРАБОТЧИКИ СОБЫТИЙ

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
});

// ЗАПУСК ВИКТОРИНЫ

loadQuestion();