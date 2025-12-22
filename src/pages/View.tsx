import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import ProjectPreview from "../components/ProjectPreview"
import type { Project } from "../types"
import api from "@/configs/axios"
import { toast } from "sonner"

const View = () => {

  const { projectId } = useParams()
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchCode = async () => {
    try {
      const { data } = await api.get(`api/project/published/${projectId}`)
      setCode(data.code)
      setLoading(false)
    } catch (error: any) {
      toast.error(error?.response?.data?.message || error.message)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <Loading />

  return (
    <div className="h-screen">
      {code && <ProjectPreview project={{ current_code: code } as Project} isGenerating={false} showEditorPanel={false} />}
    </div>
  )
}

export default View 