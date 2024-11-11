import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handlePageMove = (url) => {
    return (event) => {
      event.preventDefault();
      navigate(url);
    };
  };

  return (
    <>
      <main>
        <div style={{ margin: "30px" }}>
          <h3 style={{ margin: "0 0 0 30px" }}>목록</h3>
          <ul>
            <li style={{ margin: "10px" }}>
              <a href="" onClick={handlePageMove("/state")}>
                UseState로 이동
              </a>
            </li>
            <li style={{ margin: "10px" }}>
              <a href="" onClick={handlePageMove("/effect")}>
                UseEffect로 이동
              </a>
            </li>
            <li style={{ margin: "10px" }}>
              <a href="" onClick={handlePageMove("/context")}>
                UseContext로 이동
              </a>
            </li>
            <li style={{ margin: "10px" }}>
              <a href="" onClick={handlePageMove("/ref")}>
                UseRef 이동
              </a>
            </li>
            <li style={{ margin: "10px" }}>
              <a href="" onClick={handlePageMove("/memo")}>
                UseMemo 이동
              </a>
            </li>
            <li style={{ margin: "10px" }}>
              <a href="" onClick={handlePageMove("/callback")}>
                UseCallBack 이동
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
