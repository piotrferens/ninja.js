export const Row = ({ name, path, email }) => (
  <tr data-testid="row">
    <td>
      <a href={path}>{name}</a>
      <br />
      <small>{email}</small>
    </td>
  </tr>
);
