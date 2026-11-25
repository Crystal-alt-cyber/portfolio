import { profile, skills } from "../data.js";
import { useLang } from "../i18n.js";

export default function Home({ onNavigate }) {
  const { t, pick } = useLang();
  return (
    <section className="page">
      <p className="eyebrow">{pick(profile.role)}</p>
      <h1>{t("hi")} <span className="grad">{profile.name}</span>.<br />{t("build")}</h1>
      <p className="lead">{pick(profile.intro)}</p>
      <div className="actions">
        <button className="btn primary" onClick={() => onNavigate("projects")}>{t("viewProjects")}</button>
        <button className="btn" onClick={() => onNavigate("contact")}>{t("contactMe")}</button>
      </div>
      <h2>{t("skills")}</h2>
      <ul className="chips">{skills.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
    </section>
  );
}
