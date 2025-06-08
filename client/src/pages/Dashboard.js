import { UseState } from "react";
import CategoryMenu from "../components/CategoryMenu";
import QuestionList from "../components/QuestionList";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const username = localStorage.getItem("username");
  const [selectedCategory, setSelectedCategory] = UseState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h1>PetLand</h1>
      <p>
        Welcome, {username} | <button onClick={handleLogout}>Logout</button>
      </p>
      <CategoryMenu onSelect={setSelectedCategory} />
      {selectedCategory ? (
        <QuestionList category={selectedCategory} />
      ) : (
        <p>Select a catgory to view its questions</p>
      )}
    </div>
  );
}
