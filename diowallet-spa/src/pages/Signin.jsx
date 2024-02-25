import Input from "../components/Input";
import Button from "../components/Button";
import LogoHeader from "../components/LogoHeader";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorInput from "../components/ErrorInput";

const signinSchema = z.object({
	email: z.string().nonempty("O email é obrigatório").email().toLowerCase(),
	password: z.string().min(8),
});

export default function Signin() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(signinSchema) });

	function handleSubmitForm(data) {
		console.log(data);
	}
	return (
		<>
			<div className="flex flex-col items-center justify-between rounded p-8 w-[35rem] h-[35rem] bg-violet-200/25 text-2xl">
				<LogoHeader />

				<form
					onSubmit={handleSubmit(handleSubmitForm)}
					className="flex flex-col justify-center gap-3 w-[20rem] text-xl"
				>
					<div>
						<Input
							type="email"
							placeholder="Email"
							register={register}
							name="email"
						/>
						{errors.email && <ErrorInput text={errors.email.message} />}
					</div>
					<div>
						<Input
							type="password"
							placeholder="Password"
							register={register}
							name="password"
						/>
						{errors.password && <ErrorInput text={errors.password.message} />}
					</div>
					<Button type="submit" text="SIGN IN" />
				</form>
				<p className="text-white text-sm align-center">
					Dont have an account?{" "}
					<Link
						to="/signup"
						className="underline  text-gray-400 hover:text-gray-600"
					>
						Register now
					</Link>
					{}
				</p>
			</div>
		</>
	);
}
