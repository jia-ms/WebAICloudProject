export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__logo">Inspecta</span>
        <p className="footer__copy">© {new Date().getFullYear()} Inspecta. Built for manufacturing quality teams.</p>
      </div>
    </footer>
  );
}
