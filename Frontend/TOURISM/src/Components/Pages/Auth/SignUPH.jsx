import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import G from "../../../assets/icons/GG.png";
import photo from "../../../assets/images/RECTANGLE.png";
import eyee from "../../../assets/icons/close.png";
import openEye from "../../../assets/icons/open.png";
import "../auth.css";

export default function SignUPH() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const schema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 characters long"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Confirm password must be at least 8 characters long"),
    checkbox: z.boolean().refine((value) => value, "You must agree to the terms and conditions"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
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

  function handleLogin() {
    navigate("/Login");
  }

  return (
    <div className="flex flex-row ">
      <div className="mt-[104px] ml-[125px] gap-[64px] w-[414px] h-[762px]">
        <div className="flex flex-row items-center gap-2">
          <p className="text-[64px] monotype-corsiva">Travel</p>
          <img className="w-[50px] h-[46px]" src={G} alt="Logo" />
        </div>
        <h3 className="text-[24px] mb-8 text-[#112211]">
          Sign Up <span className="text-[#112211] w-[24px] h-[24px]">&gt;</span> Hotel
        </h3>
        <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-[14px] font-semibold montserrat">Name</label>
            <input type="text" id="name" className="border-[1px] border-[#AFAFAF] rounded-[8px] p-2 w-full" placeholder="Enter your name" {...register("name")} />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[14px] font-semibold montserrat">Email</label>
            <input type="email" id="email" className="border-[1px] border-[#AFAFAF] rounded-[8px] p-2 w-full" placeholder="Enter your email" {...register("email")} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-[14px] font-semibold montserrat">Phone Number</label>
            <input type="tel" id="phone" className="border-[1px] border-[#AFAFAF] rounded-[8px] p-2 w-full" placeholder="Enter your phone number" {...register("phone")} />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
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
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-[14px] font-semibold montserrat">Confirm Password</label>
            <div className="relative">
              <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" className="border-[1px] border-[#AFAFAF] rounded-[8px] p-2 w-full pr-10" placeholder="***************" {...register("confirmPassword")} />
              <img 
                src={showConfirmPassword ? openEye : eyee} 
                alt="toggle confirm password visibility" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <input type="checkbox" {...register("checkbox")} />
              <p className="pl-2">I agree to all the <span className="text-[#FF8682] font-semibold">Terms</span> and <span className="text-[#FF8682] font-semibold">Privacy Policies</span></p>
            </div>
          </div>
          <button type="submit" className="bg-[#27A599] text-[#112211] w-[414px] h-[49px] p-[10px] gap-[10px] rounded-[8px] text-[24px] font-semibold flex justify-center items-center">Create Account</button>
          <p className="text-center">
            Already have an account? <button type="button" className="text-[#B72618]" onClick={handleLogin}>Login</button>
          </p>
        </form>
      </div>
      <div>
        <img src={photo} alt="" className="w-[576px] h-[816px] mt-[104px] ml-[125px] hidden lg:block" />
      </div>
    </div>
  );
}
