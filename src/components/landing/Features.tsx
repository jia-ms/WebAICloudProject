const features = [
  {
    label: "Detection",
    title: "Find what the eye misses",
    body: "Object detection and segmentation models trained on your product line spot scratches, cracks, contamination, and missing components at line speed.",
  },
  {
    label: "Review",
    title: "Human judgment where it counts",
    body: "Low-confidence predictions route straight to a reviewer queue, so your team spends time on the calls that actually need a person.",
  },
  {
    label: "Tracking",
    title: "Defect trends, not just single frames",
    body: "See defect rate by product, batch, date, or production line, and get an alert the moment a rate crosses your threshold.",
  },
  {
    label: "Drift",
    title: "Know when the model needs attention",
    body: "Inspecta compares incoming images against your training distribution and flags drift before accuracy quietly degrades.",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <p className="section-eyebrow">Platform</p>
      <h2 className="section-title">Everything between the camera and the decision</h2>
      <div className="features__grid">
        {features.map((f) => (
          <div className="feature-panel" key={f.label}>
            <span className="feature-panel__label">{f.label}</span>
            <h3 className="feature-panel__title">{f.title}</h3>
            <p className="feature-panel__body">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
