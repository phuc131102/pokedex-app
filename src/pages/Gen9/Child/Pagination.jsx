import React from "react";
import { Pagination } from "@mui/material";

function Paginate(prop) {
  return (
    <div>
      {prop.filteredGen9.length > prop.itemsPerPage && (
        <Pagination
          count={Math.ceil(prop.filteredGen9.length / prop.itemsPerPage)}
          page={prop.currentPage}
          onChange={prop.handlePageChange}
          shape="rounded"
          size={prop.isMd ? "large" : "small"}
          color="primary"
          showFirstButton
          showLastButton
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        />
      )}
    </div>
  );
}

export default Paginate;
