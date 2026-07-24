import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { collections } from "../data";

gsap.registerPlugin(ScrollTrigger);

const CollectionsHome = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      const scrollAmount = cards.scrollWidth - window.innerWidth;

      gsap.to(cards, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollAmount}`,
          pin: true,
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="collections-desktop" ref={sectionRef}>
        <h2>{collections.header}</h2>

        <div className="cards-container carousel" ref={cardsRef}>
          {collections.items.map((item) => (
            <div className="card" key={item.title}>
              <div className="img-wrapper">
                <img src={item.image} alt={item.alt} />
              </div>

              <div className="text-wrapper">
                <h3>{item.title}</h3>

                <a className="button-wrapper" href={item.link}>
                  <span>View</span>
                  <collections.icon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
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
                  <collections.icon />
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
