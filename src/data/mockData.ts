import { Professional, Student, MicroCredential } from '../types'

export const professionals: Professional[] = [
  {
    id: '1',
    name: 'Dr. Sarah Lim',
    title: 'Former NASA Engineer, Sustainable Tech Entrepreneur',
    background: 'PhD in Aerospace Engineering from MIT, 10 years at NASA Jet Propulsion Lab',
    expertise: ['Space Technology', 'Sustainable Engineering', 'Systems Design', 'Robotics'],
    passions: ['Environmental Tech', 'STEM Education', 'Women in Engineering'],
    availability: 'available',
    bio: 'After a decade designing Mars rover systems, I returned to Singapore to found GreenSpace Technologies. Passionate about applying space tech to solve environmental challenges.',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    title: 'Senior Software Architect at Grab',
    background: 'MS Computer Science from NUS, 15 years in tech industry',
    expertise: ['Software Architecture', 'AI/ML', 'Distributed Systems', 'Mobile Development'],
    passions: ['Urban Farming', 'Tech for Good', 'Open Source'],
    availability: 'available',
    bio: 'Building scalable systems by day, growing vertical farms by night. Love mentoring young developers and exploring how tech can revolutionize agriculture.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    id: '3',
    name: 'Priya Nair',
    title: 'Former McKinsey Consultant, Social Enterprise Founder',
    background: 'MBA from INSEAD, 8 years at McKinsey & Company',
    expertise: ['Business Strategy', 'Social Impact', 'Education Innovation', 'Entrepreneurship'],
    passions: ['Education Equity', 'Youth Empowerment', 'Sustainable Business'],
    availability: 'busy',
    bio: 'Left consulting to found EduBridge, connecting underserved youth with quality education. Believer in business as a force for good.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
  },
  {
    id: '4',
    name: 'David Tan',
    title: 'Award-winning Documentary Filmmaker',
    background: 'Former BBC Journalist, Emmy Award Winner',
    expertise: ['Documentary Production', 'Storytelling', 'Video Editing', 'Journalism'],
    passions: ['Cultural Heritage', 'Environmental Stories', 'Youth Media'],
    availability: 'available',
    bio: '20 years telling stories that matter. Now focused on preserving Southeast Asian heritage through film and mentoring young storytellers.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  },
  {
    id: '5',
    name: 'Lisa Wong',
    title: 'Former Michelin Chef, Food Sustainability Advocate',
    background: 'Trained at Le Cordon Bleu, Former Head Chef at 2-Michelin Star Restaurant',
    expertise: ['Culinary Arts', 'Food Science', 'Sustainable Agriculture', 'Nutrition'],
    passions: ['Zero Waste Cooking', 'Local Ingredients', 'Food Education'],
    availability: 'available',
    bio: 'From haute cuisine to sustainable food systems. Teaching the next generation to cook with consciousness and creativity.',
    imageUrl: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop'
  },
  {
    id: '6',
    name: 'Prof. James Kumar',
    title: 'Marine Biologist, Coral Reef Expert',
    background: 'PhD Marine Biology from James Cook University, 25 years research experience',
    expertise: ['Marine Biology', 'Coral Restoration', 'Climate Science', 'Conservation'],
    passions: ['Ocean Conservation', 'Citizen Science', 'Environmental Education'],
    availability: 'available',
    bio: 'Leading coral restoration projects across Southeast Asia. Passionate about engaging youth in marine conservation through hands-on science.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
  },
  {
    id: '7',
    name: 'Rachel Goh',
    title: 'Former Investment Banker, FinTech Founder',
    background: 'Previously VP at Goldman Sachs, Founded PayWise',
    expertise: ['Finance', 'FinTech', 'Blockchain', 'Startup Strategy'],
    passions: ['Financial Inclusion', 'Women in Tech', 'Impact Investing'],
    availability: 'busy',
    bio: 'Transitioned from Wall Street to building inclusive financial solutions for Southeast Asia. Love sharing the entrepreneurial journey.',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop'
  }
]

const alexCredentials: MicroCredential[] = [
  {
    id: 'cred1',
    title: 'Sustainable Technology Innovation',
    verifiedBy: 'Dr. Sarah Lim',
    verifierId: '1',
    dateEarned: '2024-08-15',
    category: 'Engineering',
    evidence: {
      description: 'Built solar-powered water purification system for kampong in Indonesia',
      portfolioItems: [
        {
          type: 'document',
          title: 'Technical Blueprints',
          description: 'Complete engineering drawings and specifications',
          metrics: [
            { label: 'Purification Capacity', value: '1000L/day' },
            { label: 'Solar Efficiency', value: '85%' }
          ]
        },
        {
          type: 'video',
          title: 'System Demonstration',
          description: 'Field testing and community implementation',
          url: 'https://example.com/video',
          metrics: [
            { label: 'Villagers Served', value: '500+' },
            { label: 'Cost Reduction', value: '70%' }
          ]
        },
        {
          type: 'document',
          title: 'Impact Report',
          description: 'Six-month assessment of health and economic benefits',
          metrics: [
            { label: 'Waterborne Illness Reduction', value: '95%' },
            { label: 'Time Saved Daily', value: '3 hours/family' }
          ]
        }
      ]
    }
  },
  {
    id: 'cred2',
    title: 'Digital Storytelling & Media Production',
    verifiedBy: 'David Tan',
    verifierId: '4',
    dateEarned: '2024-09-20',
    category: 'Media Arts',
    evidence: {
      description: 'Created documentary series on Singapore\'s heritage trades',
      portfolioItems: [
        {
          type: 'video',
          title: 'Episode 1: The Last Songkok Maker',
          description: 'Profile of traditional Malay hat craftsman',
          url: 'https://youtube.com/example1',
          metrics: [
            { label: 'Views', value: '18,000' },
            { label: 'Engagement Rate', value: '12.5%' }
          ]
        },
        {
          type: 'video',
          title: 'Episode 2: Rattan Weaving Masters',
          description: 'Exploring the art of traditional furniture making',
          url: 'https://youtube.com/example2',
          metrics: [
            { label: 'Views', value: '22,000' },
            { label: 'Media Features', value: '3' }
          ]
        },
        {
          type: 'document',
          title: 'Singapore Heritage Board Feature',
          description: 'Newsletter article about the documentary series',
          metrics: [
            { label: 'Readership', value: '50,000+' },
            { label: 'School Screenings', value: '15' }
          ]
        }
      ]
    }
  },
  {
    id: 'cred3',
    title: 'Social Enterprise Development',
    verifiedBy: 'Priya Nair',
    verifierId: '3',
    dateEarned: '2024-10-10',
    category: 'Business & Social Impact',
    evidence: {
      description: 'Founded "Books for Migrant Workers" initiative',
      portfolioItems: [
        {
          type: 'document',
          title: 'Business Plan',
          description: 'Comprehensive strategy for book collection and distribution',
          metrics: [
            { label: 'Projected Reach', value: '5,000 workers/year' },
            { label: 'Cost per Book', value: '$0.50' }
          ]
        },
        {
          type: 'document',
          title: 'Partnership Agreements',
          description: 'MOUs with 15 worker dormitories',
          metrics: [
            { label: 'Dormitories Partnered', value: '15' },
            { label: 'Distribution Points', value: '25' }
          ]
        },
        {
          type: 'image',
          title: 'Impact Dashboard',
          description: 'Real-time tracking of books distributed',
          metrics: [
            { label: 'Books Distributed', value: '2,000+' },
            { label: 'Languages Covered', value: '8' }
          ]
        }
      ]
    }
  },
  {
    id: 'cred4',
    title: 'Advanced Programming & AI',
    verifiedBy: 'Marcus Chen',
    verifierId: '2',
    dateEarned: '2024-11-05',
    category: 'Technology',
    evidence: {
      description: 'Developed AI-powered app for elderly medication reminders',
      portfolioItems: [
        {
          type: 'code',
          title: 'GitHub Repository',
          description: 'Full source code with documentation',
          url: 'https://github.com/example/medreminder',
          metrics: [
            { label: 'Code Coverage', value: '92%' },
            { label: 'Contributors', value: '5' }
          ]
        },
        {
          type: 'document',
          title: 'User Testing Results',
          description: 'Feedback from 50 elderly users',
          metrics: [
            { label: 'Usability Score', value: '4.8/5' },
            { label: 'Medication Adherence', value: '+40%' }
          ]
        },
        {
          type: 'document',
          title: 'Deployment Report',
          description: 'Pilot implementation in nursing homes',
          metrics: [
            { label: 'Facilities Using', value: '3' },
            { label: 'Daily Active Users', value: '150+' }
          ]
        }
      ]
    }
  }
]

export const alexTan: Student = {
  id: 'student1',
  name: 'Alex Tan',
  age: 16,
  bio: 'Passionate about using technology to solve real-world problems. Self-directed learner with interests spanning engineering, social impact, and creative media.',
  imageUrl: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400&h=400&fit=crop',
  credentials: alexCredentials,
  interests: ['Sustainable Technology', 'AI/ML', 'Social Entrepreneurship', 'Documentary Film', 'Marine Conservation']
}