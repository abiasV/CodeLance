import { Field, Label, Switch } from "@headlessui/react";

const Toggle = ({ label, enabled, onChange }) => {
	return (
		<div>
			<Field className="flex items-center gap-x-2">
				<Label>{label}</Label>
				<Switch
					checked={enabled}
					onChange={onChange}
					className={`${
						enabled ? "data-[checked]:bg-primary-900" : "bg-secondary-200"
					} group inline-flex h-6 w-11 items-center rounded-full transition`}
				>
					<span className="size-4 translate-x-1 rounded-full bg-secondary-0 transition group-data-[checked]:translate-x-6" />
				</Switch>
			</Field>
		</div>
	);
};

export default Toggle;
