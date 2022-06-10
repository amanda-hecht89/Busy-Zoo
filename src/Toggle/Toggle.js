export default function reefDentist({ reefDentist }) {
  return <div className="{reefDentist ? 'reed' : 'dentist'}">
    {
      reefDentist
        ? <img src="./images/reef.jpg" width='100px'>IN THE REEF</img>
        : <img src="./images/dentist.jpg" width='100px'>AT THE DENTIST</img>
    }
  </div>;
}