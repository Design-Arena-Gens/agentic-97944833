"use client";

import { Container, Table } from "react-bootstrap";

const Arrivals = () => {
  return (
    <Container id="arrivals" className="mt-5">
      <h2>Arrivals</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UA 123</td>
            <td>New York (JFK)</td>
            <td>10:00 AM</td>
            <td className="text-success">On Time</td>
          </tr>
          <tr>
            <td>AA 456</td>
            <td>Los Angeles (LAX)</td>
            <td>10:30 AM</td>
            <td className="text-success">On Time</td>
          </tr>
          <tr>
            <td>DL 789</td>
            <td>Chicago (ORD)</td>
            <td>11:00 AM</td>
            <td className="text-danger">Delayed</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Arrivals;
