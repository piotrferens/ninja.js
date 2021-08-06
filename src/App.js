import { Layout } from './ui/layout/Layout';
import { UsersList } from './ui/usersList/UsersList';
import './App.css';
import { usersData } from './usersData';

const App = () => (
  <Layout>
    <UsersList rowsData={usersData} rowsPerPage={5} />
  </Layout>
);

export default App;
