import { useState } from "react";
import "./style.scss";
const partners = [
  {
    img: "https://iili.io/p4rJEP.md.png",
  },
  {
    img: "https://iili.io/p44cHg.md.png",
  },
  {
    img: "https://iili.io/p46ogt.md.png",
  },
  {
    img: "https://iili.io/p4Pu3P.md.png",
    amazon: "amazon",
  },
];
const Partners = () => {
//   const [data, setData] = useState(partners);
  return (
    <div className="partners">
      <div className="inPartners">
        {partners.map((item, i) => (
          <>
            <img src={item.img} alt="" key={i} className={`${item.amazon ? "amazonLogo" : ""}`} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Partners;
