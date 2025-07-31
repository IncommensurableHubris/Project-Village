export interface Professional {
  id: string
  name: string
  title: string
  background: string
  expertise: string[]
  passions: string[]
  imageUrl?: string
  availability: 'available' | 'busy' | 'unavailable'
  bio: string
}

export interface MicroCredential {
  id: string
  title: string
  verifiedBy: string
  verifierId: string
  dateEarned: string
  evidence: {
    description: string
    portfolioItems: PortfolioItem[]
  }
  category: string
}

export interface PortfolioItem {
  type: 'document' | 'video' | 'image' | 'link' | 'code'
  title: string
  description: string
  url?: string
  metrics?: { label: string; value: string }[]
}

export interface Student {
  id: string
  name: string
  age: number
  bio: string
  imageUrl?: string
  credentials: MicroCredential[]
  interests: string[]
}

export interface EmployerQuery {
  company: string
  role: string
  requirements: string[]
}

export interface ChatMessage {
  id: string
  sender: 'user' | 'avatar'
  message: string
  timestamp: Date
}