import modal from "./modal.module.css"
const Modal = (props) => {
    const onModalHandler = () => {
        props.closeModal();
      }
  return <div className={modal.box}>
    <input className={modal.boxInput} type="text" name="name" />
    <input className={modal.boxInput} type="email" name="email" />
    <button onClick={onModalHandler} className={modal.boxButton}>войти</button>
  </div>;
};
export default Modal;
