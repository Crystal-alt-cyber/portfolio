import { useEffect, useState } from "react";
import Fall from "./components/Fall.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { LangContext } from "./i18n.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

const pages = { home: Home, about: About, resume: Resume, projects: Projects, blog: Blog, contact: Contact };

function saved(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}

export default function App() {
  const [page, setPage] = useState("home");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => saved("theme", window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  const [lang, setLang] = useState(() => saved("lang", "en"));
  const Page = pages[page];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = lang;
    try { localStorage.setItem("theme", theme); localStorage.setItem("lang", lang); } catch {}
  }, [theme, lang]);

  const go = (id) => { setPage(id); setOpen(false); window.scrollTo(0, 0); };

  return (
    <LangContext.Provider value={{ lang }}>
      <div className="bg" aria-hidden="true"><i /><i /><i /></div>
      <Fall theme={theme} />
      <div className="layout">
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? "✕" : "☰"}</button>
        <Sidebar active={page} onNavigate={go} open={open} theme={theme} setLang={setLang}
          toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
        <main className="content"><Page key={page + lang} onNavigate={go} /></main>
      </div>
    </LangContext.Provider>
  );
}
