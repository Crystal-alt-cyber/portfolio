import { createContext, useContext } from "react";

export const LANGS = [
  { id: "en", label: "EN", name: "English" },
  { id: "uz", label: "UZ", name: "O'zbekcha" },
  { id: "ru", label: "RU", name: "Русский" },
];

export const LangContext = createContext({ lang: "en" });

const ui = {
  en: {
    home: "Home", about: "About", resume: "Resume", projects: "Projects", blog: "Blog", contact: "Contact",
    light: "Light mode", dark: "Night mode", hi: "Hi, I'm", build: "I build things for the web.",
    viewProjects: "View projects", contactMe: "Contact me", skills: "Skills",
    aboutTitle: "About me", resumeTitle: "Resume", print: "Print / save as PDF", experience: "Experience", education: "Education",
    projectsLead: "A few things I've built while learning.", viewProject: "View project",
    all: "All", Web: "Web", Design: "Design",
    contactLead: "Have a project or a question? Write to me.", yourName: "Your name", message: "Message", send: "Send message", notAdded: "Not added yet",
    menu: "Menu",
  },
  uz: {
    home: "Bosh sahifa", about: "Men haqimda", resume: "Rezyume", projects: "Loyihalar", blog: "Blog", contact: "Aloqa",
    light: "Kunduzgi rejim", dark: "Tungi rejim", hi: "Salom, men", build: "Veb uchun yechimlar yarataman.",
    viewProjects: "Loyihalarni ko'rish", contactMe: "Bog'lanish", skills: "Ko'nikmalar",
    aboutTitle: "Men haqimda", resumeTitle: "Rezyume", print: "Chop etish / PDF saqlash", experience: "Tajriba", education: "Ta'lim",
    projectsLead: "O'rganish jarayonida yaratgan ishlarim.", viewProject: "Loyihani ko'rish",
    all: "Barchasi", Web: "Veb", Design: "Dizayn",
    contactLead: "Loyiha yoki savolingiz bormi? Menga yozing.", yourName: "Ismingiz", message: "Xabar", send: "Xabar yuborish", notAdded: "Hali qo'shilmagan",
    menu: "Menyu",
  },
  ru: {
    home: "Главная", about: "Обо мне", resume: "Резюме", projects: "Проекты", blog: "Блог", contact: "Контакты",
    light: "Дневной режим", dark: "Ночной режим", hi: "Привет, я", build: "Создаю сайты и веб-интерфейсы.",
    viewProjects: "Смотреть проекты", contactMe: "Связаться", skills: "Навыки",
    aboutTitle: "Обо мне", resumeTitle: "Резюме", print: "Печать / сохранить в PDF", experience: "Опыт", education: "Образование",
    projectsLead: "Несколько работ, созданных во время обучения.", viewProject: "Открыть проект",
    all: "Все", Web: "Веб", Design: "Дизайн",
    contactLead: "Есть проект или вопрос? Напишите мне.", yourName: "Ваше имя", message: "Сообщение", send: "Отправить", notAdded: "Пока не добавлено",
    menu: "Меню",
  },
};

export function useLang() {
  const { lang } = useContext(LangContext);
  return { lang, t: (k) => ui[lang][k] ?? ui.en[k] ?? k, pick: (o) => o[lang] ?? o.en };
}
