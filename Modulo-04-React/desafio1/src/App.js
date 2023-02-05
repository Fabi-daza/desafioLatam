import Header from "./components/Header"
import Card from "./components/Card"
import "./App.css";
import Footer from "./components/Footer";
import imagenes from "./img/imagenes";

function App() {
  return (
    <>
      <div className="m-3">
        <Header title="Galería de Imagenes con React" />
      </div>
      <div className="m-5 d-flex flex-column flex-md-row justify-content-center align-items-center ">
        <Card
          url={imagenes[0].img}
          titulo={imagenes[0].title}
          info={imagenes[0].description}/>
        <Card
          url={imagenes[1].img}
          titulo={imagenes[1].title}
          info={imagenes[1].description} />
        <Card
          url={imagenes[2].img}
          titulo={imagenes[2].title}
          info={imagenes[2].description} />
      </div>
      <div>
        <Footer />
      </div>
    </>

  )
}

export default App;
