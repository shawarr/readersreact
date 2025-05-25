import {Header} from "@/components/Header.tsx"
import './App.css'
import {Search} from "@/components/Search.tsx";
import {Nav} from "@/components/Nav";
import {OfferCarousel} from "@/components/OfferCarousel";

function App() {

  return (
    <>
      <Header/>
        <Search/>
        <Nav/>
        <OfferCarousel/>
    </>

  )
}

export default App
