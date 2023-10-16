import React from "react";
import classes from "./Main.module.scss";
import Logo from "../../images/logo.svg";
import ImgFile from "../../images/icon-document.svg";
import ImgFolder from "../../images/icon-folder.svg";
import ImgUpload from "../../images/icon-upload.svg";
import Button from "../../components/Button/Button";

const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes.main__folder}>
        <img src={Logo} alt="Logo of Fylo" className={classes.main__logo} />
        <div className={classes.main__row}>
          <Button>
            <img src={ImgFile} alt="Icon of a file" />
          </Button>
          <Button>
            <img src={ImgFolder} alt="Icon of a folder" />
          </Button>
          <Button>
            <img src={ImgUpload} alt="Icon of upload" />
          </Button>
        </div>
      </div>
      <div className={classes.main__storage}>
        <p className={classes.main__text}>
          You've used <span className={classes.main__number}>815 GB</span> of
          your storage
        </p>
        <div className={classes.stats__bg}>
          <div className={classes.stats__pourcent}>
            <div className={classes.stats__dot}></div>
          </div>
        </div>
        <div className={classes["main__storage--row"]}>
          <p className={classes.main__number}>0 GB</p>
          <p className={classes.main__number}>1000 GB</p>
        </div>
        <div className={classes.bubble}><p className={classes.bubble__number}>185</p> <p className={classes.bubble__text}>GB left</p></div>
      </div>
    </main>
  );
};

export default Main;
