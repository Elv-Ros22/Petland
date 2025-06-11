import { useEffect, useState } from "react";
import axios from "axios";

export default function QuestionList({ category }) {
  const [questions, setQuestions] = useState([]);
  const [text, setText] = useState("");

  const username = localStorage.getItem("username");

  const fetchQuestions = async () => {
    try {
      const res = await axios.get(
        `https://petland-backend.onrender.com/api/questions/${category}`
      );
      setQuestions(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [category]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      await axios.post("https://petland-backend.onrender.com/api/questions", {
        category,
        text,
        createdBy: username,
      });
      setText("");
      fetchQuestions(); // Refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>{category} Questions</h4>

      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask something..."
          style={{ width: "300px" }}
        />
        <button>Post</button>
      </form>

      <ul>
        {questions.map((q) => (
          <li key={q._id}>
            <strong>{q.createdBy || "Anonymous"}:</strong> {q.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
