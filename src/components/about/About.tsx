import { Animal } from './animal/Animal.tsx';
import { Welcome } from './welcome/Welcome.tsx';

export const About = () => {
  return (
    <section>
      <Animal />
      <Welcome />
    </section>
  );
};
