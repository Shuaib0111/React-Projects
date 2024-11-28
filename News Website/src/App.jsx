import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import ViewRecipe from "./Pages/ViewNews"
function App() {
  return (
    <><BrowserRouter>
{/* <Home></Home> */}
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/view" element={<ViewRecipe />} />
</Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
