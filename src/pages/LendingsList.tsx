// LendingsList.tsx
import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { format } from "date-fns"; // Zaimportuj funkcję format z date-fns

interface Lending {
  id: number;
  bookId: number;
  userId: number;
  borrowingDate: Date;
  dueDate: Date;
  returnDate?: Date; // Opcjonalna data zwrotu
}

const lendings: Lending[] = [
  {
    id: 1,
    bookId: 1,
    userId: 100,
    borrowingDate: new Date(2024, 3, 14), // Rok, miesiąc (od 0), dzień
    dueDate: new Date(2024, 4, 14),
    returnDate: new Date(2024, 4, 10),
  },
  {
    id: 2,
    bookId: 2,
    userId: 101,
    borrowingDate: new Date(2024, 5, 1),
    dueDate: new Date(2024, 6, 1),
    // returnDate nie jest podane, jeśli książka nie została jeszcze zwrócona
  },
  // Dodaj więcej wypożyczeń...
];

const LendingsList: React.FC = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {lendings.map((lending) => (
        <Grid item key={lending.id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Wypożyczenie ID: {lending.id}
              </Typography>
              <Typography variant="body2">
                ID Książki: {lending.bookId}
              </Typography>
              <Typography variant="body2">
                ID Użytkownika: {lending.userId}
              </Typography>
              <Typography variant="body2">
                Data wypożyczenia: {format(lending.borrowingDate, "dd/MM/yyyy")}
              </Typography>
              <Typography variant="body2">
                Termin zwrotu: {format(lending.dueDate, "dd/MM/yyyy")}
              </Typography>
              <Typography variant="body2">
                Data zwrotu:{" "}
                {lending.returnDate
                  ? format(lending.returnDate, "dd/MM/yyyy")
                  : "Nie zwrócono"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default LendingsList;
