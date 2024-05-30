import { Box, Button, Typography, Paper } from "@mui/material";
import MenuAppBar from "../app-bar/MenuAppBar";
import { Link, Outlet } from "react-router-dom";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"; // Ikona dla książek
import AssignmentIcon from "@mui/icons-material/Assignment"; // Ikona dla wypożyczeń

function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MenuAppBar />
      <Paper
        sx={{
          padding: "20px",
          margin: "20px",
          borderRadius: "15px",
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Półprzezroczyste tło
          backdropFilter: "blur(5px)", // Rozmycie tła pod kafelkami
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Witaj w naszej bibliotece!
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          <Button
            variant="contained"
            startIcon={<LibraryBooksIcon />}
            component={Link}
            to="books"
            sx={{ m: 1, backgroundColor: "#8B4513" }} // Brązowy kolor przycisku
          >
            Książki
          </Button>
          <Button
            variant="contained"
            startIcon={<AssignmentIcon />}
            component={Link}
            to="lendings"
            sx={{ m: 1, backgroundColor: "#8B4513" }} // Brązowy kolor przycisku
          >
            Wypożyczenia
          </Button>
        </Box>
      </Paper>
      <Outlet />
    </Box>
  );
}

export default HomePage;
