import { useMemo, useState } from "react";

// 소수를 판별하는 함수
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const UseMemoExample = () => {
  const [numbers, setNumbers] = useState([2, 3, 4, 7, 10, 13, 17, 19]);
  const [number, setNumber] = useState("");

  // 소수 제곱의 합 계산을 useMemo로 최적화
  const primeSquaresSum = useMemo(() => {
    console.log("Expensive calculation in progress...");
    return numbers
      .filter(isPrime) // 소수만 걸러내고
      .map((num) => num ** 2) // 제곱한 뒤
      .reduce((acc, val) => acc + val, 0); // 합산
  }, [numbers]);

  const handleAddNumber = () => {
    if (number !== "") {
      setNumbers((prev) => [...prev, Number(number)]);
      setNumber("");
    }
  };

  return (
    <div className="frame">
      <h2>소수의 제곱 합: {primeSquaresSum}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleAddNumber}>숫자 추가</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoExample;
