interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: 'connectors' | 'credentials' | 'avatar') => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: 'connectors', name: 'Professional Connectors', description: 'Find mentors and experts' },
    { id: 'credentials', name: 'Micro-Credentials', description: 'Track student achievements' },
    { id: 'avatar', name: 'Student Avatar', description: 'Generate employer presentations' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'connectors' | 'credentials' | 'avatar')}
              className={`${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200`}
            >
              <div className="flex flex-col items-start">
                <span className="font-semibold">{tab.name}</span>
                <span className="text-xs text-gray-400 mt-0.5">{tab.description}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}