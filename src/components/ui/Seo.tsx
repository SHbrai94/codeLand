import { useEffect } from 'react'

interface SeoProps {
  title: string
  description: string
}

const SITE_TITLE_SUFFIX = 'CodeLand'

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

/**
 * Sets the document title and meta description/OG tags per page.
 * This is a small in-house replacement for react-helmet so each route
 * gets correct SEO metadata without adding a new dependency.
 */
export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_TITLE_SUFFIX) ? title : `${title} | ${SITE_TITLE_SUFFIX}`
    document.title = fullTitle
    setMetaTag('name', 'description', description)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
  }, [title, description])

  return null
}
