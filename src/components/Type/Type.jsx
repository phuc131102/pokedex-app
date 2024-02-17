import Grass from "../../assets/type/Grass.png";
import Fire from "../../assets/type/Fire.png";
import Water from "../../assets/type/Water.png";
import Normal from "../../assets/type/Normal.png";
import Electric from "../../assets/type/Electric.png";
import Fairy from "../../assets/type/Fairy.png";

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
    default:
      return null;
  }
};

export default getImageSource;
