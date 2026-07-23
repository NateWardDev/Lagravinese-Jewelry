import { homeContactData } from "../data";

const ProcessHome = () => {
  return (
    <section className="home-contact">
      <h2>{homeContactData.heading}</h2>

      <div className="content-wrapper">
        <div className="text-container">
          <ul>
            {homeContactData.process.map((step) => (
              <li key={step.id}>
                <h3>
                  {step.id}. {step.title}
                </h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ul>

          <a className="page-link" href={homeContactData.cta.path}>
            {homeContactData.cta.text}
          </a>
        </div>

        <div className="images-container">
          {homeContactData.images.map((image) => (
            <div key={image.id} className={`img-wrapper ${image.className}`}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessHome;
