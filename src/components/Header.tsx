"use client"

import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/store/features/themeSlice'
import type { RootState } from '@/store/store'
import { useEffect } from 'react'

const Header = () => {
    const dispatch = useDispatch()
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)

    // Dark mode değişince body class'ını güncelle
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : ''
    // İsteğe bağlı olarak localStorage'a kaydedilebilir
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-gray-800"
          >
            LOGO
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Anasayfa
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              Hakkımızda
            </Link>
          </nav>

          {/* Theme Toggle */}
          <button onClick={() => dispatch(toggleTheme())}>
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
        </div>
      </div>
    </header>
  )
}

export default Header