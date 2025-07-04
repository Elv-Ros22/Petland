export default function CategoryMenu({ onSelect }) {
  const categories = ["Dogs", "Cats", "Rabbits"];
  return (
    <div>
      <h3>Categories</h3>
      {categories.map((cat) => (
        <button key={cat} onClick={() => onSelect(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
}
