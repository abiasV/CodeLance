import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

const SendOTPForm = ({ onSubmit, isSendingOtp, register }) => {
	return (
		<div>
			<form className="space-y-10" onSubmit={onSubmit}>
				<TextField
					label="Phone Number"
					name="phoneNumber"
					register={register}
				/>
				<div>
					{isSendingOtp ? (
						<Loading />
					) : (
						<button type="submit" className="btn btn--primary w-full">
							Send Verification Code
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default SendOTPForm;
