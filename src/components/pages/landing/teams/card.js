// card has attributes .className, .image, .name, .position,
//   .discipline [is "discipline+year"],
import './card.css';

const Card = ({card}) => {
  return <>
    <div className={"teamPageCard " + card.className}>
      <img className="teamPageCardImg" src={card.image} alt={"TeamMember"}/>
      <br/>
      <span className="teamPageCardName">{card.name}</span>
      <br/>
      <span className="teamPageCardDesc">{card.degree}</span>
      <br/>
      <span className="teamPageCardDesc">{card.discipline}</span>
      <br/>
    </div>
  </>;
}

export default Card;
