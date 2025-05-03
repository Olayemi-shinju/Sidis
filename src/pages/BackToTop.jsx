import React, { useState, useEffect } from 'react'
import "../plugins/font-awesome.css"
const BackToTop = () => {
  const [showButton, setShowButton] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      {showButton && (
        <button title="Go to top" onClick={scrollToTop} className="back-to-top">
          <i className="fas fa-angle-up"></i>
        </button>
      )}
    </div>
  )
}

export default BackToTop