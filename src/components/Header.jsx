import { useLocation } from "react-router";
import { headerData } from "../data";

const Header = () => {
  const pathname = useLocation().pathname;

  const headerItem = headerData.find((item) => item.path === pathname);
  if (!headerItem) return null; // if nothing is found render nothing

  console.log(headerItem);

  return (
    <header className={headerItem.name}>
      <div className="imgs-container">
        <div className="img-wrapper">
          <img src={headerItem.img1} alt="" />
        </div>
        <div className="img-wrapper">
          <img src={headerItem.img2} alt="" />
        </div>
      </div>
      <div className="text-wrapper">
        <h1>{headerItem.mainText}</h1>
        <h2>{headerItem.secondText}</h2>
      </div>
    </header>
  );
};

export default Header;
