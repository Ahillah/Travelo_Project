import { useNavigate } from "react-router-dom";
import G from "../../../assets/icons/GG.png";
import photo from "../../../assets/images/RECTANGLE.png"
import "../auth.css";


export default function SignUPT() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };
  function handleLogin() {
    navigate("/Login");
  }

  return (
    <div className="flex flex-row gap-[96px] mt-[5px]">
    <div className="p-4 w-[414px] h-[762px]">
      <div className="flex flex-row items-center gap-2">
        <p className="text-[64px] monotype-corsiva">Travel</p>
        <img className="w-[50px] h-[46px]" src={G} alt="Logo" />
      </div>
      <h3 className="font-bold text-[40px] mb-8">
        Sign up <span className="text-gray-500">&gt;</span> Tourist
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium">Name</label>
          <input type="text" id="name" className="border border-gray-300 rounded p-2" placeholder="Enter your name"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">Email</label>
          <input type="email" id="email" className="border border-gray-300 rounded p-2" placeholder="Enter your email"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-medium">Phone Number</label>
          <input type="tel" id="phone" className="border border-gray-300 rounded p-2" placeholder="Enter your phone number"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-medium">Password</label>
          <input type="password" id="password" className="border border-gray-300 rounded p-2" placeholder="***************"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirm-password" className="font-medium">Confirm Password</label>
          <input type="password" id="confirm-password" className="border border-gray-300 rounded p-2" placeholder="***************"/>
        </div>
        <div className="flex flex-row">
         <input type="checkbox" />
           I agree to all the{" "}
  <span className="text-[#FF8682] font-semibold">Terms</span>{" "}
  and{" "}
  <span className="text-[#FF8682] font-semibold">Privacy Policies</span>
        </div>
        <button type="submit" className="bg-[#27A599] text-white py-3 rounded mt-4 font-bold">Create Account</button>
        <p className="text-center" >Already have an account?  <button className="text-[#B72618] " onClick={handleLogin}>Login</button>
         
        </p>
      </form>
    </div>
    <div>
      <img src={photo} alt="" className="w-[576px] h-[816px] " />
    </div>
    </div>
  );
}
