import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, LogIn } from 'lucide-react'
import { NAV_LINKS } from '@/config/site'
import Logo from '@/components/ui/Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" aria-label="CodeLand — الصفحة الرئيسية">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="التنقل الرئيسي">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-navy/5 text-navy'
                    : 'text-muted hover:bg-navy/5 hover:text-navy'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
          >
            <LogIn size={16} strokeWidth={2.5} aria-hidden="true" />
            تسجيل الدخول
          </Link>
          <Link
            to="/register"
            className="rounded-full bg-amber px-5 py-2.5 text-sm font-bold text-navy shadow-card transition-transform hover:-translate-y-0.5 hover:shadow-card-hover"
          >
            احجز مقعد طفلك
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-navy/5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-black/5 bg-white px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="التنقل الرئيسي - الهاتف">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-base font-medium ${
                    isActive ? 'bg-navy/5 text-navy' : 'text-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/login"
              className="flex items-center justify-center gap-1.5 rounded-full border border-navy/15 px-4 py-3 text-sm font-semibold text-navy"
            >
              <LogIn size={16} strokeWidth={2.5} aria-hidden="true" />
              تسجيل الدخول
            </Link>
            <Link
              to="/register"
              className="rounded-full bg-amber px-5 py-3 text-center text-sm font-bold text-navy shadow-card"
            >
              احجز مقعد طفلك
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
