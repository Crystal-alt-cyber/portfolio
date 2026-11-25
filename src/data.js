// Barcha ma'lumotlarni shu yerda o'zgartiring. Matnlar 3 tilda: en / uz / ru
export const profile = {
  name: "Shaxzoda",
  role: { en: "Front-end developer in training", uz: "Front-end dasturchi (o'rganmoqda)", ru: "Начинающий фронтенд-разработчик" },
  intro: {
    en: "I'm a university student and former English teacher learning to build clean, readable websites with HTML, CSS, Sass and React.",
    uz: "Men universitet talabasiman va sobiq ingliz tili o'qituvchisiman. HTML, CSS, Sass va React yordamida toza va tushunarli saytlar yaratishni o'rganyapman.",
    ru: "Студент университета и бывший преподаватель английского. Учусь создавать чистые и понятные сайты на HTML, CSS, Sass и React.",
  },
  about2: {
    en: "I am 20 years old and I am very interested in IT, especially in web-developing",
    uz: "Mening yoshim 20da va IT, asosan, web-dasturlashga juda qiziqaman",
    ru: "Мне 20 лет, и я очень интересуюсь IT, в основном веб-программированием.",
  },
  // Rasm: public/ papkasiga 400x400 rasm qo'ying va nomini shu yerga yozing (masalan "/me.jpg")
  photo: "/avatar.svg",
  email: "yoldoshevashaxzoda154@gmail.com",
  github: "https://github.com/",
  telegram: "@crystal_oo6",
  instagram: "@crystal_oo6", // o'z havolangizni shu yerga yozing
  facebook: "",  // o'z havolangizni shu yerga yozing
};

export const skills = [
  { name: "HTML", level: 90 }, { name: "CSS", level: 85 }, { name: "Sass", level: 60 },
  { name: "JavaScript", level: 65 }, { name: "React", level: 55 }, { name: "Git", level: 45 },
];

export const projects = [
  { title: { en: "Landing page", uz: "Landing sahifa", ru: "Лендинг" },
    text: { en: "A responsive one-page site built with semantic HTML and modern CSS.", uz: "Semantik HTML va zamonaviy CSS bilan yaratilgan moslashuvchan bir sahifali sayt.", ru: "Адаптивный одностраничный сайт на семантическом HTML и современном CSS." },
    tags: ["HTML", "CSS"], link: "https://stabucksdev.netlify.app/" },
  { title: { en: "Resume builder", uz: "Rezyume yaratuvchi", ru: "Конструктор резюме" },
    text: { en: "A simple page that turns form input into a printable resume.", uz: "Forma ma'lumotlarini chop etiladigan rezyumega aylantiradigan sahifa.", ru: "Страница, которая превращает данные формы в резюме для печати." },
    tags: ["React", "Sass"], link: "https://snickersproject.netlify.app/" },
  { title: { en: "Study planner", uz: "O'quv rejalashtiruvchi", ru: "Планировщик учёбы" },
    text: { en: "A small tool for tracking daily study tasks.", uz: "Kundalik o'quv vazifalarini kuzatish uchun kichik vosita.", ru: "Небольшой инструмент для отслеживания ежедневных учебных задач." },
    tags: ["JavaScript", "React"], link: "https://animated-tennis-ball.netlify.app/" },
];

// export const gallery = [
//   { title: { en: "Cafe website", uz: "Kafe sayti", ru: "Сайт кафе" }, cat: "Web", c: ["#1e90ff", "#7c4dff"] },
//   { title: { en: "Book club poster", uz: "Kitob klubi posteri", ru: "Постер книжного клуба" }, cat: "Design", c: ["#ff2ea6", "#7c4dff"] },
//   { title: { en: "Plant shop UI", uz: "Gul do'koni interfeysi", ru: "Интерфейс магазина растений" }, cat: "Web", c: ["#00c2ff", "#1e90ff"] },
//   { title: { en: "Brand palette", uz: "Brend ranglari", ru: "Палитра бренда" }, cat: "Design", c: ["#7c4dff", "#ff2ea6"] },
//   { title: { en: "Language school", uz: "Til maktabi", ru: "Языковая школа" }, cat: "Web", c: ["#0a2463", "#1e90ff"] },
//   { title: { en: "Photo gallery", uz: "Foto galereya", ru: "Фотогалерея" }, cat: "Web", c: ["#ff2ea6", "#00c2ff"] },
// ];

const addDates = { en: "23.09.2006", uz: "23.09.2006", ru: "23.09.2006" };
export const resume = {
  experience: [
    { title: { en: "Fron-tend developer", uz: "Fron-tend developer", ru: "Fron-tend developer" },
      place: { en: "Add school name", uz: "Maktab nomini qo'shing", ru: "Добавьте название школы" }, date: addDates,
      text: { en: "Make projects for web", uz: "Make projects for web", ru: "Make projects for web" } },
  ],
  education: [
    { title: { en: "University student", uz: "Universitet talabasi", ru: "Студент университета" },
      place: { en: "Uzbekistan", uz: "O'zbekiston", ru: "Узбекистан" }, date: { en: "In progress", uz: "Davom etmoqda", ru: "В процессе" },
      text: { en: "Studying at university while learning web development.", uz: "Universitetda o'qiyman va veb dasturlashni o'rganaman.", ru: "Учусь в университете и осваиваю веб-разработку." } },
    { title: { en: "Front-end self-study", uz: "Front-end mustaqil o'rganish", ru: "Самообучение фронтенду" },
      place: { en: "Online", uz: "Onlayn", ru: "Онлайн" }, date: { en: "Ongoing", uz: "Davom etmoqda", ru: "Продолжается" },
      text: { en: "HTML, CSS, Sass, JavaScript and React projects.", uz: "HTML, CSS, Sass, JavaScript va React loyihalari.", ru: "Проекты на HTML, CSS, Sass, JavaScript и React." } },
  ],
};

const addDate = { en: "Add date", uz: "Sanani qo'shing", ru: "Добавьте дату" };
export const posts = [
  { title: { en: "Why I started learning web development", uz: "Nega veb dasturlashni o'rgana boshladim", ru: "Почему я начал учить веб-разработку" }, date: addDate,
    text: { en: "From teaching English to writing code: what changed and what stayed the same.", uz: "Ingliz tili o'qituvchisidan kod yozishgacha: nima o'zgardi va nima o'zgarmadi.", ru: "От преподавания английского к написанию кода: что изменилось, а что осталось прежним." } },
  { title: { en: "CSS variables for light and dark mode", uz: "Kunduzgi va tungi rejim uchun CSS o'zgaruvchilari", ru: "CSS-переменные для светлой и тёмной темы" }, date: addDate,
    text: { en: "A small guide to switching themes with a single attribute.", uz: "Bitta atribut bilan mavzuni almashtirish bo'yicha qisqa qo'llanma.", ru: "Краткое руководство по переключению тем с помощью одного атрибута." } },
  { title: { en: "Sass nesting: when it helps", uz: "Sass nesting: qachon foydali", ru: "Вложенность в Sass: когда она полезна" }, date: addDate,
    text: { en: "Notes on keeping stylesheets short without making them hard to read.", uz: "Stillarni qisqa va o'qish oson saqlash bo'yicha eslatmalar.", ru: "Заметки о том, как делать стили короче и при этом читаемыми." } },
];
