import Icon from "./Icon.jsx";
import { profile } from "../data.js";
import { LANGS, useLang } from "../i18n.js";

const links = [
  ["home", "home"], ["about", "user"], ["resume", "file"], ["projects", "folder"],
  , ["blog", "pen"], ["contact", "mail"],
];

export default function Sidebar({ active, onNavigate, open, theme, toggleTheme, setLang }) {
  const { lang, t } = useLang();
  return (
    <aside className={"sidebar" + (open ? " open" : "")}>
      <img className="avatar" src={profile.photo} width="400" height="400" alt={profile.name} />
      <nav>
        {links.map(([id, icon]) => (
          <button key={id} className={active === id ? "active" : ""} onClick={() => onNavigate(id)}>
            <Icon name={icon} /><span>{t(id)}</span>
          </button>
        ))}
      </nav>
      <div className="bottom">
        <div className="langs" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button key={l.id} title={l.name} className={lang === l.id ? "on" : ""} onClick={() => setLang(l.id)}>{l.label}</button>
          ))}
        </div>
        <button className="theme" onClick={toggleTheme}>
          <Icon name={theme === "dark" ? "sun" : "moon"} />
          <span>{theme === "dark" ? t("light") : t("dark")}</span>
        </button>
      </div>
    </aside>
  );
}
