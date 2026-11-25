import { projects } from "../data.js";
import { useLang } from "../i18n.js";

export default function Projects() {
  const { t, pick } = useLang();
  return (
    <section className="page wide">
      <h1>{t("projects")}</h1>
      <p className="lead">{t("projectsLead")}</p>
      <div className="grid">
        {projects.map((p, n) => (
          <article className="card" key={n}>
            <h3>{pick(p.title)}</h3>
            <p>{pick(p.text)}</p>
            <ul className="chips small">{p.tags.map((x) => <li key={x}>{x}</li>)}</ul>
            <a href={p.link} target="_blank" rel="noreferrer">{t("viewProject")} →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
