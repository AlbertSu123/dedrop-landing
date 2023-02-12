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
        windowsbutton={
          <Link href="https://github.com/andr-dev/airdrop/releases/download/0.1.0/dedrop_0.1.0_x64_en-US.msi">
            <a>
              <Button xl >Download for Windows</Button>
            </a>
          </Link>
        }
        macbutton={
          <Link href="https://github.com/andr-dev/airdrop/releases/download/0.1.0/dedrop_0.1.0_universal.dmg">
            <a>
              <Button xl>Download for Mac</Button>
            </a>
          </Link>
        }
      />
    </Section>
    
  </Background>
);

export { Hero };
