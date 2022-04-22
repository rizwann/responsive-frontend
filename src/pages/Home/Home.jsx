import SizeSelection from "../../components/SizeSelection/SizeSelection";
import Welcome from "../../components/Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Welcome />

      <div>
        <SizeSelection />
      </div>
    </div>
  );
};

export default Home;
