import { Col, Row } from "react-bootstrap";

const SongsGrid = ({ songsArray, title }) => {
  return (
    <Row>
      <Col className="col-10">
        <div id="rock">
          <h2>{title}</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
            {songsArray.slice(0, 4).map((song) => (
              <Col key={song.id}>
                <div className="text-center">
                  <img src={song.album.cover_medium} alt={song.title} />
                  <p>
                    Track:{song.title}
                    <br /> Artist: {song.artist.name}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  );
};
export default SongsGrid;
