import { ReactNode } from 'react'

import { MenuLink } from './styles'

interface NavLinkProps {
  to: string
  children: ReactNode
}

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <MenuLink to={to} smooth={true} duration={1000} spy={true} offset={-80}>
      {children}
    </MenuLink>
  )
}
