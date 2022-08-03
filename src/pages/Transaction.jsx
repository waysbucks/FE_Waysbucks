import React from "react";
import { Container } from "react-bootstrap";

export default function Transaction() {
  return (
    <Container>
      <h1>Income Transaction</h1>
      <div>
        <table>
          <th>
            <td>No</td>
            <td>Name</td>
            <td>Adress</td>
            <td>Post Code</td>
            <td>Income</td>
            <td>Status</td>
            <td>Action</td>
          </th>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </Container>
  );
}
