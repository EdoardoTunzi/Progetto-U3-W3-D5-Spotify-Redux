import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SongsGrid from "./SongsGrid";

const MainView = () => {
  const [rock, setRock] = useState([]);
  const [pop, setPop] = useState([]);
  const [classic, setClassic] = useState([]);

  const fillMusicSection = async (artistName, setState) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let result = await response.json();
        console.log(result); // Log per vedere la struttura dei dati
        if (result && result.data) {
          setState(result.data); // Imposta lo stato con i dati delle canzoni
        } else {
          console.log("Dati non trovati o struttura errata");
        }
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fillMusicSection("queen", setRock);
    fillMusicSection("pop", setPop);
    fillMusicSection("classical", setClassic);
  }, []);

  return (
    <Container className="col-12 col-md-9 mainPage">
      <Row>
        <Col className="d-none d-md-flex col-9 col-lg-11 mainLinks">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </Col>
      </Row>
      <SongsGrid songsArray={rock} title={"Rock Classics"} />
      <SongsGrid songsArray={pop} title={"Pop Culture"} />
      <SongsGrid songsArray={classic} title={"Classical music"} />
    </Container>
  );
};

export default MainView;
