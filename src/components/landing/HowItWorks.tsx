const steps = [
  {
    n: "01",
    title: "Upload a batch",
    body: "Drop in images from the line, or connect a camera feed directly. Inspecta queues each batch for processing.",
  },
  {
    n: "02",
    title: "Model runs inspection",
    body: "Every image is scored for defects, with a bounding box or segmentation mask and a confidence score for each finding.",
  },
  {
    n: "03",
    title: "Review what's uncertain",
    body: "Anything below your confidence threshold goes to a reviewer. Corrections feed back into future model versions.",
  },
  {
    n: "04",
    title: "Track and report",
    body: "Defect rate, severity, and drift are tracked over time, with exportable CSV and PDF reports for your quality team.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <p className="section-eyebrow">How it works</p>
      <h2 className="section-title">From image to decision, in four steps</h2>
      <ol className="steps">
        {steps.map((s) => (
          <li className="steps__item" key={s.n}>
            <span className="steps__number">{s.n}</span>
            <div>
              <h3 className="steps__title">{s.title}</h3>
              <p className="steps__body">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
