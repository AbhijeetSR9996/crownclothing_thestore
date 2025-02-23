import "./category-item.styles.scss";
//import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <div className="category-container" style={{ pointerEvents: "none" }}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        {/* <Link className="nav-link" to="/shop"> */}
        <h2>{title}</h2>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default CategoryItem;
