import TextField from "../../ui/TextField";
import { completeProfile } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

function CompleteProfileForm() {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const { isPending, mutateAsync } = useMutation({
		mutationFn: completeProfile,
	});

	const onSubmit = async (data) => {
		try {
			const { user, message } = await mutateAsync(data);
			toast.success(message);
			if (user.status !== 2) {
				navigate("/thankYou");
				toast("Your profile is pending approval", { icon: "👏" });
				return;
			}
			if (user.role === "OWNER") return navigate("/owner");
			if (user.role === "FREELANCER") return navigate("/freelancer");
		} catch (error) {
			toast.error(error?.response?.data?.message);
		}
	};
	return (
		<div className="flex justify-center pt-10">
			<div className="w-full sm:max-w-sm">
				<form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
					<TextField
						label="Full Name"
						name="name"
						register={register}
						validationSchema={{
							required: "Full Name is required",
						}}
						errors={errors}
						// onChange={(e) => setName(e.target.value)}
						// value={name}
					/>
					<TextField
						label="Email"
						name="email"
						register={register}
						validationSchema={{
							required: "Email is required",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Invalid email address",
							},
						}}
						errors={errors}
						// onChange={(e) => setEmail(e.target.value)}
						// value={email}
					/>
					<RadioInputGroup
            errors={errors}
            register={register}
            watch={watch}
            configs={{
              name: "role",
              validationSchema: { required: "Role selection is required" },
              options: [
                {
                  value: "OWNER",
                  label: "owner",
                },
                { value: "FREELANCER", label: "freelancer" },
              ],
            }}
          />
					<div>
						{isPending ? (
							<Loading />
						) : (
							<button type="submit" className="btn btn--primary w-full">
								Verify User
							</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}

export default CompleteProfileForm;
