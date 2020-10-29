import { jsx } from "@emotion/core";
import { useState } from "react";
import AlbumSlider from "./component/AlbumSlider";
import Layout from "./component/Layout";
import styled from "@emotion/styled";
import { accessToken } from "./config"
const BASE_URL = "https://api.discogs.com/";
function App() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `${BASE_URL}/database/search?q=${query}&token=${accessToken}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  const Button = styled.button`
    background-color: hotpink;
  `;

  const Header = styled.header`
    grid-area: header;
  `;

  const Main = styled.main`
    grid-area: main;
    padding: 15px 5px 10px 5px;
  `;

  const Footer = styled.footer`
    grid-area: footer;
  `;

  if (data) {
    const images = [
      ...new Set(
        data.results.map((el) => (
          <img onMouseOver={(e) => setTitle(el.title)} src={el.thumb} />
        ))
      ),
    ];
    return (
      <Layout>
        <Header>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setQuery(e.target.value)} />
            <Button>Submit</Button>
          </form>
        </Header>
        <Main>
          <pre>{title}</pre>
        </Main>
        <Footer>
          <AlbumSlider style={{ display: "absolute", bottom: "0" }}>
            {images}
          </AlbumSlider>
        </Footer>
      </Layout>
    );
  } else {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setQuery(e.target.value)} />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default App;
