import style from './app.module.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Modal from './components/modal/modal';
import { useState } from 'react';
import user from './user';

function App() {
  const [isModal, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  }
  const closeModalHandler = () => {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      <Header openModal={openModalHandler} />
      <Main img={user[0].img} name={user[0].name} age={user[0].age} userInfo={user[0].userInfo} />
      <Main img={user[1].img} name={user[1].name} age={user[1].age} userInfo={user[1].userInfo} />
      <Main img={user[2].img} name={user[2].name} age={user[2].age} userInfo={user[2].userInfo} />
      {isModal && <Modal closeModal={closeModalHandler} />}
    </div>
  );
}

export default App;
