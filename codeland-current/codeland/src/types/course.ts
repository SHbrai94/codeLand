export type LearningMode = 'individual' | 'group'

export interface CourseModule {
  /** Short label for a skill/topic taught in the course (used in "ماذا سيتعلم الطفل؟") */
  label: string
}

export interface CourseProject {
  emoji: string
  title: string
}

export interface Course {
  slug: string
  name: string
  /** Short hook line shown on the card and course hero, e.g. "اصنع ألعابك وقصصك بنفسك 🎮" */
  headline: string
  description: string
  ageRange: string
  /** Numeric bounds mirroring ageRange, used for form validation (inclusive) */
  minAge: number
  maxAge: number
  level: 'مبتدئ' | 'متوسط' | 'متقدم'
  learningModes: LearningMode[]
  sessionDurationMinutes: number
  numberOfSessions: number
  accentColor: 'turquoise' | 'purple' | 'navy' | 'amber'
  icon: 'gamepad' | 'code' | 'globe' | 'sparkles'
  whatChildWillLearn: CourseModule[]
  whatChildWillBuild: CourseProject[]
}
