import { useState } from "react";
import Modal from "../../../ui/Modal"
import Table from "../../../ui/Table"
import ChangeUserStatus from "./ChangeUserStatus";


const statusStyle = [
  {
    label: "Rejected",
    className: "badge--danger",
  },
  {
    label: "Pending Approval",
    className: "badge--primary",
  },
  {
    label: "Approved",
    className: "badge--success",
  },
];

const UserRow = ({ user, index }) => {
  const [open, setOpen] = useState(false);
  const { name, email, phoneNumber, role, status } = user;

  return (
    <Table.Row>
			<td>{index + 1}</td>
			<td>{name}</td>
			<td>{email}</td>
			<td>{phoneNumber}</td>
      <td>{role}</td>
			<td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
      <Modal
          title="Change Request Status"
          open={open}
          onClose={() => setOpen(false)}
        >
          <ChangeUserStatus
            userId={user._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>Change Status</button>
      </td>
    </Table.Row>
  )
}

export default UserRow