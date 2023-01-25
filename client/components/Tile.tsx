// import '../stylesheets/tile.css';

function Tile({ grafanaPanelUrl }) {
  return (
    <iframe src={grafanaPanelUrl} className="tile" />
  );
}

export default Tile;
