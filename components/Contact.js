export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__glow" aria-hidden="true" />
      <div className="shell contact__inner">
        <p className="section-label"><span>04</span> Contact</p>
        <p className="contact__kicker">For school projects, collaboration, or opportunities</p>
        <a className="contact__title" href="mailto:hello@rushbryllelinsag.com">Get in touch<br /><i>with Rush.</i></a>
        <div className="contact__bottom">
          <a href="mailto:hello@rushbryllelinsag.com">hello@rushbryllelinsag.com</a>
          <div><a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">Behance</a></div>
          <a className="circle-arrow" href="#top" aria-label="Back to top">↑</a>
        </div>
      </div>
    </section>
  );
}
