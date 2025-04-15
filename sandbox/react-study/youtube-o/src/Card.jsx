import profileLogo from './assets/profile.webp'

function Card() {
  return (
    <div className="card">
      <img className='card__img' src={profileLogo} alt="profile picture" />
      <h2 className='card__title'>Amazing React</h2>
      <p className='card__text'>I am study right now</p>
    </div>
  );
}

export default Card;