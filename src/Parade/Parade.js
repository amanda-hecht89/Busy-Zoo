import './Parade.css';

export default function Parade({ swim }) {
  return <div className="swim">
    {swim === 'dory' && <img alt='dory' src='../images/dory1.png' height={70}/>}
    {swim === 'marlin' && <img alt='marlin' src='../images/marlin1.png' height={70}/>}
    {swim === 'nigel' && <img alt='nigel' src='../images/nigel1.png' height={70}/>}
    {swim === 'bruce' && <img alt='bruce' src='../images/bruce1.png' height={70}/>}
    {swim === 'mine' && <img alt='mine' src='../images/mine1.png' height={70}/>}
  </div>;
}