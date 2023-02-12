import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { AppConfig } from '../utils/AppConfig';

const Hero = () => (
  <Background color="#13131D">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href={AppConfig.github}>
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Twitter</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Share your files with anyone in the world. \n'}
            <span className="text-primary-500">Decentralized. Uncensorable. Trustless. </span>
          </>
        }
        description="Built Using the Streamr Network."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Download Your Free Theme</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
