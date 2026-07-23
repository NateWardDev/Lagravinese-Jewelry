import { footerData } from "../data";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="sticky-container">
        <div className="sticky-area">
          {footerData.map((section) => (
            <div key={section.type} className={section.className}>
              {section.id === "navigation" && (
                <>
                  <h3>{section.heading}</h3>

                  <nav>
                    <ul>
                      {section.links.map((link) => (
                        <li key={link.linkName}>
                          <a href={link.linkPath}>{link.linkName}</a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </>
              )}

              {section.id === "newsletter" && (
                <>
                  <h3>{section.heading}</h3>

                  <form>
                    <input
                      type={section.input}
                      placeholder={section.placeholder}
                      // aria-label={section}
                      required
                    />

                    <button type="submit">{section.buttonText}</button>
                  </form>
                </>
              )}

              {section.id === "social" && (
                <div className="social-links">
                  <h3>{section.heading}</h3>

                  {/* <ul>
                    {section.links.map((social) => {
                      const Icon = social.icon;

                      return (
                        <li key={social.name}>
                          <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon />
                          </a>
                        </li>
                      );
                    })}
                  </ul> */}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
