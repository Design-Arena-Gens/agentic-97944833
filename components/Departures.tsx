"use client";

import { Container, Table } from "react-bootstrap";

const Departures = () => {
  return (
    <Container id="departures" className="mt-5">
      <h2>Departures</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Flight</th>
            <th>To</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>UA 321</td>
            <td>Tokyo (HND)</td>
            <td>11:00 AM</td>
            <td className="text-success">On Time</td>
          </tr>
          <tr>
            <td>AA 654</td>
            <td>London (LHR)</td>
            <td>11:30 AM</td>
            <td className="text-success">On Time</td>
          </tr>
          <tr>
            <td>DL 987</td>
            <td>Paris (CDG)</td>
            <td>12:00 PM</td>
            <td className="text-warning">Boarding</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Departures;
