import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MyProject from "./pages/MyProject"
import Preview from "./pages/Preview"
import Pricing from "./pages/Pricing"
import Projects from "./pages/Projects"
import { View } from "lucide-react"
import Community from "./pages/Community"
import Navbar from "./components/Navbar"
import Loading from "./components/Loading"

const App = () => {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/projects/:projectId" element={<Projects />} />
        <Route path="/projects" element={<MyProject />} />
        <Route path="/preview/:projectId" element={<Preview />} />
        <Route path="/preview/:projectId/:versionId" element={<Preview />} />
        <Route path="/community" element={<Community />} />
        <Route path="/view/:projectId" element={<View />} />

      </Routes>
    </div>
  )
}

export default App