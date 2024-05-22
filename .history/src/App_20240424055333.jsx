import ButtonGradient from "./assets/svg/ButtonGradient"
import Benifits from "./components/Benifits"
import Button from "./components/Button"
import Header from "./components/Header"
import Hero from "./components/Hero"


const App = () => {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* <Button className="mt-10" href="#login">
          Something
        </Button> */}

        < Header />
        < Hero />
        < Benifits />
      </div>
      <ButtonGradient />
    </>    
  )
}

export default App
