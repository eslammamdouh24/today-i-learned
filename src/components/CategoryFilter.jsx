import Categories from "../data/categories";
import Category from "./Category";

const CategoryFilter = ({ setCurrentCategory }) => {
  return (
    <aside>
      <ul className="category-list">
        {Categories.map((cat) => (
          <Category
            key={cat.name}
            category={cat}
            setCurrentCategory={setCurrentCategory}
          />
        ))}
      </ul>
    </aside>
  );
};

export default CategoryFilter;
