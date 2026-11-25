import { useState } from "react";
import { gallery } from "../data.js";
import { useLang } from "../i18n.js";

export default function Portfolio() {
  const { t, pick } = useLang();
  const [cat, setCat] = useState("All");
  const shown = gallery.filter((g) => cat === "All" || g.cat === cat);
  return (
    <section className="page wide">
      <h1>{t("portfolio")}</h1>
      <div className="actions">
        {["All", "Web", "Design"].map((c) => (
          <button key={c} className={"btn" + (cat === c ? " primary" : "")} onClick={() => setCat(c)}>{t(c === "All" ? "all" : c)}</button>
        ))}
      </div>
      <div className="grid">
        {shown.map((g, n) => (
          <figure key={n} className="tile" style={{ background: `linear-gradient(135deg, ${g.c[0]}, ${g.c[1]})` }}>
            <figcaption><strong>{pick(g.title)}</strong><span>{t(g.cat)}</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
