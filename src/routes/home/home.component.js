import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import Button from "../../components/button/button.component";

const Home = () => {
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/shop");
  };
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent",
            marginBottom: "12px",
          }}
        >
          <Button style={{ fontSize: "100px" }} buttonType={""} onClick={{}}>
            CATEGORIES
          </Button>
        </div>
        <Directory categories={categories} />
        <Outlet />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent",
          }}
        >
          <Button onClick={goToShop}>CLICK ME TO EXPLORE STUFF</Button>
        </div>
      </div>
    </>
  );
};

export default Home;
