// src/shared/components/ThemeProvider.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { darkThemeClass } from '@bb/styles/theme.css';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {
  }
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // 로컬 스토리지로부터 테마 설정 불러오기 (SSR 고려)
  const [theme, setTheme] = useState<ThemeMode>('light');

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;

    // 저장된 테마 설정이 있으면 사용, 없으면 시스템 설정 확인
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  // 테마 변경 시 HTML 클래스 및 로컬 스토리지 업데이트
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add(darkThemeClass);
    } else {
      root.classList.remove(darkThemeClass);
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // 테마 전환 함수
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
