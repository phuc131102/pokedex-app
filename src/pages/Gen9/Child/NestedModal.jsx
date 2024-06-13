import { Modal, Box, Typography } from "@mui/material";
import React from "react";
import Line from "./ModalComponent/Line";

function NestedModal(prop) {
  return (
    <Modal
      open={prop.showNestedModal}
      onClose={prop.handleCloseNestedModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...prop.styles.nestedmodal, ...prop.styles.scrollbar }}>
        <Typography id="place-book-modal" variant="h4" textAlign="center">
          <b>{prop.abilityInfo.ability}</b>
        </Typography>
        <Typography variant="body1" textAlign="justify" marginTop={2}>
          {prop.abilityInfo.info}
        </Typography>
        <Line mb="0" />
      </Box>
    </Modal>
  );
}

export default NestedModal;
