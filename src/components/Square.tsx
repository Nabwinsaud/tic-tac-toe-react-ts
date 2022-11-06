interface IPlayer {
  player?: number | string;
  onPlayerClick?: () => void;
}
const Square = ({ player, onPlayerClick }: IPlayer) => {
  return (
    <div className="square" onClick={onPlayerClick}>
      <h4 className="player">{player}</h4>
    </div>
  );
};

export default Square;
