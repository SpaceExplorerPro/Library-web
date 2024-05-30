// BooksList.tsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  CardMedia,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

interface Book {
  id: number;
  isbn: string;
  title: string;
  author: string;
  publisher: string;
  publishYear: number;
  availableCopies: number;
  coverUrl: string; // URL do obrazu okładki książki
}

const books: Book[] = [
  {
    id: 1,
    isbn: "978-3-16-148410-0",
    title: "Harry Potter",
    author: "J.K. Rowling",
    publisher: "Bloomsbury",
    publishYear: 1997,
    availableCopies: 5,
    coverUrl:
      "https://www.mediarodzina.pl/mrcore/uploads/2018/12/harry_potter_i_insygnia_smierci-1.jpg",
  },
  {
    id: 2,
    isbn: "978-0-395-19395-8",
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    publisher: "Allen & Unwin",
    publishYear: 1954,
    availableCopies: 0,
    coverUrl:
      "https://ecsmedia.pl/c/wladca-pierscieni-druzyna-pierscienia-dwie-wieze-powrot-krola-w-iext146949164.jpg",
  },
  // Dodaj więcej książek...
];

const BooksList: React.FC = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {books.map((book) => (
        <Grid item key={book.id} xs={12} sm={6} md={4}>
          <Card>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Autor: {book.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ISBN: {book.isbn}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Wydawnictwo: {book.publisher}, {book.publishYear}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dostępne kopie: {book.availableCopies}
                </Typography>
                {book.availableCopies > 0 ? (
                  <Chip
                    icon={<CheckCircleIcon />}
                    label="Dostępna"
                    color="success"
                    size="small"
                    variant="outlined"
                    style={{ marginTop: "10px" }}
                  />
                ) : (
                  <Chip
                    icon={<CancelIcon />}
                    label="Niedostępna"
                    color="error"
                    size="small"
                    variant="outlined"
                    style={{ marginTop: "10px" }}
                  />
                )}
              </CardContent>
              <CardMedia
                component="img"
                image={book.coverUrl}
                alt={`Okładka książki ${book.title}`}
                style={{ width: "150px", height: "auto", alignSelf: "center" }}
              />
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BooksList;
