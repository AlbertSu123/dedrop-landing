import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    description=""
  >
    <VerticalFeatureRow
      title="Send files to anyone in the world"
      description="Dedrop uses the Streamr Network, which has light nodes across 6 out of the 7 continents. You can also run a light node yourself by simply going to https://streamr.network/"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Send files that cannot be censored"
      description="Dedrop uses the Streamr Network, which transfers files in a peer to peer manner, routed through nodes running the streamr network. If any node attempts to censor your transaction, it will be routed through other nodes."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Send files that reach their destination in on second or less"
      description="Dedrop uses the Streamr Network, which is extremely fast. Files can reach their destinations in less than 400 milliseconds, and almost always reach their destination in one second or less."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
