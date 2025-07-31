import { useState } from 'react'
import { professionals } from '../data/mockData'
import { Professional } from '../types'

export default function ConnectorPortal() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null)
  const [showRequestForm, setShowRequestForm] = useState(false)

  const filteredProfessionals = professionals.filter(prof =>
    prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prof.expertise.some(exp => exp.toLowerCase().includes(searchTerm.toLowerCase())) ||
    prof.passions.some(passion => passion.toLowerCase().includes(searchTerm.toLowerCase())) ||
    prof.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleRequestMeeting = (prof: Professional) => {
    setSelectedProfessional(prof)
    setShowRequestForm(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Professional Connector Portal</h2>
        <p className="text-gray-600">
          Connect with community adults who have relevant domain expertise and are passionate about mentoring
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <input
          type="text"
          placeholder="Search by name, expertise, or passion (e.g., 'sustainable technology', 'marine biology')..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProfessionals.map((prof) => (
          <div
            key={prof.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={prof.imageUrl}
                  alt={prof.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{prof.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{prof.title}</p>
                  <div className="flex items-center mt-2">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        prof.availability === 'available'
                          ? 'bg-green-100 text-green-800'
                          : prof.availability === 'busy'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {prof.availability === 'available' ? 'Available' : 
                       prof.availability === 'busy' ? 'Limited Availability' : 'Unavailable'}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-700">{prof.bio}</p>

              <div className="mt-4">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Expertise
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {prof.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Passions
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {prof.passions.map((passion) => (
                    <span
                      key={passion}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-purple-100 text-purple-800"
                    >
                      {passion}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleRequestMeeting(prof)}
                disabled={prof.availability === 'unavailable'}
                className={`mt-6 w-full ${
                  prof.availability === 'unavailable'
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } px-4 py-2 rounded-lg font-medium transition-colors`}
              >
                {prof.availability === 'unavailable' ? 'Currently Unavailable' : 'Request Meeting'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showRequestForm && selectedProfessional && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Request Meeting with {selectedProfessional.name}
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Student Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                  placeholder="Enter student name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Purpose of Meeting
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                  rows={3}
                  placeholder="Describe what the student hopes to learn or discuss..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Relevant Student Projects/Interests
                </label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                  rows={2}
                  placeholder="Share any relevant background..."
                />
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowRequestForm(false)
                    alert('Meeting request sent! You will receive a response within 48 hours.')
                  }}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowRequestForm(false)}
                  className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}