import { useContext } from "react";
import { basketContext } from "../../../context/BasketProvider";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function BasketItems() {
  const { basket, setBasket } = useContext(basketContext);
  function handleDec(id) {
    let findedItem = basket.find((item) => item.id == id);
    if (findedItem.count > 1) {
      findedItem.count--;
      setBasket([...basket]);
    } else {
      setBasket(basket.filter((item) => item.id != id));
    }
  }

  function handleDelete(id) {
    setBasket(basket.filter((item) => item.id != id));
  }

  function handleInc(id) {
    let findedItem = basket.find((item) => item.id == id);
    findedItem.count++;
    setBasket([...basket]);
  }
  return (
    <div className="custom-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
              >
                Title
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
              >
                Price
              </TableCell>

              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
              >
                Pages
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
              >
                Genre
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
              >
                Decrement
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
              >
                Count
              </TableCell>
              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
              >
                Increment
              </TableCell>

              <TableCell
                align="center"
                sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basket.map((basket) => (
              <TableRow
                key={basket.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{basket.title}</TableCell>
                <TableCell align="center">{basket.price}</TableCell>
                <TableCell align="center">{basket.pagesCount}</TableCell>
                <TableCell align="center">{basket.genre}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDec(basket.id)}
                  >
                    <p className="text-lg">-</p>
                  </Button>
                </TableCell>

                <TableCell align="center">{basket.count}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="success"
                    onClick={() => handleInc(basket.id)}
                  >
                    <p className="text-lg">+</p>
                  </Button>
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(basket.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
