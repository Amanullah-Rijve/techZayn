import { useEffect, useRef, useState } from 'react'
 
// Small hook: adds a fade-up-on-scroll effect the first time a section
// enters the viewport. Keeps animation logic out of every component.
export default function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
 
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
 
  return [ref, visible]
}