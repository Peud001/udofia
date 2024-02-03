import styles from './background.module.css'

export const getClassName = (pathname: string) => {

  switch (pathname) {
    case "/":
      return styles.home;
    case "/about":
      return styles.about;
    case "/projects":
      return styles.projects;
    case "/contact":
      return styles.contact;
    default:
      return styles.projects;
  }
};