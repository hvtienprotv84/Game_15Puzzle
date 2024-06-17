// @ts-check

import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import GitHubIcon from "./GitHubIcon";

const useStyles = makeStyles({
  root: {
    // backgroundColor: "rgb(232, 232, 232)",
    backgroundColor: "rgba(232, 232, 232, 0)",
    paddingTop: "10px",
    textAlign: "center",
  },
  heart: {
    color: "#d4726a",
    fontSize: "25px"
  },
  link: {
    textDecoration: "none",
    color: "red",
    fontWeight: "bold",
    fontSize: "20px"
  },
  copyright:{
    backgroundColor: "rgb(232, 232, 232)",
    width:"360px",
    margin: "0 auto",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "20px",
    fontSize: "12px",
  },
});

const Footer = () => {
  const styles = useStyles();

  return (
    <footer className={styles.root} >
      {/* <a
        href="https://github.com/hvtienprotv84"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </a> */}
      <p className={styles.copyright}>
      {/* &copy; MỌI BẢN QUYỀN THUỘC VỀ <span className={styles.heart}>♥</span>{" "} */}
          &copy; MỌI BẢN QUYỀN THUỘC VỀ
        <a
          className={styles.link}
          href="https://www.facebook.com/vinhtien.huynh.77/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          HUỲNH VĨNH TIẾN
        </a>
      </p>
    </footer>
  );
};

export default Footer;
