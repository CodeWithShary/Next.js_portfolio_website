import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Muhammad Shaharyar. All Rights Reserved.</p>
        <ul className="footer-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About Us</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link href="/allskill">Skills</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
