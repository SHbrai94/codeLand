export type ProjectTech = 'Scratch' | 'Python' | 'Web' | 'AI'

export interface GalleryProject {
  id: string
  title: string
  tech: ProjectTech
  ageRange: string
  description: string
  emoji: string
}

export const PROJECTS: GalleryProject[] = [
  {
    id: 'space-adventure',
    title: 'مغامرة الفضاء',
    tech: 'Scratch',
    ageRange: '6–10 سنوات',
    description: 'لعبة تفاعلية بسيطة يتنقّل فيها بطل الفضاء بين الكواكب متجنبًا العقبات.',
    emoji: '🚀',
  },
  {
    id: 'interactive-story',
    title: 'قصة القط المغامر',
    tech: 'Scratch',
    ageRange: '6–10 سنوات',
    description: 'قصة تفاعلية يتحكم فيها الطفل بمسار الأحداث من خلال اختيارات متعددة.',
    emoji: '🐱',
  },
  {
    id: 'number-guess',
    title: 'لعبة تخمين الأرقام',
    tech: 'Python',
    ageRange: '9–14 سنة',
    description: 'أول برنامج حقيقي بلغة Python يطلب من اللاعب تخمين رقم عشوائي بأقل عدد محاولات.',
    emoji: '🎲',
  },
  {
    id: 'simple-calculator',
    title: 'آلة حاسبة صغيرة',
    tech: 'Python',
    ageRange: '9–14 سنة',
    description: 'أداة تحسب العمليات الحسابية الأساسية، مبنية بالكامل بأكواد Python.',
    emoji: '🧮',
  },
  {
    id: 'personal-site',
    title: 'موقعي التعريفي',
    tech: 'Web',
    ageRange: '9–14 سنة',
    description: 'صفحة ويب شخصية صمّمها الطفل بنفسه باستخدام HTML وCSS، بألوانه وتنسيقه الخاص.',
    emoji: '🌐',
  },
  {
    id: 'photo-gallery',
    title: 'معرض صور',
    tech: 'Web',
    ageRange: '9–14 سنة',
    description: 'صفحة ويب تعرض مجموعة صور بتنسيق شبكي أنيق، مع تنسيقات CSS مخصصة.',
    emoji: '🖼️',
  },
  {
    id: 'simple-chatbot',
    title: 'روبوت دردشة بسيط',
    tech: 'AI',
    ageRange: '10–14 سنة',
    description: 'مشروع تمهيدي يتعرف فيه الطفل على فكرة روبوتات الدردشة وكيف تستجيب للأسئلة.',
    emoji: '🤖',
  },
  {
    id: 'image-classifier',
    title: 'مصنّف صور بسيط',
    tech: 'AI',
    ageRange: '10–14 سنة',
    description: 'مشروع تعريفي يوضح كيف يتعرف الذكاء الاصطناعي على أنماط داخل الصور.',
    emoji: '🔍',
  },
]

export const PROJECT_TECHS: ProjectTech[] = ['Scratch', 'Python', 'Web', 'AI']
