import { resume } from "../data.js";
import { useLang } from "../i18n.js";

export default function Resume() {
  const { t, pick } = useLang();
  const block = (title, items) => (
    <div>
      <h2>{title}</h2>
      <div className="timeline">
        {items.map((i, n) => (
          <article key={n} className="card">
            <h3>{pick(i.title)}</h3>
            <small>{pick(i.place)} · {pick(i.date)}</small>
            <p>{pick(i.text)}</p>
          </article>
        ))}
      </div>
    </div>
  );
  return (
    <section className="page">
      <h1>{t("resumeTitle")}</h1>
      <button className="btn primary" onClick={() => window.print()}>{t("print")}</button>
      {block(t("experience"), resume.experience)}
      {block(t("education"), resume.education)}
    </section>
  );
}
