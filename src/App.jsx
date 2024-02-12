import "./App.scss";
import { Header } from "./layout/Header/Header";
import { Card } from "./layout/components/Card/Card";

const data = {
  theme: "INTERNET",
  date: "June 28, 2021",
  heading: "How to design a product that can grow itself 10x in year",
  text: "Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.",
  author: {
    name: "Jenny Wilson",
    profession: "Product Designer",
    ava: "./src/images/author.webp",
  },
  image: "./src/images/card-post.webp",
};




function App() {
  return (
    <>
      <Header />
      <Card data={data } />
    </>
  )
export default App;
