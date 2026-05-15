import { useEffect } from 'react'

/**
 * useDocumentMeta — sets <title> and meta description/canonical/og tags
 * for the current page. Reverts to a blank state when the component unmounts
 * is intentionally NOT done because the next page mounts and overwrites
 * before the user can perceive a stale value.
 */
export default function useDocumentMeta({ title, description, canonical, ogImage } = {}) {
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (title) document.title = title
    if (description) setMeta('name', 'description', description)
    if (canonical) setLink('canonical', canonical)
    if (title) setMeta('property', 'og:title', title)
    if (description) setMeta('property', 'og:description', description)
    if (ogImage) setMeta('property', 'og:image', ogImage)
  }, [title, description, canonical, ogImage])
}

function setMeta(attr, name, content) {
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}
