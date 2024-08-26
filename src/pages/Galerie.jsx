import React from "react";
import { GalerieImg } from "../constants";
const Galerie = () => {
  return (
    <>
      <div className="columns-2 md:columns-3 gap-4 space-y-4 px-4 mt-10">
        {GalerieImg.map((image) => (
          <div key={image.id} className="break-inside-avoid">
            <img
              className="h-auto w-full rounded-lg"
              src={image.img}
              alt={image.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Galerie;
