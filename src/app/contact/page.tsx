import Image from 'next/image'
import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p>Hello!</p>
          <p>I&apos;m excited that you&apos;re interested in connecting.</p>
          <p>
            Please use the form to send me a message. If you prefer
            alternative methods, feel free to reach out via the social icons in
            the footer.
          </p>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number (optional)" />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Message"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
