const Suggestion = ({ data, handleClick }) => {
  return (
    <div>
      <ul>
        {data && data.length
          ? data.map((dataItem, index) => <li onClick={handleClick} key={index}>{dataItem}</li>)
          : null}
      </ul>
    </div>
  );
};

export default Suggestion;
