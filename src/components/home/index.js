import { useSelector } from "react-redux/es";
import MainFile from "./main";
import Tracker from "./tracker";

const Home = () => {
  const user = useSelector((s) => s.user);
  return <>{user ? <Tracker /> : <MainFile />}</>;
};
export default Home;
