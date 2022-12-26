import React, { useState, useRef, useCallback } from "react";
import usePhotos from "../../hooks/usePhotos";
import { Photos } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.scss";

const ImageGallery = () => {
  const [page, setPage] = useState(1);
  const { results, isLoading, isError, error, hasNextPage } = usePhotos(page);

  const observer = useRef<IntersectionObserver>();
  const lastPhotoRef = useCallback(
    (node: HTMLImageElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage]
  );

  if (isError) return <p className="center">Failed to fetch images: {error}</p>;

  const images = results?.map((photo: Photos, i) => {
    if (results?.length === i + 1) {
      return (
        <ImageCard
          ref={lastPhotoRef}
          url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
          id={photo.id}
          title={photo.title}
          key={`${photo.id}${i}`}
        />
      );
    }
    return (
      <ImageCard
        url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
        title={photo.title}
        id={photo.id}
        key={photo.id}
      />
    );
  });

  return (
    <div className={styles.gridList}>
      {images}
      {isLoading && <p className="center">Loading...</p>}
    </div>
  );
};
export default ImageGallery;
