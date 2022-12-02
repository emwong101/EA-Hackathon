import React from "react";
import WishListCard from "../../components/wishlistCard/WishListCard";
import fifa2023 from "../../assets/wishlist/fifa2023.svg";
import wildHearts from "../../assets/wishlist/wildhearts.svg";
import fifa2022 from "../../assets/wishlist/fifa22.svg";
import apex from "../../assets/wishlist/apex.svg";
import "./Wishlist.scss";

function Wishlist() {
  return (
    <div className="wishlist">
      <WishListCard Image={fifa2023} title="FIFA 2023" />{" "}
      <WishListCard
        Image={wildHearts}
        title="WILD HEARTS (release date: 2023-02-17)"
      />{" "}
      <WishListCard Image={fifa2022} title="FIFA 2022" />{" "}
      <WishListCard Image={apex} title="Apex Legends" />
    </div>
  );
}

export default Wishlist;
