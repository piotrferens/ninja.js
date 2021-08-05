import React from 'react';

const Row = (props) => {
  const { row } = props;

  return (
    <tr data-testid="row">
      <td>
        <a href={row.path}>{row.name}</a>
        <br />
        <small>{row.email}</small>
      </td>
    </tr>
  );
};

export default Row;
