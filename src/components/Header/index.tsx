import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

import { Books } from '@/components/Icons/Books'
import { Home } from '@/components/Icons/Home'
import { Skills } from '@/components/Icons/Skills'
import { Suitcase } from '@/components/Icons/Suitcase'

import { NavLink } from './NavLink'
import {
  Container,
  Content,
  Hamburguer,
  Menu,
  Navigation,
  Buttons,
  LanguageSwitch,
  ResumeButton
} from './styles'
import Image from 'next/image'
import Logo from '../../../public/logo.svg'

interface HeaderProps {
  language: string
  resumeButtonLabel: string
  resumeCv: string
  toggleContentLanguage: () => void
}

export function Header({
  language,
  resumeButtonLabel,
  resumeCv,
  toggleContentLanguage
}: HeaderProps) {
  const [hamburguerIsOpen, setHamburguerIsOpen] = useState(false)

  return (
    <Container>
      <Content>
        <Image  src={Logo} alt="Logo" />

        <Hamburguer onClick={() => setHamburguerIsOpen(!hamburguerIsOpen)}>
          <FiMenu size={30} />
        </Hamburguer>

        <Menu isOpen={hamburguerIsOpen}>
          <Navigation>
            <NavLink to="presentation">
              <Home />
            </NavLink>
            <NavLink to="about">
              <Skills />
            </NavLink>
            <NavLink to="work-experiences">
              <Suitcase />
            </NavLink>
            <NavLink to="projects">
              <Books />
            </NavLink>
          </Navigation>

          <Buttons>
            <LanguageSwitch
              checked={language === 'en-us'}
              onChange={toggleContentLanguage}
              handleDiameter={26}
              width={100}
              height={40}
              borderRadius={40}
              offColor="#313131"
              onColor="#313131"
              onHandleColor="#CA3E47"
              offHandleColor="#CA3E47"
              boxShadow="0rem 0rem 0.625rem #CA3E47"
              activeBoxShadow="0rem 0rem 0.625rem #CA3E47"
              uncheckedIcon={
                <div
                  style={{
                    height: '100%',
                    fontSize: 18,
                    fontWeight: 700,
                    paddingRight: 14,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'var(--neutral-300)'
                  }}
                >
                  PT
                </div>
              }
              checkedIcon={
                <div
                  style={{
                    height: '100%',
                    fontSize: 18,
                    fontWeight: 700,
                    paddingLeft: 14,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'var(--neutral-500)'
                  }}
                >
                  EN
                </div>
              }
            />

            <ResumeButton href={resumeCv} target="_blank" rel="noopener noreferrer">
              {resumeButtonLabel}
            </ResumeButton>
          </Buttons>
        </Menu>
      </Content>
    </Container>
  )
}
