import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="text-center py-4 text-gray-400 text-sm border-t border-gray-800 mt-24">
            <p>Copyright © 2025 AI Website Builder. <Link to={'https://portfolio-zeta-three.vercel.app/'} target="_blank" className="text-indigo-600">AbdelRahman</Link></p>
        </div>
    )
}

export default Footer