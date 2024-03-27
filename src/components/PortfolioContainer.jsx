import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import Portfolio from "./pages/Portfolio/Portfolio";

export default function PortfolioContainer({ currentPage, setCurrentPage }) {
  if (currentPage === "Portfolio") {
    return <Portfolio />;
  }
  if (currentPage === "Contact") {
    return <Contact />;
  }
  if (currentPage === "Resume") {
    return <Resume />;
  }
  return <About />;
}