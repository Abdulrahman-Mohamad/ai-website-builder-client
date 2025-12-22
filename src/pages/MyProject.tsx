import { useEffect, useState } from "react"
import type { Project } from "../types"
import Loading from "../components/Loading"
import { PlusIcon, TrashIcon } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { toast } from "sonner"
import api from "@/configs/axios"
import { authClient } from "@/lib/auth-client"

const MyProject = () => {
  const { data: session, isPending } = authClient.useSession()
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState<Project[]>([])

  const navigate = useNavigate()

  const fetchProjects = async () => {
    try {
      const { data } = await api.get('/api/user/projects')
      setProjects(data?.projects)
      setLoading(false)
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message)
      console.log(error)
    }
  }

  const deleteProject = async (projectId: string) => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this project?')
      if (!confirm) return

      const { data } = await api.delete(`/api/project/${projectId}`)
      toast.success(data?.message)
      fetchProjects()
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message)
      console.log(error)
    }
  }


  useEffect(() => {
    if (session?.user && !isPending) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchProjects();
    } else if (!isPending && !session?.user) {
      navigate('/')
      toast('Please login to view your projects')
    }
    // eslint-disable-next-line 
  }, [session?.user])
  return (
    <>
      <div className="px-4 md:px-16 lg:px-24 xl:px-32 pt-10 lg:pt-14">
        {loading ? (
          <Loading />
        ) : projects.length > 0 ? (
          <div className="py-10 min-h-[80vh]">
            <div className="flex items-center justify-between mb-12">
              <h1 className="text-2xl font-medium text-white">My Projects</h1>
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-white px-3 sm:px-6 py-1 sm:py-2 rounded bg-linear-to-br from-indigo-500 to-indigo-600 hover:opacity-90 active:scale-95 transition-all"><PlusIcon size={18} /> Create New</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {projects.map((project) => (
                <div
                  onClick={() => navigate(`/projects/${project.id}`)}
                  key={project.id}
                  className="relative group max-sm:mx-auto cursor-pointer bg-gray-900/60 border border-gray-700 rounded-lg overflow-hidden shadow-md group hover:shadow-indigo-700/30 hover:border-indigo-800/80 transition-all duration-300">
                  {/*  Desktop-like Mini Preview*/}
                  <div className="relative w-full h-40 bg-gray-900 overflow-hidden border-b border-gray-800">
                    {project.current_code ? (
                      <iframe
                        srcDoc={project.current_code}
                        className="absolute top-0 left-0 w-[1200px] h-[800px] origin-top-left pointer-events-none"
                        sandbox="allow-scripts allow-same-origin"
                        style={{ transform: 'scale(0.25)' }}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        <p>No Preview</p>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 text-white bg-linear-180 from-transparent group-hover:from-indigo-950 to-transparent transition-colors">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium line-clamp-2">{project.name}</h2>
                      <button className="px-2.5 py-0.5 mt-1 ms-2 text-base bg-gray-800 border border-gray-700 rounded-full" >Website</button>
                    </div>
                    <p className="text-gray-400 mt-1 text-sm line-clamp-2">{project.initial_prompt}</p>
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center justify-between mt-6">
                      <span className="text-sm text-gray-500">{new Date(project.createdAt).toLocaleDateString()}</span>
                      <div className="flex gap-3 text-white text-sm">

                        <Link
                          to={`/preview/${project.id}`}
                          target="_blank"
                          className="px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded-md transition-all"
                        >Preview</Link>
                        <Link
                          to={`/projects/${project.id}`}
                          className="px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded-md transition-colors"
                        >Open</Link>
                      </div>
                    </div>
                  </div>
                  <div onClick={e => e.stopPropagation()}>
                    <TrashIcon
                      onClick={() => deleteProject(project.id)}
                      className="absolute top-3 right-3 scale-0 group-hover:scale-100 bg-white p-1.5 size-7 rounded text-red-500 text-xl cursor-pointer transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-center flex-col h-[80vh]">
            <h1 className="text-3xl font-semibold text-gray-300">You have no projects yet</h1>
            <button
              onClick={() => navigate('/')}
              className="text-white px-5 py-2 mt-5 rounded-md bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all">Create New</button>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default MyProject