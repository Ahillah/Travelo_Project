import G from "../../../assets/icons/GG.png";
import "../auth.css";

export default function SignUpH() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Hotel Form submitted");
  };

  return (
    <div className="p-4">
      <div className="flex flex-row items-center gap-2">
        <p className="text-[64px] monotype-corsiva">Travel</p>
        <img className="w-[50px] h-[46px]" src={G} alt="Logo" />
      </div>
      <h3 className="font-bold text-[40px] mb-8">
        Sign up <span className="text-gray-500">&gt;</span> Hotel
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <div className="flex flex-col">
          <label htmlFor="hotel-name" className="font-medium">Hotel Name</label>
          <input type="text" id="hotel-name" className="border border-gray-300 rounded p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">Email</label>
          <input type="email" id="email" className="border border-gray-300 rounded p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="font-medium">Phone Number</label>
          <input type="tel" id="phone" className="border border-gray-300 rounded p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="font-medium">Password</label>
          <input type="password" id="password" className="border border-gray-300 rounded p-2" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirm-password" className="font-medium">Confirm Password</label>
          <input type="password" id="confirm-password" className="border border-gray-300 rounded p-2" />
        </div>
        <button type="submit" className="bg-[#27A599] text-white py-3 rounded mt-4 font-bold">Create Account</button>
      </form>
    </div>
  );
}
