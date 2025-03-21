import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function ContactForm() {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail />} />
        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text:</label>
            <textarea id="text" name="text" placeholder="Problems" required />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: "24px",
            marginTop: "24px"
          }}>
            <Button  text="SUBMIT BUTTON"/>
          </div>
        </form>
      </div>
      <div className={styles.contact_image}></div>
    </section>
  );
}

export default ContactForm;
