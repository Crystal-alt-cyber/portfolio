import { posts } from "../data.js";
import { useLang } from "../i18n.js";

export default function Blog() {
  const { t, pick } = useLang();
  return (
    <section className="page">
      <h1>{t("blog")}</h1>
      <div className="stack">
        {posts.map((p, n) => (
          <article className="card" key={n}>
            <small>{pick(p.date)}</small>
            <h3>{pick(p.title)}</h3>
            <p>{pick(p.text)}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
