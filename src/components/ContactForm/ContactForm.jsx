import styles from "./Contact.module.css"
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md"


function ContactForm() {
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage/>} /> 
        </div>
        <div className={styles.contact_image}></div>
    </section>
  )
}

export default ContactForm