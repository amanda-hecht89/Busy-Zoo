import './Toggle.css';

export default function reefDentist({ reefDentist }) {
  return <div className="{reefDentist ? 'reef' : 'dentist'}">
    {
      reefDentist
        ? <img src="./images/reef.jpg" width='300px'></img>
        : <img src="./images/dentist.jpg" width='300px'></img>
    }
  </div>;
}