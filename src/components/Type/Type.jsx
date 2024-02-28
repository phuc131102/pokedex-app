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
import Ghost from "../../assets/type/Ghost.png";
import Steel from "../../assets/type/Steel.png";
import Dark from "../../assets/type/Dark.png";
import Psychic from "../../assets/type/Psychic.png";
import Ice from "../../assets/type/Ice.png";
import Bug from "../../assets/type/Bug.png";

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
    case "Ghost":
      return Ghost;
    case "Steel":
      return Steel;
    case "Dark":
      return Dark;
    case "Psychic":
      return Psychic;
    case "Ice":
      return Ice;
    case "Bug":
      return Bug;
    default:
      return null;
  }
};

export default getImageSource;
