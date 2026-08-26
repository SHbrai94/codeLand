import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PROJECTS, PROJECT_TECHS, type ProjectTech } from '@/data/projects'
import Seo from '@/components/ui/Seo'

const TECH_LABEL: Record<ProjectTech, string> = {
  Scratch: 'Scratch',
  Python: 'Python',
  Web: 'HTML & CSS',
  AI: 'AI',
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectTech | 'all'>('all')

  const filteredProjects = useMemo(
    () => (activeFilter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.tech === activeFilter)),
    [activeFilter],
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo
        title="المشاريع"
        description="تصفّحي نماذج من مشاريع طلاب CodeLand في Scratch وPython وتصميم الويب والذكاء الاصطناعي."
      />

      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-turquoise/10 px-4 py-1.5 text-sm font-bold text-turquoise">
          معرض المشاريع
        </span>
        <h1 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl">شو ممكن يصنع طفلك؟</h1>
        <p className="mt-4 text-lg text-muted">
          نماذج من نوعية المشاريع اللي يبنيها الطلاب ضمن دورات CodeLand، حسب كل تقنية.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="تصفية حسب التقنية">
        <button
          type="button"
          onClick={() => setActiveFilter('all')}
          aria-pressed={activeFilter === 'all'}
          className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
            activeFilter === 'all' ? 'bg-navy text-white' : 'bg-navy/5 text-navy hover:bg-navy/10'
          }`}
        >
          الكل
        </button>
        {PROJECT_TECHS.map((tech) => (
          <button
            key={tech}
            type="button"
            onClick={() => setActiveFilter(tech)}
            aria-pressed={activeFilter === tech}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              activeFilter === tech ? 'bg-navy text-white' : 'bg-navy/5 text-navy hover:bg-navy/10'
            }`}
          >
            {TECH_LABEL[tech]}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col rounded-block border border-black/5 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-turquoise/10 text-3xl" aria-hidden="true">
                {project.emoji}
              </span>
              <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-bold text-navy">
                {TECH_LABEL[project.tech]}
              </span>
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-navy">{project.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
            <span className="mt-4 text-xs font-semibold text-muted">الفئة العمرية: {project.ageRange}</span>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-block bg-navy px-6 py-10 text-center sm:px-10">
        <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
          طفلك ممكن يبني مشروعه الخاص كمان
        </h2>
        <Link
          to="/register"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber px-8 py-3.5 text-base font-bold text-navy shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
        >
          احجز مقعد طفلك
          <ArrowLeft size={18} strokeWidth={2.5} aria-hidden="true" />
        </Link>
      </section>
    </div>
  )
}
