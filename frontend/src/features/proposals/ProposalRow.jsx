import Table from "../../ui/Table";
import numberWithCommas from "../../utils/numberWithCommas";
import truncateText from "../../utils/truncateText";

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

const ProposalRow = ({ proposal, index}) => {
  const { status } = proposal;
  return (
		<Table.Row>
			<td>{index + 1}</td>
			<td>{truncateText(proposal.description, 50, 6)}</td>
			<td>{proposal.duration} Days</td>
			<td>{numberWithCommas(proposal.price)}</td>
			<td>
      <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
		</Table.Row>
	);
}

export default ProposalRow