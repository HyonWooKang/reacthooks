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
      <head>This is a React Hook study page by Spencer</head>
      <main>
        <div style={{ margin: "20px" }}>
          <h3>목록</h3>
          <ul>
            <li style={{ margin: "10px" }}>
              <a href="" onClick={handlePageMove("/state")}>
                useState로 이동
              </a>
            </li>
            <li style={{ margin: "10px" }}>
              <a href="" onClick={handlePageMove("/effect")}>
                useEffect로 이동
              </a>
            </li>
            <li style={{ margin: "10px" }}>
              <a href="" onClick={handlePageMove("/context")}>
                useContext로 이동
              </a>
            </li>
            <li style={{ margin: "10px" }}>
              <a href="" onClick={handlePageMove("/ref")}>
                useRef 이동
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
