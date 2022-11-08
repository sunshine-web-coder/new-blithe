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
  return (
    <div className="partners">
      <div className="inPartners">
        {partners.map((item, i) => (
          <>
            <img
              src={item.img}
              alt=""
              key={i}
              className={`${item.amazon ? "amazonLogo" : ""}`}
            />
          </>
        ))}
        {/* <img src="https://iili.io/pi020N.md.png" alt="" /> */}
      </div>
    </div>
  );
};

export default Partners;
