import { useEffect, useState } from 'react'
import './Header.css'

const navItems = [
  { id: 'home', label: 'Trang chủ' },
  { id: 'concept', label: 'Khái niệm' },
  { id: 'relation', label: 'Mối quan hệ' },
  { id: 'practice', label: 'Liên hệ thực tiễn' },
  { id: 'evidence', label: 'Dẫn chứng' },
  { id: 'scenario', label: 'Tình huống' },
  { id: 'game', label: 'Game' },
]

function Header() {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        setActiveId(hash)
      }
    }

    updateFromHash()
    window.addEventListener('hashchange', updateFromHash)
    return () => window.removeEventListener('hashchange', updateFromHash)
  }, [])

  return (
    <header className="philo-header">
      <div className="brand">
        <div className="brand-text">
          <p className="brand-name">
            Triết học <span>Mác–Lênin</span>
          </p>
        </div>
      </div>

      <nav className="main-nav" aria-label="Chính">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={`nav-item${activeId === item.id ? ' is-active' : ''}`}
            href={`#${item.id}`}
            onClick={() => setActiveId(item.id)}
            aria-current={activeId === item.id ? 'page' : undefined}
          >
            <span className="nav-title">{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
