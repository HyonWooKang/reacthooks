import { useRef } from "react";

const UseRef = () => {
  const inputRefOne = useRef(null);
  const inputRefTwo = useRef(null);

  const buttonClickHandle = (number) => {
    switch (number) {
      case "one":
        inputRefOne.current.focus();
        break;
      case "two":
        inputRefTwo.current.focus();
        break;
    }
  };

  return (
    <main style={{ padding: "30px" }}>
      <section>
        <h3>입력창 1번</h3>
        <input
          ref={inputRefOne}
          type="text"
          style={{ margin: "0 0.5rem 0 0" }}
        />
        <button onClick={() => buttonClickHandle("one")}>초점 가져오기</button>
      </section>
      <section>
        <h3>입력창 2번</h3>
        <input
          ref={inputRefTwo}
          type="text"
          style={{ margin: "0 0.5rem 0 0" }}
        />
        <button onClick={() => buttonClickHandle("two")}>초점 가져오기</button>
      </section>
    </main>
  );
};

export default UseRef;
