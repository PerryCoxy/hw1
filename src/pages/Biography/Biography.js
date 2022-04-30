import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Container from "../../components/Container";

import {BIO} from '../../constants/bio';

import s from './Biography.module.scss';
import {useParams} from "react-router-dom";

const Biography = () => {
  const {id} = useParams();

  return (
    <div className={s.root}>
      <Container>
        {BIO[id].map((item, index) => {
          switch (item.type) {
            case 'h1':
              return <Heading key={index} level={1} children={item.text}/>;
            case 'h2':
              return <Heading key={index} level={2} children={item.text}/>
            case 'paragraph':
              return <Text key={index} children={item.text}/>
            case 'img':
              return <div key={index} className={s.imgWrap}><img src={item.src} alt="img"/></div>
            default:
              return <Text key={index}>{item.text}</Text>
          }
        })}
      </Container>
    </div>
  )
}

export default Biography;