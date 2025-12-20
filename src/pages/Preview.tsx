import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { dummyProjects } from "../assets/assets"
import Loading from "../components/Loading"
import ProjectPreview from "../components/ProjectPreview"
import type { Project } from "../types"

const Preview = () => {

  const { projectId, versionId } = useParams()

  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchCode = async () => {

    setTimeout(() => {
      const code = dummyProjects.find(project => project.id === projectId)?.current_code;
      if (code) {
        setCode(code)
        setLoading(false)
      }
    }, 2000)
  }

  useEffect(() => {
    fetchCode()
    // eslint-disable-next-line
  }, [])

  if (loading) return <Loading />

  return (
    <div className="h-screen">
      {code && <ProjectPreview project={{ current_code: code } as Project} isGenerating={false} showEditorPanel={false} />}
    </div>
  )
}

export default Preview