import { MdMessage } from "react-icons/md"
import styles from "./Button.module.css"


function Button({text}) {
 function handleClick() {
    "You clicked!"
  }
  return (
    <button className={styles.primary_btn}>
      <MdMessage/>
     {text}
     <button onClick={handleClick}>Meni bos</button>
    </button>
  )
}

export default Button