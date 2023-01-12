import { ReactNode } from 'react'

export interface MoviesContextProps {
  children: ReactNode
}

export interface MovieCardProps {
  title: string
  date: string
  poster: string
}
