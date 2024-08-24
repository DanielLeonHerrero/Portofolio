
import React from 'react'
import TypingEffect from '../../typing/typing.jsx'
const WelcomeSection = () => {  
    const roles = ["de Aplicaciones", "Web", "de API's"];
    return (
        <div className="relative h-screen bg-center bg-cover text-white" style={{ backgroundImage: "url('/images/background.jpg')", backgroundAttachment: "fixed" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <section className="flex flex-col gap-5 items-center justify-center text-white m-10 text-center">
              <p className="text-lg sm:text-3xl">Hola! 👋🏻</p>
              <p className="font-bold text-3xl sm:text-6xl lg:text-7xl dark:text-black">Soy Daniel Leon Herrero</p>
              <p className="text-xl md:text-4xl">
                <span>Un Desarrollador </span>
                {<TypingEffect textList={roles} />}
                <span className="animate-blink">|</span></p>
            </section>
          </div>
        </div>
    )
}

export default WelcomeSection