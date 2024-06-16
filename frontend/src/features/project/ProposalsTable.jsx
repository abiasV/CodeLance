import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import ProposalRow from "./ProposalRow";

function ProposalsTable({ proposals }) {
  if (!proposals.length) return <Empty resourceName="Request" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Freelancer</th>
        <th>Description</th>
        <th>Delivery Time</th>
        <th>Price</th>
        <th>Status</th>
        <th>Operations</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default ProposalsTable;