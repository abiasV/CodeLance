import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

const CreateProposal = ({ onClose, projectId }) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

  const { isCreating, createProposal } = useCreateProposal()

  const onSubmit = (data) => {
    createProposal({ ...data, projectId }, {
      onSuccess: () => onClose(),
    })
  }

	return (
		<div>
			<form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
				<TextField
					label="Description"
					name="description"
					register={register}
					errors={errors}
					required
					validationSchema={{
						required: "Description is required",
						minLength: {
							value: 10,
							message: "Invalid description length. at least 10 characters.",
						},
					}}
				/>
				<TextField
					label="Proposed price"
					name="price"
					type="number"
					register={register}
					errors={errors}
					required
					validationSchema={{
						required: "Price is required",
					}}
				/>
				<TextField
					label="Duration"
					name="duration"
					type="number"
					register={register}
					errors={errors}
					required
					validationSchema={{
						required: "Price is duration",
					}}
				/>
				<div className="!mt-8">
					{isCreating ? (
						<Loading />
					) : (
						<button type="submit" className="btn btn--primary w-full">
							Add
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default CreateProposal;
