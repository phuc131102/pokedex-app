import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function TableInfo(prop) {
  return (
    <TableContainer
      component={Paper}
      style={{
        marginTop: "20px",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              Chủng loại
            </TableCell>
            {prop.selectedCard.ability2 === "" ? (
              <TableCell
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                Đặc tính
              </TableCell>
            ) : (
              <>
                <TableCell
                  style={{
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Đặc tính 1
                </TableCell>
                <TableCell
                  style={{
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  Đặc tính 2
                </TableCell>
              </>
            )}
            {prop.selectedCard.hid_ability !== "" ? (
              <TableCell
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                Đặc tính ẩn
              </TableCell>
            ) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              style={{
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              {prop.selectedCard.category}
            </TableCell>
            {prop.selectedCard.ability2 === "" ? (
              <TableCell
                onClick={() =>
                  prop.handleOpenNestedModal(prop.selectedCard.ability)
                }
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "lightgray")
                }
                onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
              >
                {prop.selectedCard.ability}
              </TableCell>
            ) : (
              <>
                <TableCell
                  onClick={() =>
                    prop.handleOpenNestedModal(prop.selectedCard.ability)
                  }
                  style={{
                    border: "1px solid black",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "lightgray")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "white")
                  }
                >
                  {prop.selectedCard.ability}
                </TableCell>
                <TableCell
                  onClick={() =>
                    prop.handleOpenNestedModal(prop.selectedCard.ability2)
                  }
                  style={{
                    border: "1px solid black",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "lightgray")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "white")
                  }
                >
                  {prop.selectedCard.ability2}
                </TableCell>
              </>
            )}
            {prop.selectedCard.hid_ability !== "" ? (
              <TableCell
                onClick={() =>
                  prop.handleOpenNestedModal(prop.selectedCard.hid_ability)
                }
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "lightgray")
                }
                onMouseLeave={(e) => (e.target.style.backgroundColor = "white")}
              >
                {prop.selectedCard.hid_ability}
              </TableCell>
            ) : null}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableInfo;
