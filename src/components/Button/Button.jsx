import { MdMessage } from "react-icons/md"
import styles from "./Button.module.css"


function Button({text, icon, isOutline}) {
  // const {isOutline, icon, text} = isOutline
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {text} {icon}
    </button>
  )
}

export default Button