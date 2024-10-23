import { useState } from "react";
import "./App.css";
import Allproducts from "./assets/Component/Allproducts/Allproducts";
import Cardcontainer from "./assets/Component/Cartcontainer/Cartcontainer";
import Header from "./assets/Component/Header";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });

  console.log(isActive);

  const handleIsActiveState = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        status: "about",
      });
    }
  };

  console.log(isActive);

  return (
    <>
      <Header className=""></Header>
      <div className="flex justify-around mt-10">
        <Allproducts></Allproducts>
        <Cardcontainer
          handleIsActiveState={handleIsActiveState}
          isActive={isActive}
        ></Cardcontainer>
      </div>
    </>
  );
}

export default App;
