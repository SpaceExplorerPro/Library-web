import React from "react";
import "./App.css";
import LoginForm from "./login-form/LoginForm";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./home-page/HomePage";
import BooksList from "./pages/BooksList";
import LendingsList from "./pages/LendingsList";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/login" />} />
//       <Route path="/login" element={<LoginForm />} />
//       <Route path="/home" element={<HomePage />}>
//         <Route
//           path="1"
//           element={
//             <>
//               <div
//                 style={{
//                   height: "300px",
//                   width: "100%",
//                   backgroundColor: "red",
//                 }}
//               />
//             </>
//           }
//         />
//         <Route
//           path="2"
//           element={
//             <>
//               <div
//                 style={{
//                   height: "300px",
//                   width: "100%",
//                   backgroundColor: "blue",
//                 }}
//               />
//             </>
//           }
//         />
//       </Route>
//     </Routes>
//   );
// }
//
// export default App;

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/login" />} />
//       <Route path="/login" element={<LoginForm />} />
//       <Route path="/home" element={<HomePage />}>
//         {/* Tutaj możesz dodać dodatkowe ścieżki jako dzieci komponentu HomePage */}
//       </Route>
//       <Route path="/books" element={<BooksList />} /> // Dodaj ścieżkę dla
//       BooksList
//       <Route path="/lendings" element={<LendingsList />} /> // Dodaj ścieżkę dla
//       LendingsList
//       {/* Możesz dodać więcej ścieżek w razie potrzeby */}
//     </Routes>
//   );
// }
//
// export default App;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/home" element={<HomePage />}>
        <Route path="books" element={<BooksList />} />
        <Route path="lendings" element={<LendingsList />} />
      </Route>
    </Routes>
  );
}

export default App;
