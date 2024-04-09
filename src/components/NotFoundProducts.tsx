import { useState } from "react";

export const NotFoundProducts = () => {
  const [isVisible, setIsVisible] = useState(true);
   
  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div className={`notification is-danger ${isVisible ? "" : "is-hidden"}`}>
      <button className="delete" onClick={handleClick}></button>
      No products found
    </div>
  );
};
