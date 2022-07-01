import MaterialTable from 'material-table';
import { Customers } from './services/data';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={
          [
            { title: 'ID#', field: 'id' },
            { title: 'First Name', field: 'first_name' },
            { title: 'Favorite Color', field: 'favorite_color' },
            { title: 'HomeTown', field: 'location' },
            { title: 'Favorite Movie', field: 'favorite_movie' },
          ]
        }
        data={Customers}
        title="Customer Infomation"
        options={{
          headerStyle: {
            background: 'blue',
            border: 'dotted 3px purple'
          },
          columnStyle: {
            background: 'brown',
            color: 'white'
          }
        }}
      />
    </div>
  );
}