import { useNavigate, useParams, Navigate, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Container from "../../components/Container";
import Button from "../../components/Button";

import { ReactComponent as AnchorLink } from './assets/link_icon.svg'

import { BIO } from '../../constants/bio';

import s from './Biography.module.scss';

const Biography = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  let { hash } = useLocation();

  useEffect(() => {
    const load = () => {
      const elem = document.querySelector(hash);
      if (elem) {
        elem.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        });
      };
    };
    if (hash) {
      window.addEventListener('load', load);
    }
    return () => window.removeEventListener('load', load);
  }, [hash]);

  const handleBackClick = () => {
    navigate(-1, {
      state: {
        from: id,
      }
    });
  }

  if (!BIO[id]) {
    return <Navigate to="/characters" replace />
  }

  return (
    <div className={s.root}>
      <Container>
        <div>
          <Button
            value="Go back"
            color="black"
            onClick={handleBackClick}
          />
        </div>
        {BIO[id].map((item, index) => {
          switch (item.type) {
            case 'h1':
              return <Heading key={index} level={1} children={item.text} />;
            case 'h2':
              return <div className={s.subheadingWrap} id={item.text.replace(' ', '_')}>
                <Heading key={index} level={2} children={item.text} />
                <Link to={`#${item.text.replace(' ', '_')}`}>
                  <AnchorLink className={s.anchorLink} />
                </Link>
              </div>
            case 'paragraph':
              return <Text key={index} children={item.text} />
            case 'img':
              return <div key={index} className={s.imgWrap}><img src={item.src} alt="img" /></div>
            default:
              return <Text key={index}>{item.text}</Text>
          }
        })}
      </Container>
    </div>
  )
}

export default Biography;