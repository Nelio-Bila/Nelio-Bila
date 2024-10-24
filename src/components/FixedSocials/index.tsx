import { SocialContent } from '@/types/content'

import { SocialIcon } from '../SocialIcon'
import { Container, Content } from './styles'
import Image from 'next/image'
import CableFixedSocials from '../../../public/images/cable-fixed-socials.svg'

interface FixedSocialsProps {
  socials: SocialContent[]
}

export function FixedSocials({ socials }: FixedSocialsProps) {
  return (
    <Container>
      <Content>
        {socials.map(social => (
          <a key={social.name} href={social.link} target="_blank" rel="noreferrer">
            <SocialIcon name={social.name} />
          </a>
        ))}

        <Image  src={CableFixedSocials} alt="Led cable" />
      </Content>
    </Container>
  )
}
