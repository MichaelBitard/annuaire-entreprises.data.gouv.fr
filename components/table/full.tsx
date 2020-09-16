import React from 'react';

interface ISectionProps {
  head: string[];
  body: any[][];
  id?: string;
}

export const FullTable: React.FC<ISectionProps> = ({ id, head, body }) => (
  <>
    <table id={id}>
      <thead>
        <tr>
          {head.map((cell) => (
            <th>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row) => (
          <tr>
            {row.map((cell) => (
              <td>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <style jsx>{`
      table {
        border-collapse: collapse;
        text-align: left;
        color: #081d35;
      }
      tr td,
      th {
        border: 1px solid #dfdff1;
        border-left: none;
        border-right: none;
        border: none;
        padding: 5px;
        background-color: #fff;
      }

      tr > td,
      table th {
        padding-left: 30px;
      }
      table {
        width:100%;:
      }
      table tr:hover > td {
        background-color: #dfdff166;
        cursor: pointer;
      }
    `}</style>
  </>
);
