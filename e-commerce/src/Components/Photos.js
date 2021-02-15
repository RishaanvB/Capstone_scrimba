import { useContext } from "react";
import { Context } from "../ContextProvider";
import Photo from "../Photo";

function Photos() {
  const { photos } = useContext(Context);

  const pictures = photos.map((photo) => (
    <Photo key={photo.id} url={photo.url} isFavorite={photo.isFavorite} photoId={photo.id} photo={photo}/>
  ));

  return (
    <>
      <h1>Photos Page</h1>
      <div className="img-grid">{pictures}</div>
    </>
  );
}
export default Photos;
