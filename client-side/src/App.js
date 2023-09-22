import { Container } from "@mui/material";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        border: "1px solid #eee",
        borderRadius: "15px",
        paddingTop: "10px",
      }}
    >
      <Home />
    </Container>
  );
}

export default App;
