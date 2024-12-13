import MainView from "./MainView";
import Playerbar from "./Playerbar";

const MainContainer = () => {
  return (
    <div className="d-flex flex-column mainContainer" style={{ height: "100vh" }}>
      <MainView />
      <Playerbar />
    </div>
  );
};

export default MainContainer;
