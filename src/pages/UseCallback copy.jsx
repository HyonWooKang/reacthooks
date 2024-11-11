import { useState, useCallback } from "react";

const NumberList = ({ numbers, filterThreshold, onFilter }) => {
  console.log("NumberList component rendered");

  return (
    <div>
      <h3>Filtered Numbers (Above {filterThreshold}):</h3>
      <button onClick={onFilter}>Apply Filter</button>
      <ul>
        {numbers
          .filter((num) => num > filterThreshold)
          .map((num, index) => (
            <li key={index}>{num}</li>
          ))}
      </ul>
    </div>
  );
};

const UseCallbackPageTwo = () => {
  const [numbers, setNumbers] = useState([2, 5, 8, 12, 18]);
  const [number, setNumber] = useState("");
  const [filterThreshold, setFilterThreshold] = useState(10);

  // 새로운 숫자를 추가하는 함수
  const handleAddNumber = useCallback(() => {
    if (number !== "") {
      setNumbers((prev) => [...prev, Number(number)]);
      setNumber("");
    }
  }, [number]);

  // 필터 기준 값을 변경하는 함수
  const handleFilter = useCallback(() => {
    setFilterThreshold((prev) => prev + 5);
  }, []);

  return (
    <div>
      <h2>UseCallback Example</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleAddNumber}>Add Number</button>

      <NumberList
        numbers={numbers}
        filterThreshold={filterThreshold}
        onFilter={handleFilter}
      />
    </div>
  );
};

export default UseCallbackPageTwo;
