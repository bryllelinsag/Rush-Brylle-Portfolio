export default function Marquee() {
  const words = ['Graphic Design', 'Photo Editing', 'Presentation Design', 'Web Development'];
  return (
    <section className="marquee" aria-label="Capabilities">
      <div className="marquee__track">
        {[...words, ...words].map((word, index) => <span key={`${word}-${index}`}>{word}<i>✦</i></span>)}
      </div>
    </section>
  );
}
