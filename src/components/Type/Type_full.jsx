import Grass_full from "../../assets/type/Grass_v2.png";
import Fire_full from "../../assets/type/Fire_v2.png";
import Water_full from "../../assets/type/Water_v2.png";
import Normal_full from "../../assets/type/Normal_v2.png";
import Electric_full from "../../assets/type/Electric_v2.png";
import Fairy_full from "../../assets/type/Fairy_v2.png";
import Dragon_full from "../../assets/type/Dragon_v2.png";
import Fighting_full from "../../assets/type/Fighting_v2.png";
import Flying_full from "../../assets/type/Flying_v2.png";

const getImageSourceFull = (type) => {
  switch (type) {
    case "Grass":
      return Grass_full;
    case "Fire":
      return Fire_full;
    case "Water":
      return Water_full;
    case "Normal":
      return Normal_full;
    case "Electric":
      return Electric_full;
    case "Fairy":
      return Fairy_full;
    case "Dragon":
      return Dragon_full;
    case "Fighting":
      return Fighting_full;
    case "Flying":
      return Flying_full;
    default:
      return null;
  }
};

export default getImageSourceFull;
