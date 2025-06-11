import { useEffect, useState } from "react";
import axios from "axios";

export default function QuestionList({ category }) {
  const [questions, setQuestions] = useState([]);
  const [text, setText] = useState("");

  const username = localStorage.getItem("username");

  const fetchQuestions = async () => {
    const response = await axios.get(
      `https://petland-backend.onrender.com/api/questions/${category}`
    );
    setQuestions(response.data);
  };

  useEffect(() => {
    fetchQuestions();
  }, [category]);

  const addQuestion = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    await axios.post("https://petland-backend.onrender.com", {
      category,
      text,
      createdBy: username,
    });
    setText("");
    fetchQuestions();
  };

  return (
    <div>
      <h4>{category} Questions</h4>
      <form onSubmit={addQuestion}>
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
            <b>{q.createdBy || "Anonymous"}: </b> {q.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
