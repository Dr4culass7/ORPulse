export interface Application {
  id: string
  name: string
  description: string
  features: string[]
  status: 'live' | 'coming-soon'
  url?: string
  icon: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}