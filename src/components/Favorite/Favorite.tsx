import React, { useState } from "react";
import styles from "./Favorite.module.scss";

type Props = {
  id: string;
};

const Favorite = ({ id }: Props) => {
  const [storageItem, setStorageItem] = useState(() =>
    JSON.parse(localStorage.getItem("favourites") || "[]")
  );

  const handleFavourite = () => {
    const item = JSON.parse(localStorage.getItem("favourites") || "[]");
    if (!item.includes(id)) {
      const newItems = JSON.stringify([...item, id]);
      localStorage.setItem("favourites", newItems);
      setStorageItem(newItems);
    } else {
      const newStorageItem = item?.filter((savedId: string) => savedId !== id);
      setStorageItem(newStorageItem);
      localStorage.setItem("favourites", JSON.stringify(newStorageItem));
    }
  };

  return (
    <button
      onClick={handleFavourite}
      className={`${styles.favorite} ${
        storageItem.includes(id) ? styles.red : styles.white
      }`}
    >
      Favorite
    </button>
  );
};

export default Favorite;
