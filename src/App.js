import { Route, Routes } from "react-router-dom"
import Error from "./Error"
import SingleMovie from "./SingleMovie"
import Home from "./Home"
import "./App.css"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </>
  )
}

export default App