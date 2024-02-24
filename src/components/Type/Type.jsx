import Grass from "../../assets/type/Grass.png";
import Fire from "../../assets/type/Fire.png";
import Water from "../../assets/type/Water.png";
import Normal from "../../assets/type/Normal.png";
import Electric from "../../assets/type/Electric.png";
import Fairy from "../../assets/type/Fairy.png";
import Dragon from "../../assets/type/Dragon.png";
import Fighting from "../../assets/type/Fighting.png";
import Flying from "../../assets/type/Flying.png";
import Poison from "../../assets/type/Poison.png";
import Rock from "../../assets/type/Rock.png";
import Ground from "../../assets/type/Ground.png";

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
    case "Flying":
      return Flying;
    case "Poison":
      return Poison;
    case "Rock":
      return Rock;
    case "Ground":
      return Ground;
    default:
      return null;
  }
};

export default getImageSource;
