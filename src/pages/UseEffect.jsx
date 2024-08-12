import { useEffect, useState } from "react";

const UseEffect = () => {
  const [pageInfo, setPageInfo] = useState({
    id: 0,
    title: "",
    content: "",
    createdAt: "",
    updatedAt: "",
    userId: 0,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(); // api 조회 후 data 담는 과정
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://koreanjson.com/posts/1");
      const data = await response.json();

      console.log(`data is ${data}`);

      setPageInfo({
        id: data.id,
        title: data.title,
        content: data.content,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        userId: data.UserId,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Loading Error</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <main style={{ margin: "30px", width: "30vw" }}>
        <section>
          <h4>title</h4>
          <p>{pageInfo.title}</p>
        </section>
        <section>
          <div>
            <h4>content</h4>
            <p>{pageInfo.content}</p>
          </div>
          <div>
            <h4>userId</h4>
            <p>{pageInfo.userId}</p>
          </div>
        </section>
        <section>
          <button onClick={fetchData}>다시 조회하기</button>
        </section>
      </main>
    </>
  );
};

export default UseEffect;
