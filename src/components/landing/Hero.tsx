import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <p className="hero__eyebrow">Visual inspection, automated</p>
        <h1 className="hero__title">
          Catch defects your line can't afford to miss.
        </h1>
        <p className="hero__subtitle">
          Inspecta runs computer-vision models against every unit on your
          line, flags anything uncertain for a human to check, and tracks
          defect rate by product, batch, and line — all from one dashboard.
        </p>
        <div className="hero__actions">
          <Link to="/signup" className="btn btn--primary btn--lg">
            Start free trial
          </Link>
          <a href="#how-it-works" className="btn btn--ghost btn--lg">
            See how it works
          </a>
        </div>
        <div className="hero__stats">
          <div>
            <span className="hero__stat-value">99.2%</span>
            <span className="hero__stat-label">detection recall</span>
          </div>
          <div>
            <span className="hero__stat-value">40ms</span>
            <span className="hero__stat-label">avg. inference time</span>
          </div>
          <div>
            <span className="hero__stat-value">6</span>
            <span className="hero__stat-label">defect classes tracked</span>
          </div>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="inspect-frame">
          <div className="inspect-frame__image" />
          <div className="inspect-frame__box inspect-frame__box--defect">
            <span className="inspect-frame__tag inspect-frame__tag--defect">
              scratch · 0.94
            </span>
          </div>
          <div className="inspect-frame__box inspect-frame__box--pass">
            <span className="inspect-frame__tag inspect-frame__tag--pass">
              pass · 0.99
            </span>
          </div>
          <div className="inspect-frame__readout">
            <span>batch #A1042</span>
            <span>frame 118 / 240</span>
            <span>2 flagged</span>
          </div>
        </div>
      </div>
    </section>
  );
}
