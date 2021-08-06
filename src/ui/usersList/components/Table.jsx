import { Row } from './Row';

export const Table = ({ rows }) => (
  <table>
    <tbody>
      {rows?.map((row) => (
        <Row key={row.id} {...row} />
      ))}
    </tbody>
  </table>
);
