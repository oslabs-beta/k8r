// import '../stylesheets/tile.css';

function Tile({ grafanaPanelUrl }) {
  return (
    <iframe src={grafanaPanelUrl} />
  );
}

export default Tile;
