import { Animal } from './animal/Animal.tsx';
import { Welcome } from './welcome/Welcome.tsx';
import { Donation } from './donation/Donation.tsx';
import { Pets } from './pets/Pets.tsx';
import { Feed } from './feed/Feed.tsx';
import { Feedback } from './feedback/Feedback.tsx';

export const About = () => {
  return (
    <section>
      <Animal />
      <Welcome />
      <Donation />
      <Pets />
      <Feed />
      <Feedback />
    </section>
  );
};
