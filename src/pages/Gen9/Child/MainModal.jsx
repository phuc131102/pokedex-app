import React from "react";
import Info from "./ModalComponent/Info";
import TableInfo from "./ModalComponent/TableInfo";
import DetailInfo from "./ModalComponent/DetailInfo";
import Form from "./ModalComponent/Form";
import Evoluation from "./ModalComponent/Evoluation";
import { Box, Modal } from "@mui/material";
import Line from "./ModalComponent/Line";

function MainModal(prop) {
  return (
    <Modal
      open={prop.showModal}
      onClose={prop.handleCloseModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box
        sx={{ ...prop.styles.modal, ...prop.styles.scrollbar }}
        ref={prop.modalContentRef}
      >
        <Info
          selectedCard={prop.selectedCard}
          getImageSourceFull={prop.getImageSourceFull}
          showJapaneseName={prop.showJapaneseName}
        />

        <TableInfo
          selectedCard={prop.selectedCard}
          handleOpenNestedModal={prop.handleOpenNestedModal}
        />

        <Line mb="30px" />

        <DetailInfo selectedCard={prop.selectedCard} />

        <Line mb="0" />

        <Form
          selectedCard={prop.selectedCard}
          handleOpenModal={prop.handleOpenModal}
          form={prop.form}
          getImageSource={prop.getImageSource}
          form2={prop.form2}
          form3={prop.form3}
        />

        <Evoluation
          selectedCard={prop.selectedCard}
          handleOpenModal={prop.handleOpenModal}
          getImageSource={prop.getImageSource}
          lv1={prop.lv1}
          lv2={prop.lv2}
          lv2Form2={prop.lv2Form2}
          lv3={prop.lv3}
          isMd={prop.isMd}
        />
      </Box>
    </Modal>
  );
}

export default MainModal;
