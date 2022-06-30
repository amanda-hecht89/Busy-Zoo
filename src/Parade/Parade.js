import './Parade.css';

export default function Parade({ swim }) {
  return <div className="swim">
    {swim === 'dory' && <img src='../images/dory1.png' height={70}/>}
    {swim === 'marlin' && <img alt='marlin' src='../images/marlin1.png' height={70}/>}
    {swim === 'nigel' && <img src='../images/nigel1.png' height={70}/>}
    {swim === 'bruce' && <img src='../images/bruce1.png' height={70}/>}
    {swim === 'mine' && <img src='../images/mine1.png' height={70}/>}
  </div>;
}