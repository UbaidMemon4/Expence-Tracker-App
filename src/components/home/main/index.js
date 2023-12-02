import { Link } from "react-router-dom";
import "./index.css";
import { Button, Form,} from "antd";

const MainFile = () => {
  return (
    <div className="main">
      <h1>Explore Expence Tracker</h1>
      <p>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
        type specimen book. It usually begins with:
      </p>
      <Form>
        <Form.Item>
          <Link to="/login">
            <Button type="primary" className="but">
              Login
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default MainFile;
