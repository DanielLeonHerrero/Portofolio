import Header from "./components/header/header"

function App() {
  return (
    <>
      <div className="relative h-screen bg-center bg-cover text-white" style={{ backgroundImage: "url('/images/background.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Header className="absolute top-0 left-0 right-0" />
      </div>
      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-white m-10 text-center">
        <p className="text-lg sm:text-3xl">Hola! 👋🏻</p>
        <p className="font-bold text-3xl sm:text-6xl lg:text-7xl">Soy Daniel Leon Herrero</p>
        <p className="text-xl md:text-4xl">Un Desarrollador de </p>
      </div>
    </>
  );
}

export default App;