import { useEffect, useMemo, useState } from "react";

const recordSample = [1, 3, 1, 8, 9, 8, 10];

const initialValue = [0];

const UseMemoPage = () => {
  const [records, setRecords] = useState(initialValue);
  const [number, setNumber] = useState("");

  useEffect(() => {
    if (records === initialValue && recordSample) setRecords(recordSample);
  }, [records]);

  const sum = useMemo(() => {
    return records.reduce((acc, record) => acc + record, 0);
  }, [records]);

  return (
    <div className="frame">
      <section style={{ margin: "1rem" }}>
        <input
          type="number"
          // defaultValue={0}
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <button
          onClick={() => {
            if (number !== "") {
              setRecords((prev) => [...prev, number]);
              setNumber("");
            }
          }}
        >
          입력
        </button>
      </section>
      <section style={{ marginLeft: "1rem" }}>
        <ol>
          {records &&
            records.length > 0 &&
            records.map((item, index) => (
              <li id={index} key={index}>
                {item}
              </li>
            ))}
        </ol>
        <div style={{ marginTop: "1rem" }}>
          <p>{`합계 ${sum}`}</p>
        </div>
      </section>
    </div>
  );
};

export default UseMemoPage;
