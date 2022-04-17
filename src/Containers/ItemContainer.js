import "./ItemContainer.css";
const ItemContainer = (props) => {
  return <div className="item">{props.children}</div>;
};
export default ItemContainer;
