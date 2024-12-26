import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function BooksTable({ data }) {
  return (
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
              Author
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
              Published Year
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
              Language
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
          {data.map((book) => (
            <TableRow
              key={book.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{book.title}</TableCell>
              <TableCell align="center">{book.price}</TableCell>
              <TableCell align="center">{book.author}</TableCell>
              <TableCell align="center">{book.pagesCount}</TableCell>
              <TableCell align="center">{book.publishedYear}</TableCell>
              <TableCell align="center">{book.genre}</TableCell>
              <TableCell align="center">{book.language}</TableCell>
              <TableCell
                align="center"
                sx={{ display: "flex", gap: "20px", justifyContent: "center" }}
              >
                <Button variant="outlined" color="error">
                  Delete
                </Button>
                <Button variant="outlined" color="warning">
                  <Link to={`${book.id}`}>Info</Link>
                </Button>
                <Button variant="outlined" color="primary">
                  <Link to={`${book.id}/edit`}>Edit</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BooksTable;
