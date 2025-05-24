import styled from "styled-components";
import { Attendance } from "../../../types";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import UnavailableMessage from "../UnavailableMessage";

interface Props {
  attendance: Attendance[];
}

function AttendanceSection({ attendance }: Props) {
  return (
    <Wrapper>
      <h3>
        <VisuallyHidden>Attendance</VisuallyHidden>
      </h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record.date}>
              <td>{new Date(record.date).toLocaleDateString()}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {(!attendance || attendance.length === 0) && (
        <Centralize>
          <UnavailableMessage />
        </Centralize>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  grid-area: attendance;
  overflow-x: auto;

  table {
    border-collapse: collapse;
    font-size: 0.95rem;
    background-color: #1e1e1e;
    color: #f0f0f0;
    border-radius: 8px;
  }

  th,
  td {
    width: 150px;
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid var(--mauve-4);
  }

  th {
    background-color: var(--mauve-4);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  tr:hover {
    background-color: var(--mauve-5);
  }

  td {
    white-space: nowrap;
  }
`;

const Centralize = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export default AttendanceSection;
