import { FooterContactLinks, FooterIdentity, FooterNavigation } from "./footer-content";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="portfolio-wrap footer-inner">
        <div>
          <FooterIdentity />
          <FooterContactLinks />
        </div>
        <div>
          <FooterNavigation />
        </div>
      </div>
    </footer>
  );
}
