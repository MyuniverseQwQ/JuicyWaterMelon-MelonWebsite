// === СЛОВАРЬ ПЕРЕВОДОВ ===
const translations = {
    en: {
        headerTitle: "How to Pick a Juicy Watermelon & melon?",
        headerSubtitle: "Following these rules, you will always leave the market with a juicy fruit.",
        wChooseTitle: "How to choose?",
        wChoose1: "<strong>Seasonality:</strong> The best watermelons ripen naturally from mid-July to September. Out of season, they are less sweet.",
        wChoose2: "<strong>Appearance:</strong> A ripe watermelon has a bright, contrasting pattern and glossy skin. The ground spot on the side should be rich yellow or orange, but not white.",
        wChoose3: "<strong>Sound and resonance:</strong> When tapped, a ripe fruit produces a booming sound (like a drum), and when squeezed, it crackles slightly. A dull sound means it's unripe, and a too-ringing sound means it's overripe.",
        wChoose4: "<strong>The tail:</strong> A green tail is a guarantee of freshness (picked recently). A dry one is also the norm. But a darkened or withered tail means the fruit is spoiling.",
        wChoose5: "<strong>Weight:</strong> The optimal weight is 6–10 kg. The watermelon should seem lighter than its visual volume.",
        wChoose6: "<strong>Water test:</strong> An unripe fruit will sink due to the high density of the flesh.",
        wStoreTitle: "How to store?",
        wStore1: "<strong>Whole watermelon:</strong> Stored in a cool, dry place (2–8 °C) away from other fruits and vegetables. Shelf life — 2–4 months.",
        wStore2: "<strong>Cut watermelon:</strong> Be sure to wash the fruit thoroughly before cutting! Stored in the refrigerator for no more than 2–3 days.",
        mChooseTitle: "How to choose?",
        mChoose1: "<strong>Aroma:</strong> A ripe melon smells very strong and sweet. A slight vanilla or honey aroma should be felt.",
        mChoose2: "<strong>Sound:</strong> Slap the melon with your palm. If the sound is dull, like a ripe pumpkin, it is ready to eat.",
        mChoose3: "<strong>Stem:</strong> A ripe melon should have a thick and slightly dried stem, but not dry to the point of brittleness.",
        mChoose4: "<strong>Netting:</strong> If the melon has a relief net, it should be rough and thick. Smooth melons are often tasteless.",
        mChoose5: "<strong>Elasticity:</strong> Slightly press on the crust on the opposite side from the stem. It should yield — this is a sure sign of ripeness.",
        mStoreTitle: "How to store?",
        mStore1: "<strong>Whole melon:</strong> A ripe melon keeps well in the refrigerator at 2–4 °C for about 5–7 days. Keep it away from strong-smelling foods.",
        mStore2: "<strong>Cut melon:</strong> Put it in the refrigerator in an airtight container. Shelf life — no more than 2–3 days.",
        footerTitle: "Resource Library",
        wSourcesTitle: "🍉 Sources about watermelons",
        wTab1Btn: "Rospotrebnadzor: Consumer Memo",
        wTab1Text: 'What to look for when choosing watermelons and melons. Official information from Rospotrebnadzor.<br><a href="https://22.rospotrebnadzor.ru/news/-/asset_publisher/L5nR/content/%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BA%D0%B0-%D0%BF%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8E%3A-%D0%BD%D0%B0-%D1%87%D1%82%D0%BE-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%B8%D1%82%D1%8C-%D0%B2%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%B8-%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%B5-%D0%B0%D1%80%D0%B1%D1%83%D0%B7%D0%BE%D0%B2-%D0%B8-%D0%B4%D1%8B%D0%BD%D1%8C" target="_blank">Go to website →</a>',
        wTab2Btn: "Roskontrol: How to choose a ripe watermelon without nitrates",
        wTab2Text: 'Roskontrol experts tell how to choose a sweet and safe watermelon.<br><a href="https://rskrf.ru/tips/pravila-pokupki/kak-vybrat-spelyy-arbuz-bez-nitratov/" target="_blank">Go to website →</a>',
        wTab3Btn: "Roskontrol: All about watermelons — to eat or not to eat?",
        wTab3Text: 'Special project about watermelons: can you eat seeds and what is the danger of nitrates.<br><a href="https://rskrf.ru/tips/spetsproekty/vsye-ob-arbuzakh-est-ili-ne-est/" target="_blank">Go to website →</a>',
        mSourcesTitle: "🍈 Sources about melons",
        mTab1Btn: "Rospotrebnadzor: How to choose a melon",
        mTab1Text: 'Recommendations from Rospotrebnadzor on choosing a quality and safe melon.<br><a href="https://www.rospotrebnadzor.ru/about/info/news/news_details.php?ELEMENT_ID=15076" target="_blank">Go to website →</a>'
    },
    ru: {
        headerTitle: "Как выбрать спелый арбуз и дыню?",
        headerSubtitle: "Следуя этим правилам, всегда уйдёшь с рынка с сочным плодом.",
        wChooseTitle: "Как выбирать?",
        wChoose1: "<strong>Сезонность:</strong> Лучшие арбузы созревают в естественных условиях с середины июля до сентября. Вне сезона они менее сладкие.",
        wChoose2: "<strong>Внешний вид:</strong> Спелый арбуз имеет яркий, контрастный рисунок и глянцевую кожуру. Земляное пятно на боку должно быть насыщенно желтым или оранжевым, но не белым.",
        wChoose3: "<strong>Звук и отдача:</strong> При постукивании спелый плод издает гулкий звук (как барабан), а при сжатии — слегка трещит. Глухой звук означает незрелость, а слишком звонкий — перезрелость.",
        wChoose4: "<strong>Хвостик:</strong> Зеленый хвостик — гарантия свежести (сорван недавно). Сухой — тоже норма. А вот потемневший или вялый хвостик говорит о том, что плод портится.",
        wChoose5: "<strong>Вес:</strong> Оптимальный вес — 6–10 кг. Арбуз должен казаться легче своего визуального объема.",
        wChoose6: "<strong>Проверка водой:</strong> Незрелый плод утонет из-за высокой плотности мякоти.",
        wStoreTitle: "Как хранить?",
        wStore1: "<strong>Целый арбуз:</strong> Хранится в прохладном сухом месте (2–8 °C) вдали от других овощей и фруктов. Срок хранения — 2–4 месяца.",
        wStore2: "<strong>Разрезанный арбуз:</strong> Обязательно тщательно вымойте плод перед нарезкой! В холодильнике хранится не более 2–3 дней.",
        mChooseTitle: "Как выбирать?",
        mChoose1: "<strong>Аромат:</strong> Спелая дыня пахнет очень сильно и сладко. Должен чувствоваться легкий ванильный или медовый аромат.",
        mChoose2: "<strong>Звук:</strong> Хлопните по дыне ладонью. Если звук глухой, как у спелой тыквы — она готова к употреблению.",
        mChoose3: "<strong>Плодоножка:</strong> У спелой дыни хвостик должен быть толстым и слегка подсохшим, но не сухим до ломкости.",
        mChoose4: "<strong>Сетка:</strong> Если на дыне есть рельефная сеточка, она должна быть грубой и густой. Гладкие дыни часто бывают безвкусными.",
        mChoose5: "<strong>Упругость:</strong> Слегка нажмите на корку с противоположной от хвостика стороны. Она должна поддаваться — это верный признак зрелости.",
        mStoreTitle: "Как хранить?",
        mStore1: "<strong>Целая дыня:</strong> Спелая дыня хорошо лежит в холодильнике при температуре 2–4 °C около 5–7 дней. Держите её подальше от сильно пахнущих продуктов.",
        mStore2: "<strong>Разрезанная дыня:</strong> Уберите в холодильник в герметичном контейнере. Срок хранения — не более 2–3 дней.",
        footerTitle: "Библиотека ресурсов",
        wSourcesTitle: "🍉 Источники об арбузах",
        wTab1Btn: "Роспотребнадзор: Памятка потребителю",
        wTab1Text: 'На что обратить внимание при выборе арбузов и дынь. Официальная информация от Роспотребнадзора.<br><a href="https://22.rospotrebnadzor.ru/news/-/asset_publisher/L5nR/content/%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D0%BA%D0%B0-%D0%BF%D0%BE%D1%82%D1%80%D0%B5%D0%B1%D0%B8%D1%82%D0%B5%D0%BB%D1%8E%3A-%D0%BD%D0%B0-%D1%87%D1%82%D0%BE-%D0%BE%D0%B1%D1%80%D0%B0%D1%82%D0%B8%D1%82%D1%8C-%D0%B2%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%B8-%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%B5-%D0%B0%D1%80%D0%B1%D1%83%D0%B7%D0%BE%D0%B2-%D0%B8-%D0%B4%D1%8B%D0%BD%D1%8C" target="_blank">Перейти на сайт →</a>',
        wTab2Btn: "Росконтроль: Как выбрать спелый арбуз без нитратов",
        wTab2Text: 'Эксперты Росконтроля рассказывают, как выбрать сладкий и безопасный арбуз.<br><a href="https://rskrf.ru/tips/pravila-pokupki/kak-vybrat-spelyy-arbuz-bez-nitratov/" target="_blank">Перейти на сайт →</a>',
        wTab3Btn: "Росконтроль: Всё об арбузах — есть или не есть?",
        wTab3Text: 'Спецпроект об арбузах: можно ли есть косточки и чем опасны нитраты.<br><a href="https://rskrf.ru/tips/spetsproekty/vsye-ob-arbuzakh-est-ili-ne-est/" target="_blank">Перейти на сайт →</a>',
        mSourcesTitle: "🍈 Источники о дынях",
        mTab1Btn: "Роспотребнадзор: Как выбрать дыню",
        mTab1Text: 'Рекомендации Роспотребнадзора по выбору качественной и безопасной дыни.<br><a href="https://www.rospotrebnadzor.ru/about/info/news/news_details.php?ELEMENT_ID=15076" target="_blank">Перейти на сайт →</a>'
    }
};

