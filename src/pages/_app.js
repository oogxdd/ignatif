import { createContext, useContext, useState, useEffect } from 'react'
import { Sun as SunIcon, Moon as MoonIcon } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import '@/assets/css/index.css'

const ThemeContext = createContext()

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark') // Default theme
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  // Prevent SSR flash
  if (!mounted) return null

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Maxim Ignatev's resume website</title>
        {/*
        <meta name="description" content="A short outline of Maxim Ignatev's work history" />
        */}
      </Head>
      <div className={theme}>
        <Component {...pageProps} />
        {/*
        <ThemeToggle />
        <Analytics />
        */}
      </div>
    </ThemeContext.Provider>
  )
}

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-10 top-4 right-4 p-2 rounded-full hover:bg-sand-3 text-sand-9"
    >
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  )
}
