import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import MyProject from "./pages/MyProject"
import Preview from "./pages/Preview"
import Pricing from "./pages/Pricing"
import Projects from "./pages/Projects"
import Community from "./pages/Community"
import Navbar from "./components/Navbar"
import { useLocation } from "react-router-dom"
import View from "./pages/View"
import { Toaster } from 'sonner'
import AuthPage from "./pages/auth/AuthPage"
import Settings from "./pages/Settings"

const App = () => {
  const { pathname } = useLocation()
  const hideNavbar = pathname.startsWith('/projects/') && pathname !== '/projects'
    || pathname.startsWith('/view/')
    || pathname.startsWith('/preview/')
  return (
    <div>
      <Toaster/>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/projects/:projectId" element={<Projects />} />
        <Route path="/projects" element={<MyProject />} />
        <Route path="/preview/:projectId" element={<Preview />} />
        <Route path="/preview/:projectId/:versionId" element={<Preview />} />
        <Route path="/community" element={<Community />} />
        <Route path="/view/:projectId" element={<View />} />
        <Route path="/auth/:pathname" element={<AuthPage />} />
        <Route path="/account/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

export default App