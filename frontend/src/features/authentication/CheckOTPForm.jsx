import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loading from "../../ui/Loading";

const RESEND_TIME = 20;

const CheckOTPForm = ({ phoneNumber, onBack, onReSendOtp, otpResponse }) => {
	const [otp, setOtp] = useState("");
	const [time, setTime] = useState(RESEND_TIME);
	const navigate = useNavigate();

	const { isPending, mutateAsync } = useMutation({
		mutationFn: checkOtp,
	});

	const checkOtpHandler = async (e) => {
		e.preventDefault();
		try {
			const { user, message } = await mutateAsync({ phoneNumber, otp });
			toast.success(message);
				// push to panel based on role
				if (!user.isActive) return navigate("/complete-profile");
        if (Number(user.status) !== 2) {
          navigate("/");
          toast.error("Your profile is pending approval");
          return;
        }
        if (user.role === "OWNER") return navigate("/owner");
				if (user.role === "FREELANCER") return navigate("/freelancer");
				if (user.role === "ADMIN") return navigate("/admin");
		} catch (error) {
			toast.error(error?.response?.data?.message);
		}
	};

	useEffect(() => {
		const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
		return () => {
			if (timer) clearInterval(timer);
		};
	}, [time]);

	return (
		<div>
			<button onClick={onBack}>
				<HiArrowLeft className="w-6 h-6 text-secondary-500" />
			</button>
			{otpResponse && (
				<p className="flex items-center gap-x-2 my-4">
					<span>{otpResponse?.message}</span>
					<button onClick={onBack}>
						<CiEdit className="w-6 h-6 text-primary-900" />
					</button>
				</p>
			)}
			<div className="mb-4 text-secondary-500">
				{time > 0 ? (
					<p>Resend code in {time} seconds</p>
				) : (
					<button onClick={onReSendOtp}>Re-send OTP</button>
				)}
			</div>
			<form className="space-y-10" onSubmit={checkOtpHandler}>
				<p className="font-bold text-secondary-800">Enter Verification Code:</p>
				<OTPInput
					value={otp}
					onChange={setOtp}
					numInputs={6}
					renderSeparator={<span>-</span>}
					renderInput={(props) => <input type="number" {...props} />}
					containerStyle="flex flex-row gap-x-2 justify-center"
					inputStyle={{
						width: "2.5rem",
						padding: "0.5rem 0.2rem",
						border: "1px solid rgb(var(--color-primary-400))",
						borderRadius: "0.5rem",
					}}
				/>
				<div>
					{isPending ? (
						<Loading />
					) : (
						<button type="submit" className="btn btn--primary w-full">
							Verify
						</button>
					)}
				</div>
			</form>
		</div>
	);
};

export default CheckOTPForm;
