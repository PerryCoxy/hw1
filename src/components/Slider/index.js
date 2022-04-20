import Container from '../Container';
import Heading from '../Heading';
import Button from '../Button';

import s from './Slider.module.scss';

const Slider = () => {
  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Container className={s.sliderContent}>

          <Heading
            level={1}
            colorwhite
          >
            Triple Triad Game
          </Heading>

          <Heading
            level={2}
            className={s.subheader}
            colorwhite
          >
            Wow.Wow.Wow
          </Heading>

          <div className={s.call}>
            <Button value="Wow"/>
          </div>

        </Container>
      </div>
    </section>
  );
};

export default Slider;
