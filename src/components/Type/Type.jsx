import Grass from "../../assets/type/Grass.png";
import Fire from "../../assets/type/Fire.png";
import Water from "../../assets/type/Water.png";
import Normal from "../../assets/type/Normal.png";
import Electric from "../../assets/type/Electric.png";
import Fairy from "../../assets/type/Fairy.png";
import Dragon from "../../assets/type/Dragon.png";
import Fighting from "../../assets/type/Fighting.png";

const getImageSource = (type) => {
  switch (type) {
    case "Grass":
      return Grass;
    case "Fire":
      return Fire;
    case "Water":
      return Water;
    case "Normal":
      return Normal;
    case "Electric":
      return Electric;
    case "Fairy":
      return Fairy;
    case "Dragon":
      return Dragon;
    case "Fighting":
      return Fighting;
    default:
      return null;
  }
};

export default getImageSource;
