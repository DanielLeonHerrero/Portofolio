import Header from "./components/header/header"

function App() {
  return (
    <>
      <div className="relative h-screen bg-center bg-cover text-white" style={{ backgroundImage: "url('/images/background.jpg')", backgroundAttachment: "fixed" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Header className="absolute top-0 left-0 right-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <section className="flex flex-col gap-5 items-center justify-center text-white m-10 text-center">
            <p className="text-lg sm:text-3xl">Hola! 👋🏻</p>
            <p className="font-bold text-3xl sm:text-6xl lg:text-7xl">Soy Daniel Leon Herrero</p>
            <p className="text-xl md:text-4xl">Un Desarrollador de </p>
          </section>
        </div>
      </div>
      <div className="relative h-screen bg-white text-black">
        <section className="flex flex-col gap-5 items-center justify-center text-black m-10 text-center">
          <p className="text-lg sm:text-3xl">Nueva Sección</p>
          <p className="font-bold text-3xl sm:text-6xl lg:text-7xl">Contenido de la nueva sección</p>
        </section>
      </div>
    </>
  );
}

export default App;

