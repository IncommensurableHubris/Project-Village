# Singapore Homeschooling Community Platform Demo

A comprehensive web application demonstrating an innovative platform for the Singapore homeschooling community, featuring three integrated portals that showcase the power of evidence-based, project-driven learning.

## Features

### 1. Professional Connector Portal
Connect students with community adults who have relevant domain expertise:
- **Search & Filter**: Find mentors by name, expertise, or passion areas
- **Rich Profiles**: Detailed professional backgrounds including former NASA engineers, Michelin-starred chefs, and tech entrepreneurs
- **Availability Status**: Real-time availability indicators
- **Meeting Requests**: Integrated scheduling system for mentorship sessions

### 2. Student Micro-Credentialing Portal
Track and showcase student achievements with portfolio evidence:
- **Verified Credentials**: Each achievement verified by domain experts
- **Portfolio Evidence**: Documents, videos, code repositories, and impact metrics
- **Learning Pathways**: AI-recommended next steps based on interests and achievements
- **Visual Dashboard**: Clear presentation of student capabilities and growth

### 3. Student Avatar Portal for Employers
Generate bespoke presentations of student capabilities:
- **CV Generator**: Creates tailored portfolios based on company and role
- **Interactive Chatbot**: Employers can ask specific questions about student experience
- **Task Demonstrator**: Shows how students would approach real-world challenges

## Demo Highlights

### Featured Student: Alex Tan (Age 16)
- **Sustainable Technology**: Built solar-powered water purification system serving 500+ villagers
- **Digital Media**: Created documentary series with 50K+ views on Singapore heritage trades
- **Social Enterprise**: Founded "Books for Migrant Workers" reaching 2000+ beneficiaries
- **AI Development**: Built elderly medication reminder app with 92% code coverage

### Featured Mentors
- Dr. Sarah Lim - Former NASA engineer, sustainable tech entrepreneur
- Marcus Chen - Grab senior architect with urban farming passion
- David Tan - Emmy-winning documentary filmmaker
- And more domain experts across various fields

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Technology Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React hooks
- **UI Components**: Custom responsive components

## Key Demo Scenarios

1. **Mentor Search**: Try searching for "sustainable technology" to find Dr. Sarah Lim
2. **Credential Details**: Click on any micro-credential to see detailed portfolio evidence
3. **CV Generation**: Enter "Shopee" and "Junior Product Manager" to see tailored portfolio
4. **Interactive Chat**: Ask the avatar about "leadership experience" or "technical skills"
5. **Task Demo**: Input "Design a user onboarding flow for a fintech app"

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx
│   ├── ConnectorPortal.tsx
│   ├── MicroCredentialPortal.tsx
│   └── StudentAvatarPortal.tsx
├── data/
│   └── mockData.ts
├── types/
│   └── index.ts
└── App.tsx
```

## Future Enhancements

- Backend API integration
- Real-time messaging system
- Video conferencing integration
- Advanced analytics dashboard
- Multi-student profiles
- Employer portal with job postings

## License

This is a demonstration project for the Singapore homeschooling community.