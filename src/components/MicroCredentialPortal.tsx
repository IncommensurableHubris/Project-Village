import { useState } from 'react'
import { alexTan, professionals } from '../data/mockData'
import { MicroCredential, PortfolioItem } from '../types'

export default function MicroCredentialPortal() {
  const [selectedCredential, setSelectedCredential] = useState<MicroCredential | null>(null)
  const student = alexTan

  const getVerifierInfo = (verifierId: string) => {
    return professionals.find(p => p.id === verifierId)
  }

  const getPortfolioIcon = (type: PortfolioItem['type']) => {
    switch (type) {
      case 'document':
        return '📄'
      case 'video':
        return '🎥'
      case 'image':
        return '🖼️'
      case 'code':
        return '💻'
      case 'link':
        return '🔗'
      default:
        return '📎'
    }
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Engineering': 'bg-emerald-100 text-emerald-800',
      'Media Arts': 'bg-purple-100 text-purple-800',
      'Business & Social Impact': 'bg-amber-100 text-amber-800',
      'Technology': 'bg-blue-100 text-blue-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Micro-Credentialing Portal</h2>
        <p className="text-gray-600">
          Track and showcase student achievements with verified portfolio evidence
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-start space-x-6">
          <img
            src={student.imageUrl}
            alt={student.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900">{student.name}</h3>
            <p className="text-gray-600 mt-1">Age {student.age}</p>
            <p className="text-gray-700 mt-2">{student.bio}</p>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {student.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{student.credentials.length}</div>
            <div className="text-sm text-gray-600">Micro-Credentials</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Earned Micro-Credentials</h3>
        {student.credentials.map((credential) => {
          const verifier = getVerifierInfo(credential.verifierId)
          return (
            <div
              key={credential.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedCredential(credential)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-lg font-semibold text-gray-900">{credential.title}</h4>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(credential.category)}`}>
                      {credential.category}
                    </span>
                  </div>
                  <p className="text-gray-700 mt-2">{credential.evidence.description}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {verifier && (
                        <img
                          src={verifier.imageUrl}
                          alt={verifier.name}
                          className="w-8 h-8 rounded-full"
                        />
                      )}
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Verified by {credential.verifiedBy}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(credential.dateEarned).toLocaleDateString('en-SG', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-6">
                  <div className="text-sm text-gray-500 mb-2">Portfolio Evidence</div>
                  <div className="flex space-x-2">
                    {credential.evidence.portfolioItems.map((item, index) => (
                      <div
                        key={index}
                        className="text-2xl"
                        title={item.title}
                      >
                        {getPortfolioIcon(item.type)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Recommended Learning Pathways</h3>
        <p className="text-blue-700 mb-4">
          Based on Alex's interests and achievements, here are suggested next steps:
        </p>
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-white rounded-lg p-4">
            <div>
              <h4 className="font-medium text-gray-900">Advanced AI & Robotics</h4>
              <p className="text-sm text-gray-600">Connect with Dr. Sarah Lim for space robotics applications</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
              Request Mentorship
            </button>
          </div>
          <div className="flex items-center justify-between bg-white rounded-lg p-4">
            <div>
              <h4 className="font-medium text-gray-900">Social Innovation Lab</h4>
              <p className="text-sm text-gray-600">Expand social enterprise with Priya Nair's guidance</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
              Request Mentorship
            </button>
          </div>
        </div>
      </div>

      {selectedCredential && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedCredential.title}</h3>
                <p className="text-gray-600 mt-2">{selectedCredential.evidence.description}</p>
              </div>
              <button
                onClick={() => setSelectedCredential(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-gray-900">Portfolio Evidence</h4>
              {selectedCredential.evidence.portfolioItems.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{getPortfolioIcon(item.type)}</div>
                    <div className="flex-1">
                      <h5 className="text-lg font-medium text-gray-900">{item.title}</h5>
                      <p className="text-gray-700 mt-1">{item.description}</p>
                      {item.metrics && (
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          {item.metrics.map((metric, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-3">
                              <p className="text-sm text-gray-500">{metric.label}</p>
                              <p className="text-xl font-semibold text-gray-900">{metric.value}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {item.url && (
                        <a
                          href={item.url}
                          className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800"
                        >
                          View {item.type === 'code' ? 'Repository' : item.type === 'video' ? 'Video' : 'Resource'}
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}