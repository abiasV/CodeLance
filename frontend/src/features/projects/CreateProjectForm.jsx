import { TagsInput } from "react-tag-input-component";
import useCategories from "../../hooks/useCategories";
import RHFSelect from "../../ui/RHFSelect";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCreateProject from "./useCreateProject";
import useEditProject from "./useEditProject";
import Loading from "../../ui/Loading";

const CreateProjectForm = ({ onClose, projectToEdit = {} }) => {
	const { _id: editId } = projectToEdit;
  const isEditMode = Boolean(editId);

	const { title, description, budget, category, deadline, tags: prevTags } = projectToEdit;
  let editValues = {};
  if (isEditMode) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({ defaultValues: editValues });
	const { categories } = useCategories();
	const [tags, setTags] = useState(prevTags || []);
	const [date, setDate] = useState(new Date(deadline || ""));

	const { isCreating, createProject } = useCreateProject();
	const { editProject, isEditing } = useEditProject();
	const onSubmit = (data) => {
		const newProject = {
			...data,
			tags,
			deadline: new Date(date).toISOString(),
		};
		if (isEditMode) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
	};

	return (
		<form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
			<TextField
				label="Project Title"
				name="title"
				register={register}
				errors={errors}
				required
				validationSchema={{
					required: "Title is required",
					minLength: {
						value: 10,
						message:
							"Invalid title length. Please enter a title with at least 10 characters.",
					},
				}}
			/>
			<TextField
				label="Description"
				name="description"
				register={register}
				required
				validationSchema={{
					required: "Description is required",
					minLength: {
						value: 15,
						message: "Enter at least 15 characters",
					},
				}}
				errors={errors}
			/>
			<TextField
				label="Budget"
				name="budget"
				type="number"
				register={register}
				required
				validationSchema={{
					required: "Budget is required",
				}}
				errors={errors}
			/>
			<RHFSelect
				label="Category"
				required
				name="category"
				register={register}
				options={categories}
			/>
			<div>
				<label className="mb-2 block text-secondary-700">Tags</label>
				<TagsInput value={tags} onChange={setTags} name="tags" />
			</div>
			<DatePickerField date={date} setDate={setDate} label="Deadline" />
			<div className="!mt-8">
				{isCreating || isEditing ? (
					<Loading />
				) : (
					<button type="submit" className="btn btn--primary w-full">
						Add
					</button>
				)}
			</div>
		</form>
	);
};

export default CreateProjectForm;
