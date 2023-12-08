import style from './main.module.css';





function Main (props) {
  return (
     <main>
      <img className={style.img} src = {props.img} />
      <h1 className={style.name}>{props.name}</h1>
      <p className={style.age}>{props.age}</p>
      <p className={style.userInfo}>{props.userInfo}</p>
      
     </main>
  );
}

export default Main;