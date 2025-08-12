import Categories from "../data/categories";

const Tag = ({ fact }) => {
  const matchedCategory = Categories.find((cat) => cat.name === fact.category);

  return (
    <span
      className="tag"
      style={{
        background: matchedCategory?.color,
      }}
    >
      {fact.category}
    </span>
  );
};

export default Tag;
