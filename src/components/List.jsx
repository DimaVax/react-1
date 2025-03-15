const colorArr = ["red", "green", "blue"];
const List = () => {
  return (
    <ul>
      {colorArr.map((color) => {
        return (
          <li key={color}>
            <p>{color}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default List;