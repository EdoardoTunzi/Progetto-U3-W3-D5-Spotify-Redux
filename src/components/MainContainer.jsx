import MainView from "./MainView";
import Playerbar from "./Playerbar";

const MainContainer = () => {
  return (
    <div className="flex-column">
      <MainView />
      <Playerbar />
    </div>
  );
};

export default MainContainer;
