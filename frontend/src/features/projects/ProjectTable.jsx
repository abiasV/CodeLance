import Loading from "../../ui/Loading";
import useOwnerProjects from "./useOwnerProjects";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";

const ProjectTable = () => {
	const { isLoading, projects } = useOwnerProjects();

	if (isLoading) return <Loading />;
	if (!projects.length) return <Empty resourceName="Projects" />;

	return (
		<Table>
			<Table.Header>
        <th>#</th>
        <th>Project Title</th>
        <th>Category</th>
        <th>Budget</th>
        <th>Deadline</th>
        <th>Tags</th>
        <th>Freelancer</th>
        <th>Status</th>
        <th>Operations</th>
        <th>Proposals</th>
      </Table.Header>
      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
	);
};

export default ProjectTable;
