import { COURSES } from '@/data/courses'
import CourseCard from '@/components/ui/CourseCard'
import Seo from '@/components/ui/Seo'

export default function Courses() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Seo
        title="الدورات"
        description="تصفّحي دورات CodeLand في Scratch وPython وHTML/CSS والذكاء الاصطناعي، واختاري الأنسب لعمر طفلك."
      />
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-purple/10 px-4 py-1.5 text-sm font-bold text-purple">
          دورات CodeLand
        </span>
        <h1 className="mt-5 font-display text-3xl font-extrabold text-navy sm:text-4xl">
          مسار مصمم لكل عمر ولكل خطوة
        </h1>
        <p className="mt-4 text-lg text-muted">
          من أول خطوة بالبرمجة المرئية حتى بناء مواقع ومشاريع ذكاء اصطناعي — يختار الطفل الدورة المناسبة لعمره واهتمامه.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {COURSES.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  )
}
