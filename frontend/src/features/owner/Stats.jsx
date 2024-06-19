import {
	HiCollection,
	HiCurrencyDollar,
	HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";

const Stats = ({ projects }) => {
	const numOfProjects = projects.length;
	const numOfAcceptedProjects = projects.filter((p) => p.freelancer !== null).length;
	const numOfProposals = projects.reduce(
		(acc, curr) => curr.proposals.length + acc,
		0
	);

	return (
		<div className="grid grid-cols-3 gap-8">
			<Stat
				color="primary"
				title="Projects"
				value={numOfProjects}
				icon={<HiOutlineViewGrid className="w-20 h-20" />}
			/>
			<Stat
				color="green"
				title="Assigned Projects"
				value={numOfAcceptedProjects}
				icon={<HiCurrencyDollar className="w-20 h-20" />}
			/>
			<Stat
				color="orange"
				title="Proposals"
				value={numOfProposals}
				icon={<HiCollection className="w-20 h-20" />}
			/>
		</div>
	);
};

export default Stats;
