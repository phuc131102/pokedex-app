import Grass_full from "../../assets/type/Grass_v2.png";
import Fire_full from "../../assets/type/Fire_v2.png";
import Water_full from "../../assets/type/Water_v2.png";
import Normal_full from "../../assets/type/Normal_v2.png";
import Electric_full from "../../assets/type/Electric_v2.png";
import Fairy_full from "../../assets/type/Fairy_v2.png";
import Dragon_full from "../../assets/type/Dragon_v2.png";
import Fighting_full from "../../assets/type/Fighting_v2.png";
import Flying_full from "../../assets/type/Flying_v2.png";
import Poison_full from "../../assets/type/Poison_v2.png";
import Rock_full from "../../assets/type/Rock_v2.png";
import Ground_full from "../../assets/type/Ground_v2.png";
import Ghost_full from "../../assets/type/Ghost_v2.png";
import Steel_full from "../../assets/type/Steel_v2.png";
import Dark_full from "../../assets/type/Dark_v2.png";
import Psychic_full from "../../assets/type/Psychic_v2.png";
import Ice_full from "../../assets/type/Ice_v2.png";
import Bug_full from "../../assets/type/Bug_v2.png";

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
    case "Poison":
      return Poison_full;
    case "Rock":
      return Rock_full;
    case "Ground":
      return Ground_full;
    case "Ghost":
      return Ghost_full;
    case "Steel":
      return Steel_full;
    case "Dark":
      return Dark_full;
    case "Psychic":
      return Psychic_full;
    case "Ice":
      return Ice_full;
    case "Bug":
      return Bug_full;
    default:
      return null;
  }
};

export default getImageSourceFull;
