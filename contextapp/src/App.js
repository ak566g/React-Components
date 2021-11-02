import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <Navbar/>
        <BookList/>
        <ThemeToggle/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
