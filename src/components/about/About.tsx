import { Animal } from './animal/Animal.tsx';
import { Welcome } from './welcome/Welcome.tsx';
import { Donation } from './donation/Donation.tsx';
import { Pets } from './pets/Pets.tsx';

export const About = () => {
  return (
    <section>
      <Animal />
      <Welcome />
      <Donation />
      <Pets />
    </section>
  );
};
