// import '../stylesheets/tile.css';

function Tile({ link }) {
  return (
    <iframe src={link} className="tile" />
  );
}

export default Tile;
