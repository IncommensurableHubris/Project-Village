import { useState } from 'react'
import { alexTan } from '../data/mockData'
import { ChatMessage, EmployerQuery } from '../types'

type SubPortal = 'cv' | 'chat' | 'task'

export default function StudentAvatarPortal() {
  const [activeSubPortal, setActiveSubPortal] = useState<SubPortal>('cv')
  const [employerQuery, setEmployerQuery] = useState<EmployerQuery>({
    company: '',
    role: '',
    requirements: []
  })
  const [generatedCV, setGeneratedCV] = useState<string | null>(null)
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [currentMessage, setCurrentMessage] = useState('')
  const [taskInput, setTaskInput] = useState('')
  const [taskResponse, setTaskResponse] = useState<string | null>(null)

  const generateCV = () => {
    if (!employerQuery.company || !employerQuery.role) return

    const relevantCredentials = alexTan.credentials.filter(cred => {
      if (employerQuery.role.toLowerCase().includes('product') || employerQuery.role.toLowerCase().includes('tech')) {
        return cred.category === 'Technology' || cred.title.includes('AI') || cred.title.includes('Innovation')
      }
      if (employerQuery.role.toLowerCase().includes('social') || employerQuery.role.toLowerCase().includes('impact')) {
        return cred.category === 'Business & Social Impact'
      }
      return true
    })

    const cv = `
# ${alexTan.name} - Tailored Portfolio for ${employerQuery.company}

## Position: ${employerQuery.role}

### Executive Summary
${alexTan.bio}

Age: ${alexTan.age} | Location: Singapore

### Relevant Achievements

${relevantCredentials.map(cred => `
#### ${cred.title}
*Verified by ${cred.verifiedBy} - ${new Date(cred.dateEarned).toLocaleDateString('en-SG', { month: 'long', year: 'numeric' })}*

${cred.evidence.description}

**Key Metrics:**
${cred.evidence.portfolioItems.flatMap(item => item.metrics || []).map(metric => 
  `- ${metric.label}: ${metric.value}`
).join('\n')}
`).join('\n')}

### Why I'm a Great Fit for ${employerQuery.company}

Based on the ${employerQuery.role} position, my experience demonstrates:

${employerQuery.role.toLowerCase().includes('product') ? 
`- **User-Centered Design**: Developed AI medication app with 4.8/5 usability score from elderly users
- **Technical Implementation**: Built full-stack solutions with 92% code coverage
- **Impact Measurement**: Increased medication adherence by 40% through thoughtful UX` :
employerQuery.role.toLowerCase().includes('tech') ?
`- **Advanced Programming**: Verified expertise in AI/ML and distributed systems
- **Real-World Applications**: Deployed solutions serving 150+ daily active users
- **Innovation**: Applied cutting-edge tech to solve practical problems` :
`- **Leadership**: Founded and scaled social enterprise reaching 2000+ beneficiaries  
- **Strategic Thinking**: Developed comprehensive business plans and partnerships
- **Execution**: Successfully deployed initiatives across multiple locations`}

### Core Competencies
${alexTan.interests.filter((_, i) => i < 5).map(interest => `- ${interest}`).join('\n')}
    `

    setGeneratedCV(cv)
  }

  const handleChatSubmit = () => {
    if (!currentMessage.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      message: currentMessage,
      timestamp: new Date()
    }

    let avatarResponse = ''

    if (currentMessage.toLowerCase().includes('leadership')) {
      avatarResponse = "Alex has demonstrated exceptional leadership through the 'Books for Migrant Workers' initiative. Starting from scratch, Alex developed a comprehensive business plan, negotiated partnerships with 15 dormitories, and built a distribution network that has already delivered over 2,000 books in 8 languages. The initiative required coordinating with multiple stakeholders, managing volunteers, and creating sustainable systems for book collection and distribution."
    } else if (currentMessage.toLowerCase().includes('technical') || currentMessage.toLowerCase().includes('programming')) {
      avatarResponse = "Alex's technical skills span multiple domains. In the AI medication reminder app, Alex implemented machine learning algorithms for personalized reminders, designed a voice interface for elderly users, and achieved 92% code coverage. The solar water purification project required understanding of IoT sensors, solar panel optimization, and remote monitoring systems. Alex is proficient in Python, JavaScript, and has experience with cloud deployment."
    } else if (currentMessage.toLowerCase().includes('diverse') || currentMessage.toLowerCase().includes('user')) {
      avatarResponse = "Alex has extensive experience working with diverse user groups. The elderly medication app required deep empathy and understanding of accessibility needs, resulting in a 4.8/5 usability score. The migrant worker initiative involved understanding cultural sensitivities across 8 different language groups. The solar purification project meant working closely with rural Indonesian communities to ensure the solution met their specific needs."
    } else if (currentMessage.toLowerCase().includes('problem solving')) {
      avatarResponse = "Alex approaches problems systematically. For the solar water purification system, Alex first spent weeks understanding the community's needs, then researched various purification methods, created multiple prototypes, and iterated based on field testing. The result was a solution that reduced waterborne illness by 95% while being 70% cheaper than alternatives. This methodical approach is consistent across all of Alex's projects."
    } else {
      avatarResponse = "I'd be happy to share more about Alex's experience. Could you ask about specific areas like leadership experience, technical projects, work with diverse communities, or problem-solving approach? Alex has rich experiences across sustainable technology, social entrepreneurship, AI development, and creative media production."
    }

    const avatarMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'avatar',
      message: avatarResponse,
      timestamp: new Date()
    }

    setChatMessages(prev => [...prev, userMessage, avatarMessage])
    setCurrentMessage('')
  }

  const generateTaskResponse = () => {
    if (!taskInput.trim()) return

    let response = ''

    if (taskInput.toLowerCase().includes('onboarding') || taskInput.toLowerCase().includes('user flow')) {
      response = `## Alex's Approach: ${taskInput}

### 1. User Research Phase
Drawing from the elderly medication app experience:
- Conduct interviews with 20+ target users to understand pain points
- Create user personas based on actual data (similar to the 50 elderly users tested)
- Map current user journey and identify friction points

### 2. Design Principles
Based on my experience achieving 4.8/5 usability score:
- **Simplicity First**: Remove all non-essential elements
- **Clear Visual Hierarchy**: Use size, color, and spacing to guide users
- **Progressive Disclosure**: Don't overwhelm new users
- **Accessibility**: Ensure WCAG compliance from the start

### 3. Proposed Flow
1. **Welcome Screen**: Single clear value proposition
2. **Minimal Registration**: Only essential info (learned from migrant worker project)
3. **Guided First Action**: Help users achieve one success immediately
4. **Celebration**: Positive reinforcement (increased engagement by 40% in med app)
5. **Next Steps**: Clear path forward without overwhelming

### 4. Implementation Plan
- Wireframe with user feedback loops
- A/B test critical decision points
- Monitor drop-off rates at each step
- Iterate based on data (not assumptions)

### 5. Success Metrics
From my project experience:
- Completion rate >80% (vs industry average 50%)
- Time to first value <2 minutes
- User satisfaction >4.5/5
- 30-day retention >60%`
    } else if (taskInput.toLowerCase().includes('database') || taskInput.toLowerCase().includes('schema')) {
      response = `## Alex's Approach: ${taskInput}

### 1. Requirements Analysis
From my distributed systems experience:
- Identify data relationships and access patterns
- Estimate scale (users, transactions, growth)
- Define performance requirements
- Consider compliance needs (especially for fintech)

### 2. Design Principles
- **Normalization vs Performance**: Balance based on use cases
- **Scalability**: Design for 10x current load
- **Data Integrity**: Strong constraints where critical
- **Flexibility**: Allow for future changes

### 3. Technical Implementation
Based on my full-stack experience:
- Use appropriate indexes for query patterns
- Implement proper foreign key constraints
- Plan for data archival from day one
- Consider read/write splitting if needed

### 4. Security Considerations
From fintech exposure:
- Encrypt sensitive data at rest
- Implement row-level security
- Audit trail for all changes
- GDPR/PDPA compliance built-in`
    } else {
      response = `## Alex's Approach: ${taskInput}

### Understanding the Challenge
Based on my diverse project experience, I would approach this task by:

1. **Research Phase**: Understanding the context, constraints, and success criteria
2. **Planning Phase**: Breaking down the task into manageable components
3. **Execution Phase**: Implementing with regular checkpoints
4. **Validation Phase**: Testing with real users/data
5. **Iteration Phase**: Refining based on feedback

### Relevant Experience
My background in ${alexTan.credentials.map(c => c.category).filter((v, i, a) => a.indexOf(v) === i).join(', ')} provides unique perspectives for this challenge.

### Proposed Method
1. Start with the end user in mind
2. Build a minimal viable solution first
3. Get feedback early and often
4. Measure impact quantitatively
5. Document learnings for future reference

Would you like me to elaborate on any specific aspect of this approach?`
    }

    setTaskResponse(response)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Avatar Portal</h2>
        <p className="text-gray-600">
          Generate bespoke presentations of student capabilities for specific opportunities
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveSubPortal('cv')}
            className={`flex-1 px-4 py-3 text-sm font-medium ${
              activeSubPortal === 'cv'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            CV Generator
          </button>
          <button
            onClick={() => setActiveSubPortal('chat')}
            className={`flex-1 px-4 py-3 text-sm font-medium ${
              activeSubPortal === 'chat'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Interactive Chat
          </button>
          <button
            onClick={() => setActiveSubPortal('task')}
            className={`flex-1 px-4 py-3 text-sm font-medium ${
              activeSubPortal === 'task'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Task Demonstrator
          </button>
        </div>

        <div className="p-6">
          {activeSubPortal === 'cv' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Generate Tailored CV/Portfolio
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company Name</label>
                    <input
                      type="text"
                      value={employerQuery.company}
                      onChange={(e) => setEmployerQuery({ ...employerQuery, company: e.target.value })}
                      placeholder="e.g., Shopee"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <input
                      type="text"
                      value={employerQuery.role}
                      onChange={(e) => setEmployerQuery({ ...employerQuery, role: e.target.value })}
                      placeholder="e.g., Junior Product Manager"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                    />
                  </div>
                  <button
                    onClick={generateCV}
                    disabled={!employerQuery.company || !employerQuery.role}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Generate Tailored CV
                  </button>
                </div>
              </div>

              {generatedCV && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap text-sm">{generatedCV}</pre>
                  </div>
                  <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Download as PDF
                  </button>
                </div>
              )}
            </div>
          )}

          {activeSubPortal === 'chat' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Chat with Alex's Avatar
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Ask questions about Alex's experience, skills, and projects
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-y-auto">
                {chatMessages.length === 0 ? (
                  <div className="text-center text-gray-500 mt-8">
                    <p className="mb-4">Start a conversation by asking about:</p>
                    <div className="space-y-2 text-sm">
                      <p>• "Tell me about Alex's leadership experience"</p>
                      <p>• "Has Alex worked with diverse user groups?"</p>
                      <p>• "What technical projects has Alex completed?"</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {chatMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            msg.sender === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-white text-gray-800 border border-gray-200'
                          }`}
                        >
                          {msg.message}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex space-x-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                  placeholder="Type your question..."
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                />
                <button
                  onClick={handleChatSubmit}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Send
                </button>
              </div>
            </div>
          )}

          {activeSubPortal === 'task' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Task-Based Capability Demonstrator
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Input a specific task to see how Alex would approach it
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Task Description</label>
                  <textarea
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    placeholder="e.g., Design a user onboarding flow for a fintech app"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
                    rows={3}
                  />
                </div>
                <button
                  onClick={generateTaskResponse}
                  disabled={!taskInput.trim()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Generate Response
                </button>
              </div>

              {taskResponse && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap text-sm">{taskResponse}</pre>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}