import { useAtom } from 'jotai'
import { atomDark } from 'jotai-dark'

const isDarkAtom = atomDark({
  disableTransition: true,
  disableTransitionExclude: ['.i-lucide-sun', '.i-lucide-moon'],
  applyDarkMode: (isDark) => {
    document.documentElement.setAttribute('data-theme', isDark ? 'black' : 'corporate')
  },
})

export function useDark() {
  const [isDark, setIsDark] = useAtom(isDarkAtom)
  return {
    isDark,
    toggleDark: setIsDark as () => void,
    theme: (isDark ? 'dark' : 'light') as 'dark' | 'light',
  }
}