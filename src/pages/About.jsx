import { profile, skills } from "../data.js";
import { useLang } from "../i18n.js";

export default function About() {
  const { t, pick } = useLang();
  return (
    <section className="page">
      <h1>{t("aboutTitle")}</h1>
      <p className="lead">{pick(profile.intro)}</p>
      <p className="lead">{pick(profile.about2)}</p>
      <h2>{t("skills")}</h2>
      <div className="bars">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="bar-top"><span>{s.name}</span><span>{s.level}%</span></div>
            <div className="track"><div className="fill" style={{ width: s.level + "%" }} /></div>
          </div>
        ))}
      </div>
    </section>
  );
}
