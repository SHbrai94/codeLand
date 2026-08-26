import { Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'

import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Register from './pages/Register'

import HowWeTeach from './pages/HowWeTeach'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        {/* Courses */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/register" element={<Register />} />

        {/* Content Pages */}
        <Route path="/how-we-teach" element={<HowWeTeach />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Login & Dashboards */}
        <Route
          path="/login"
          element={<ComingSoon title="تسجيل الدخول" />}
        />

        <Route
          path="/parent/dashboard"
          element={<ComingSoon title="لوحة تحكم ولي الأمر" />}
        />

        <Route
          path="/student/dashboard"
          element={<ComingSoon title="لوحة تحكم الطالب" />}
        />

        {/* Student */}
        <Route
          path="/student/courses/:slug"
          element={<ComingSoon title="مسار الطالب" />}
        />

        <Route
          path="/student/certificates"
          element={<ComingSoon title="الشهادات" />}
        />

        <Route
          path="/verify"
          element={<ComingSoon title="التحقق من الشهادة" />}
        />

        {/* Admin */}
        <Route
          path="/admin/*"
          element={<ComingSoon title="لوحة تحكم الإدارة" />}
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