// === ЭЛЕМЕНТЫ ===
const langToggleBtn = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

// === ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА ===
function setLanguage(lang) {
    if (!translations[lang]) return;
    
    try { localStorage.setItem('lang', lang); } catch(e) {}
    
    // Меняем текст кнопки на текущий язык
    langToggleBtn.textContent = lang.toUpperCase();

    // Меняем язык на всей странице
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Пересчитываем высоту открытых вкладок, так как объем текста меняется
    document.querySelectorAll('.tab-content').forEach(content => {
        if (content.style.maxHeight) {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Надежная логика переключения: читаем текущий язык прямо с кнопки
langToggleBtn.addEventListener('click', () => {
    const currentLang = langToggleBtn.textContent.trim().toLowerCase();
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    setLanguage(newLang);
});

// === ЛОГИКА ПЕРЕКЛЮЧЕНИЯ ТЕМЫ ===
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch(e) {}
    
    if (theme === 'dark') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// === ЛОГИКА АККОРДЕОНА ВКЛАДОК ===
function toggleTab(button) {
    const content = button.nextElementSibling;
    const parentColumn = button.closest('.resource-column');
    
    const allContents = parentColumn.querySelectorAll('.tab-content');
    const allButtons = parentColumn.querySelectorAll('.tab-button');

    allContents.forEach((item) => {
        if (item !== content) {
            item.style.maxHeight = null;
        }
    });

    allButtons.forEach((item) => {
        if (item !== button) {
            item.classList.remove('active');
        }
    });

    button.classList.toggle('active');
    
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

// === ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ ===
let initLang = 'ru';
let initTheme = 'light';

try {
    initLang = localStorage.getItem('lang') || 'ru';
    initTheme = localStorage.getItem('theme') || 'light';
} catch(e) {}

setLanguage(initLang);
setTheme(initTheme);