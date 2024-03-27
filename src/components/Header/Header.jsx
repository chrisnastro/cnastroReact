import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className="header-parent" style={{ padding: "0px 0px 10px 43px" }}>
      <p id="header-text">Chris Nastro</p>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}