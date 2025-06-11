import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryMenu from "../components/CategoryMenu";
import QuestionList from "../components/QuestionList";

export default function Dashboard() {
  const username = localStorage.getItem("username");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h1>🐾 PetLand</h1>
      <p>
        Welcome, {username}! <button onClick={handleLogout}>Logout</button>
      </p>

      <CategoryMenu onSelect={setSelectedCategory} />

      <hr />

      {selectedCategory ? (
        <QuestionList category={selectedCategory} />
      ) : (
        <p>Select a category to view its questions.</p>
      )}
    </div>
  );
}
