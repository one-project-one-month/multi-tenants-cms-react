import type React from "react"

import { useNavigate } from "react-router"
import { ArrowLeft } from "lucide-react"

export default function PageRequestForm() {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {    
  }

  const handleGoBack = () => {
    navigate("/")
  }

  return (
    <section className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Your Custom Page</h1>
            <p className="text-gray-600">Tell us about your project and we'll get back to you within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
          </form>
        </div>
      </div>
    </section>
  )
}
