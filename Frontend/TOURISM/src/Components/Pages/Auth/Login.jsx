import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import G from "../../../assets/icons/GG.png";
import eyee from "../../../assets/icons/close.png";
import openEye from "../../../assets/icons/open.png";
import "../auth.css";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    
    const schema = z.object({
        email: z.string().email("Invalid email address"),
        password: z.string().min(8, "Password must be at least 8 characters long"),
    });

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        resolver: zodResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
        // Api Request
    };

    return (
        <div className="">
            <div className="flex flex-row items-center gap-2">
                <p className="text-[64px] monotype-corsiva">Travel</p>
                <img className="w-[50px] h-[46px]" src={G} alt="Logo" />
            </div>
            <div>
                <p className="font-inter text-[40px] font-bold leading-[100%] tracking-[0%]">Login</p>
                <p className="font-inter text-[#112211] text-[16px] font-normal leading-[100%] tracking-[0%]">Login to access your Golobe account</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-[14px] font-semibold montserrat">Email</label>
                        <input type="email" id="email" className="border-[1px] border-[#AFAFAF] rounded-[8px] p-2 w-full" placeholder="Enter your email" {...register("email")} />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-[14px] font-semibold montserrat">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} id="password" className="border-[1px] border-[#AFAFAF] rounded-[8px] p-2 w-full pr-10" placeholder="***************" {...register("password")} />
                            <img 
                                src={showPassword ? openEye : eyee} 
                                alt="toggle password visibility" 
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer" 
                                onClick={() => setShowPassword(!showPassword)}
                            />
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center">
                            <input type="checkbox" {...register("checkbox")} />
                            <p className="font-inter text-[14px] font-medium leading-[100%] tracking-[0%]">Remember me</p>
                        </div>
                        <button type="button" className="font-inter text-[14px]  text-[#FF8682]font-medium leading-[100%] tracking-[0%] text-right">Forgot Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
}