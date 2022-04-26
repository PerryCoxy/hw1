import s from './Contacts.module.scss';
import Text from "../../components/Text";
import Container from "../../components/Container";
import avatar from "./assets/rage.jpg"

const Contacts = () => {
  return (
    <Container>
      <img src={avatar} alt="some img" className={s.avatar_img}/>
      <Text>
        Мое имя Соломатин Михаил и это страница обо мне
      </Text>
    </Container>
  )
}

export default Contacts;