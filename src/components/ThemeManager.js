import { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import './theme.css'
import themeIcon from '../images/theme-icon.png'

export function ThemeManager({ children }) {
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        document.body.className = `${theme}-theme`
    }, [theme])

    return (
        <div>
            <button className="theme-button" onClick={toggleTheme}>
                <img src={themeIcon} alt="Toggle Theme" />
            </button>
            {children}
        </div>
    )
}