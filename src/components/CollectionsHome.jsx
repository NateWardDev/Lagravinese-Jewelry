import { collections } from "../data";

const CollectionsHome = () => {
  return (
    <>
      <section className="collections-mobile">
        <h2>{collections.header}</h2>

        <div className="cards-container content-wrapper">
          {collections.items.map((item) => (
            <div className="card" key={item.title}>
              <div className="img-wrapper">
                <img src={item.image} alt={item.alt} />
              </div>

              <div className="text-wrapper">
                <h3>{item.title}</h3>

                <a className="button-wrapper" href={item.link}>
                  <span>View</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="collections-desktop">
        <h2>{collections.header}</h2>

        <div className="cards-container carousel">
          {collections.items.map((item) => (
            <div className="card" key={item.title}>
              <div className="img-wrapper">
                <img src={item.image} alt={item.alt} />
              </div>

              <div className="text-wrapper">
                <h3>{item.title}</h3>

                <a className="button-wrapper" href={item.link}>
                  <span>View</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CollectionsHome;
