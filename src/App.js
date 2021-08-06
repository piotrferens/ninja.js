import { Layout } from './ui/layout';
import './App.css';
import { UsersList } from './ui/usersList';
import { usersData } from './usersData';

const App = () => (
  <Layout>
    <UsersList rowsData={usersData} rowsPerPage={5} />
  </Layout>
);

export default App;
