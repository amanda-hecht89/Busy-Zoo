export default function Parade({ swim }) {
  return <div className="swim">
    {swim === 'dory' && '🐠'}
    {swim === 'marlin' && '🐟'}
    {swim === 'nigel' && '🐦'}
    {swim === 'bruce' && '🦈'}
    {swim === 'mine' && '🕊️'}
  </div>;
}