import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table"
import numberWithCommas from "../../utils/numberWithCommas";
import truncateText from "../../utils/truncateText"
import ChangeProposalStatus from "./ChangeProposalStatus";

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

const ProposalRow = ({ proposal, index }) => {
  const { status, user } = proposal;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>
        <p>{truncateText(proposal.description, 50, 4)}</p>
      </td>
      <td>{proposal.duration} Days</td>
      <td>{numberWithCommas(proposal.price)}</td>
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
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
        <button onClick={() => setOpen(true)}>Change Status</button>
      </td>  
    </Table.Row>
  )
}

export default ProposalRow