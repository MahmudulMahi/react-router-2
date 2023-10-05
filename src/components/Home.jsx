import Left from "./left/Left";
import Card from "./left/card/Card";
import Navbar from "./navbar/Navbar";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border col-span-1">
       <Left></Left>
        </div>
  
        <div className="border col-span-3">
        <Card></Card>
        </div>
      </div>
      
    </div>
  );
};

export default Home;