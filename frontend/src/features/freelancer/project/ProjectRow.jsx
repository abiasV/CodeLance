// import { useState } from "react";
import Table from "../../../ui/Table";
import numberWithCommas from "../../../utils/numberWithCommas";
import truncateText from "../../../utils/truncateText";
import toLocalDate from "../../../utils/toLocalDate";
import { MdAssignmentAdd } from "react-icons/md";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

const projectStatus = {
  OPEN: {
    label: "Open",
    className: "badge--success",
  },
  CLOSED: {
    label: "Close",
    className: "badge--danger",
  },
};

const ProjectRow = ({ project, index }) => {
  const { status, title, budget, deadline } = project;
  const [open, setOpen] = useState(false);
	return (
		<Table.Row>
			<td>{index + 1}</td>
			<td>{truncateText(title, 50, 4)}</td>
			<td>{numberWithCommas(budget)}</td>
			<td>{toLocalDate(deadline)}</td>
			<td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <Modal open={open} onClose={() => setOpen(false)} title={`Request to complete ${title} project`}>
          <CreateProposal projectId={project._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>
      </td>
    </Table.Row>
	);
}

export default ProjectRow