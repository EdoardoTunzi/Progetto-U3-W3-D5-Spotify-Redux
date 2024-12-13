import { Container } from "react-bootstrap";
import { PlayFill, Repeat, Shuffle, SkipBackwardFill, SkipForwardFill } from "react-bootstrap-icons";

const Playerbar = () => {
  return (
    <Container fluid className="bg-container sticky-bottom flex-column justify-content-center">
      <div className="d-flex justify-content-center align-items-center fs-4 playerControls">
        <Shuffle className="text-secondary me-4" />
        <SkipBackwardFill className="text-secondary me-4" />
        <PlayFill className="text-secondary me-4 fs-1" />
        <SkipForwardFill className="text-secondary me-4" />
        <Repeat className="text-secondary me-4" />
      </div>
      <div className="progress mt-3 ">
        <div role="progressbar"></div>
        {/* da fixare dopo il posizionamento */}
      </div>
    </Container>
  );
};

export default Playerbar;
