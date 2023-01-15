import { ReactNode } from 'react'

export interface MoviesContextProps {
  children: ReactNode
}

export interface MovieCardProps {
  title: string
  date: string
  poster: string
}

export interface HeaderProps {
  themeToggler: () => void
  theme: string
}

export interface PaginationItemProps {
  number: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}

export interface LoadingProgressProviderProps {
  children: ReactNode
}
