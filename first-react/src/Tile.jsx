import "./Tile.css"

function Tile({title, image}) {
  return (
    <div className="tile">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default Tile