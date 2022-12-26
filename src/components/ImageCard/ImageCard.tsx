import React from "react";
import Favorite from "../Favorite/Favorite";
import styles from "./ImageCard.module.scss";

type ImageCardProps = {
  url: string;
  title: string;
  id: string;
};

const ImageCard = React.forwardRef(
  ({ url, title, id }: ImageCardProps, ref: React.Ref<HTMLImageElement>) => {
    return (
      <div className={styles.container}>
        {ref ? (
          <img
            ref={ref}
            src={url}
            alt={title}
            className={styles.imgCard}
            loading="lazy"
          />
        ) : (
          <img
            src={url}
            alt={title}
            className={styles.imgCard}
            loading="lazy"
          />
        )}
        <div className={styles.infoContainer}>
          {title && <p className={styles.infoText}>{title}</p>}
          <hr className={styles.line}></hr>
          <div className={styles.favoriteContainer}>
            <Favorite id={id} />
          </div>
        </div>
      </div>
    );
  }
);

export default ImageCard;
