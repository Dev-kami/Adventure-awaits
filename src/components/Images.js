import Img1 from "../Imgs/national_theatre.jpg";
import Img2 from "../Imgs/5-Aso-Rock-700x440.jpg";
import Img3 from "../Imgs/third-mainland.jpg";
import Img4 from "../Imgs/zuma-rock.jpg";
import Img5 from "../Imgs/link.jpg";

const Images = () => {
  return (
    <section>
      <div className="imageSection">
        <div className="row1">
          <div className="img1">
            <img src={Img1} alt="" />
            <div className="imgText">National Theatre</div>
          </div>
          <div className="img2">
            <img src={Img2} alt="" />
            <div className="imgText">Aso Rock</div>
          </div>
        </div>
        <div className="row2">
          <div className="img3">
            <img src={Img3} alt="" />
            <div className="imgText">Third Mainland Bridge</div>
          </div>
          <div className="img4">
            <img src={Img4} alt="" />
            <div className="imgText">Zuma Rock</div>
          </div>
          <div className="img5">
            <img src={Img5} alt="" />
            <div className="imgText">Link</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Images;
