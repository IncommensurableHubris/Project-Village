import { useState } from 'react'
import Navigation from './components/Navigation'
import ConnectorPortal from './components/ConnectorPortal'
import MicroCredentialPortal from './components/MicroCredentialPortal'
import StudentAvatarPortal from './components/StudentAvatarPortal'

type TabType = 'connectors' | 'credentials' | 'avatar'

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('connectors')

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            Singapore Homeschooling Community Platform
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Connecting students with mentors, tracking achievements, and showcasing capabilities
          </p>
        </div>
      </header>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'connectors' && <ConnectorPortal />}
        {activeTab === 'credentials' && <MicroCredentialPortal />}
        {activeTab === 'avatar' && <StudentAvatarPortal />}
      </main>
    </div>
  )
}

export default App