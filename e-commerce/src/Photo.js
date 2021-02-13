
function Photo({ url, isFavorite, }) {
  const handleOpacity = (e) => {
    const { target } = e;
    target.classList.add("active");
  };
  
  return (
    <div className="img-container">
      <img
        onLoad={(e) => handleOpacity(e)}
        className="photo"
        src={url}
        alt=""
      />
    </div>
  );
}

export default Photo;
