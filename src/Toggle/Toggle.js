import './Toggle.css';

export default function reefDentist({ reefDentist }) {
  return <div className="{reefDentist ? 'reef' : 'dentist'} ">
    {
      reefDentist
        ? <img alt='reef' src="./images/reef.jpg" width='300px'></img>
        : <img alt='dentist' src="./images/dentist.jpg" width='300px'></img>
    }
  </div>;
}