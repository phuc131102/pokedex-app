import { Modal, Box, Typography } from "@mui/material";
import React from "react";

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
        <div
          style={{
            borderTop: "2px solid black",
            width: "90%",
            margin: "10px auto",
            marginTop: "30px",
          }}
        ></div>
      </Box>
    </Modal>
  );
}

export default NestedModal;
