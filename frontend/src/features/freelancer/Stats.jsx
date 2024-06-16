import {
	HiCollection,
	HiCurrencyDollar,
	HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import numberWithCommas from "../../utils/numberWithCommas";

const Stats = ({ proposals }) => {
	const numOfProposals = proposals.length;
	const acceptedProposals = proposals.filter((p) => p.status === 2);
	const balance = acceptedProposals.reduce(
		(acc, curr) => curr.price + acc,
		0
	);

	return (
		<div className="grid grid-cols-3 gap-8">
			<Stat
				color="primary"
				title="Proposals"
				value={numOfProposals}
				icon={<HiOutlineViewGrid className="w-20 h-20" />}
			/>
			<Stat
				color="green"
				title="Approved Proposals"
				value={acceptedProposals.length}
				icon={<HiCurrencyDollar className="w-20 h-20" />}
			/>
			<Stat
				color="orange"
				title="Wallet"
				value={numberWithCommas(balance)}
				icon={<HiCollection className="w-20 h-20" />}
			/>
		</div>
	);
};

export default Stats;
