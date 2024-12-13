import { Col, Row } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const SongsGrid = ({ songsArray, title }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.content);

  return (
    <Row>
      <Col className="col-10">
        <div id="rock">
          <h2>{title}</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
            {songsArray.slice(0, 4).map((song) => (
              <Col key={song.id}>
                <div className="text-center">
                  <img
                    src={song.album.cover_medium}
                    alt={song.title}
                    onClick={() => {
                      dispatch({ type: "ADD_TO_PLAYER", payload: song });
                    }}
                  />
                  <p>
                    Track:{song.title}
                    <br /> Artist: {song.artist.name}
                  </p>
                  {!favourites.includes(song.title) ? (
                    <Heart
                      onClick={() => {
                        dispatch({ type: "ADD_TO_FAVOURITES", payload: song.title });
                      }}
                    />
                  ) : (
                    <HeartFill
                      onClick={() => {
                        dispatch({ type: "REMOVE_FROM_FAVOURITE", payload: song.title });
                      }}
                    />
                  )}
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
