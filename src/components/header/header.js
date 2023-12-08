import style from './header.module.css';

function Header(props) {
  const onModalHandler = () => {
    props.openModal();
  }

  return (
    <>
     <header className={style.header}>
      <a className={style.link} href='#'>Главное меню</a>
      <a className={style.link} href='#'>Контакты</a>
      <a className={style.link} href='#'>Адрес</a>
      
      <a className={style.link} onClick={onModalHandler} href='#'>Вход</a>
     </header>
    </>
  );
}

export default Header;