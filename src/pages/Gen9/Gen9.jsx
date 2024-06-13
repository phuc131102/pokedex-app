import React, { useState, useEffect, useRef } from "react";
import useGen9 from "../../utils/gen9Utils";
import { allAbility } from "../../services/pokeAPI";
import getImageSource from "../../components/Type/Type";
import getImageSourceFull from "../../components/Type/Type_full";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useLocation, useNavigate } from "react-router-dom";
import RotatingImage from "../../components/RotatingImage/RotatingImage";
import Newest from "./Child/Newest";
import Spacing from "./Child/Spacing";
import Search from "./Child/Search";
import Paginate from "./Child/Pagination";
import List from "./Child/List";
import NestedModal from "./Child/NestedModal";
import MainModal from "./Child/MainModal";

function Gen9() {
  const [showModal, setShowModal] = useState(false);
  const [showNestedModal, setShowNestedModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const [abilityInfo, setAbilityInfo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType1, setSelectedType1] = useState("");
  const [selectedType2, setSelectedType2] = useState("");
  const [form, setForm] = useState("");
  const [form2, setForm2] = useState("");
  const [form3, setForm3] = useState("");
  const [lv1, setLv1] = useState("");
  const [lv2, setLv2] = useState("");
  const [lv2Form2, setLv2Form2] = useState("");
  const [lv3, setLv3] = useState("");
  const [ability, setAbility] = useState([]);
  const { gen9, loadingGen9 } = useGen9();
  const modalContentRef = useRef(null);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const itemsPerPage = isMd ? 30 : 10;

  const location = useLocation();
  const navigate = useNavigate();

  const getQueryParams = (param) => {
    return new URLSearchParams(location.search).get(param);
  };

  const [currentPage, setCurrentPage] = useState(
    parseInt(getQueryParams("page")) || 1
  );

  const types = [
    "Normal",
    "Fire",
    "Water",
    "Electric",
    "Grass",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dragon",
    "Dark",
    "Steel",
    "Fairy",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAbility = await allAbility();
        setAbility(fetchedAbility);
      } catch (error) {
        console.error("Error fetching type:", error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredGen9 = gen9.filter((pokemon) => {
    const matchesSearchQuery =
      (pokemon.name &&
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (pokemon.jpname &&
        pokemon.jpname.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType1 =
      selectedType1 === "" || pokemon.type1 === selectedType1;
    const matchesType2 =
      selectedType2 === "" || pokemon.type2 === selectedType2;
    return matchesSearchQuery && matchesType1 && matchesType2;
  });

  const currentGen9 = filteredGen9
    .sort((a, b) => a.num - b.num)
    .slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    navigate(`?page=${value}`);
  };

  const handleOpenModal = (cardInfo) => {
    setSelectedCard(cardInfo);
    setShowModal(true);
    if (cardInfo.form2 !== "") {
      findForm(cardInfo.name, cardInfo.form2);
    }
    if (cardInfo.form3 !== "") {
      findForm2(cardInfo.name, cardInfo.form3);
    }
    if (cardInfo.form4 !== "") {
      findForm3(cardInfo.name, cardInfo.form4);
    }
    if (cardInfo.lv1) {
      findLv1(cardInfo.lv1);
    }
    if (cardInfo.lv2) {
      findLv2(cardInfo.lv2);
    }
    if (cardInfo.lv3) {
      findLv3(cardInfo.lv3);
    }

    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenNestedModal = (name) => {
    const abilityCard = ability.find((ability) => ability.ability === name);
    if (abilityCard) {
      setAbilityInfo(abilityCard);
      setShowNestedModal(true);
    }
  };

  const handleCloseNestedModal = () => {
    setShowNestedModal(false);
  };

  const findForm = (name, form2) => {
    const abilityCard = gen9.find(
      (gen9) => gen9.name === name && gen9.form1 === form2
    );
    if (abilityCard) {
      setForm(abilityCard);
    } else return null;
  };

  const findForm2 = (name, form3) => {
    const abilityCard = gen9.find(
      (gen9) => gen9.name === name && gen9.form1 === form3
    );
    if (abilityCard) {
      setForm2(abilityCard);
    } else return null;
  };

  const findForm3 = (name, form4) => {
    const abilityCard = gen9.find(
      (gen9) => gen9.name === name && gen9.form1 === form4
    );
    if (abilityCard) {
      setForm3(abilityCard);
    } else return null;
  };

  const findLv1 = (lv1) => {
    const abilityCard = gen9.find((gen9) => gen9.name === lv1);
    if (abilityCard) {
      setLv1(abilityCard);
    } else return null;
  };

  const findLv2 = (lv2) => {
    const abilityCard = gen9.find((gen9) => gen9.name === lv2);
    if (abilityCard) {
      setLv2(abilityCard);
      if (abilityCard.form2 !== "") {
        findLv2Form2(abilityCard.name, abilityCard.form2);
      }
    } else return null;
  };

  const findLv2Form2 = (name, form2) => {
    const abilityCard = gen9.find(
      (gen9) => gen9.name === name && gen9.form1 === form2
    );
    if (abilityCard) {
      setLv2Form2(abilityCard);
    } else return null;
  };

  const findLv3 = (lv3) => {
    const abilityCard = gen9.find((gen9) => gen9.name === lv3);
    if (abilityCard) {
      setLv3(abilityCard);
    } else return null;
  };

  const handleTypeChange1 = (event) => {
    setSelectedType1(event.target.value);
    setCurrentPage(1);
    navigate(`?page=1`);
  };

  const handleTypeChange2 = (event) => {
    setSelectedType2(event.target.value);
    setCurrentPage(1);
    navigate(`?page=1`);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
    navigate(`?page=1`);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedType1("");
    setSelectedType2("");
    setCurrentPage(1);
    navigate(`?page=1`);
  };

  const styles = {
    button: {
      color: "#fff",
      fontWeight: 600,
      borderRadius: 15,
      maxWidth: "500px",
      marginRight: "10px",
      minWidth: "150px",
      padding: "5px 10px",
      fontSize: "1.2rem",
    },
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "500px",
      maxHeight: "75vh",
      backgroundColor: "white",
      boxShadow: "0 0 24px rgba(0, 0, 0, 0.5)",
      borderRadius: "10px",
      padding: "20px",
      overflow: "auto",
    },
    nestedmodal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "400px",
      maxHeight: "75vh",
      backgroundColor: "white",
      boxShadow: "0 0 24px rgba(0, 0, 0, 0.5)",
      borderRadius: "10px",
      padding: "20px",
      overflow: "auto",
    },
    scrollbar: {
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  };

  if (loadingGen9) {
    return (
      <RotatingImage
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png"
        alt="Loading"
      />
    );
  }

  return (
    <>
      <br />

      <Spacing mt="75px" />

      <Newest
        gen9={gen9}
        isMd={isMd}
        handleOpenModal={handleOpenModal}
        getImageSource={getImageSource}
      />

      <Spacing mt="15px" />

      <Search
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        isMd={isMd}
        selectedType1={selectedType1}
        handleTypeChange1={handleTypeChange1}
        types={types}
        selectedType2={selectedType2}
        handleTypeChange2={handleTypeChange2}
        handleResetFilters={handleResetFilters}
      />

      <Paginate
        filteredGen9={filteredGen9}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isMd={isMd}
      />

      <List
        filteredGen9={filteredGen9}
        currentGen9={currentGen9}
        handleOpenModal={handleOpenModal}
        getImageSource={getImageSource}
        isMd={isMd}
      />

      <Paginate
        filteredGen9={filteredGen9}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        isMd={isMd}
      />

      <br />

      <MainModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleOpenModal={handleOpenModal}
        styles={styles}
        modalContentRef={modalContentRef}
        selectedCard={selectedCard}
        isMd={isMd}
        getImageSourceFull={getImageSourceFull}
        handleOpenNestedModal={handleOpenNestedModal}
        form={form}
        form2={form2}
        form3={form3}
        getImageSource={getImageSource}
        lv1={lv1}
        lv2={lv2}
        lv2Form2={lv2Form2}
        lv3={lv3}
      />

      <NestedModal
        showNestedModal={showNestedModal}
        handleCloseNestedModal={handleCloseNestedModal}
        styles={styles}
        abilityInfo={abilityInfo}
      />
    </>
  );
}

export default Gen9;
