import React from "react";
import styles from './ImageCard.module.scss'

type ImageCardProps = {
  url: string;
  title: string;
};

const ImageCard = React.forwardRef(({ url, title }: ImageCardProps, ref: React.Ref<HTMLImageElement>) => {
  return (ref ? <img ref={ref} src={url} alt={title} className={styles.imgCard} loading="lazy" /> : 
    <img src={url} alt={title} className={styles.imgCard} loading="lazy"/>
  )
});

export default ImageCard;
