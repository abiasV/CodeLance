import Table from "../../ui/Table";
import numberWithCommas from "../../utils/numberWithCommas";
import truncateText from "../../utils/truncateText";
import toLocalDate from "../../utils/toLocalDate";
import { TbPencilMinus } from "react-icons/tb";
import { HiOutlineTrash } from "react-icons/hi";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";
import { MdOutlineLocalOffer } from "react-icons/md";

const ProjectRow = ({ project, index }) => {
	const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { removeProject } = useRemoveProject();
	return (
		<Table.Row>
			<td>{index + 1}</td>
			<td>{truncateText(project.title, 40, 4)}</td>
			<td>{project.category?.title || "-"}</td>
			<td>{numberWithCommas(project.budget)}</td>
			<td>{toLocalDate(project.deadline)}</td>
			<td>
				<div className="flex flex-wrap items-center gap-2 max-w-[250px]">
					{project.tags.map((tag) => (
						<span key={tag} className="badge badge--secondary">
							{tag}
						</span>
					))}
				</div>
			</td>
			<td>{project.freelancer?.name || "-"}</td>
			<td>
        <ToggleProjectStatus project={project} />
			</td>
			<td>
				<div className="flex items-center gap-x-6">
					<>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              title={`Edit ${project.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateProjectForm projectToEdit={project} onClose={() => setIsEditOpen(false)} />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              // title={`Delete ${project.title}`}
              title={<span>
                      <span className="text-error">Delete </span>{project.title}
                    </span>}
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete 
                resourceName={project.title} 
                onClose={() => setIsDeleteOpen(false)} 
                onConfirm={() => 
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })} 
                disabled={false}
              />
            </Modal>
          </>
				</div>
			</td>
      <td>
        <Link to={project._id} className="flex justify-center">
          <MdOutlineLocalOffer className="w-5 h-5 text-primary-800" />
        </Link>
      </td>
		</Table.Row>
	);
};

export default ProjectRow;

// resourceName, onClose, disabled, onConfirm