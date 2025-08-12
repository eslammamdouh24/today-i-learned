const Category = ({ category, setCurrentCategory }) => {
  return (
    <li className="category">
      <button
        className={`btn ${
          category.color ? "btn-category" : "btn-all-categories"
        }`}
        style={category.color ? { backgroundColor: category.color } : undefined}
        onClick={() => setCurrentCategory(category.name)}
      >
        {category.name}
      </button>
    </li>
  );
};

export default Category;
