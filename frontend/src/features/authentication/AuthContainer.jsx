import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";

const AuthContainer = () => {
	const [step, setStep] = useState(1);
	const navigate = useNavigate();
	const { handleSubmit, register, getValues } = useForm();
	const { user } = useUser
	const { isPending: isSendingOtp, data: otpResponse, mutateAsync } = useMutation({ mutationFn: getOtp, });

	useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

	const sendOtpHandler = async (data) => {
		try {
			const { message } = await mutateAsync( data );
			setStep(2);
			console.log(step);
			toast.success(message);
		} catch (error) {
			toast.error(error?.response?.data?.message);
		}
	};

	const renderStep = () => {
		switch (step) {
			case 1:
				return (
					<SendOTPForm
						isSendingOtp={isSendingOtp}
						onSubmit={handleSubmit(sendOtpHandler)}
						setStep={setStep}
						register={register}
						// phoneNumber={phoneNumber}
						// onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				);
			case 2:
				return (
					<CheckOTPForm
						phoneNumber={getValues("phoneNumber")}
						onBack={() => setStep((s) => s - 1)}
						onReSendOtp={sendOtpHandler}
            otpResponse={otpResponse}
					/>
				);
			default:
				return null;
		}
	};

	return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
};

export default AuthContainer;
