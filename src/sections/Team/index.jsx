import "./style.scss";
import img1 from "../../assets/teams/David-Friedmann.jpg";
import img2 from "../../assets/teams/Sami.jpg";

const Team = () => {
  return (
    <div className="Team">
      <div className="inTeam">
        <h2>Team</h2>

        <div className="TeamBox">
          <div className="coTeamBox">
            <div className="imgBox">
              <img src={img1} alt="" />
            </div>
            <p>David Friedmann. CEO/COO</p>
            <div className="buttonF">
                <a target="_blank" href="https://youtu.be/oCPBJwip8Aw">Doxx</a>
            </div>
          </div>
          <div className="coTeamBox">
            <div className="imgBox">
              <img src={img2} alt="" />
            </div>
            <p>Sami. CMO</p>
            <div className="buttonF">
                <a target="_blank" href="https://t.me/Sami_crypto">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
