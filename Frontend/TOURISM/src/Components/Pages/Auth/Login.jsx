import "./auth.css";
import React, { useState } from "react";
import loginImg from "../../../assets/images/NATURAL.png";
export default function Login() {
  const [userRole, setUserRole] = useState("tourist");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", { email, password, userRole, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-[1100px] bg-white rounded-3xl shadow-lg overflow-hidden flex">
        {/* Left Column - Login Form */}
        <div className="w-[45%] p-12 flex flex-col">
          {/* Brand Header */}
          <div className="mb-12">
            <h1 className="text-3xl font-serif italic text-gray-800 flex items-center gap-2">
              Travel<span className="text-[#4CAF9F] text-4xl">🌍</span>
            </h1>
          </div>

          {/* Login Form */}
          <div className="flex-1">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Login</h2>
              <p className="text-sm text-gray-600">
                Login to access your Golobe account
              </p>
            </div>

            {/* Role Toggle */}
            <div className="mb-6 flex gap-3">
              <button
                type="button"
                onClick={() => setUserRole("tourist")}
                className={userRole === "tourist" ? "active" : ""}
              >
                Tourist
              </button>
              <button
                type="button"
                onClick={() => setUserRole("hotel")}
                className={userRole === "hotel" ? "active" : ""}
              >
                Hotel
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john.doe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-gray-300 text-gray-900 h-12 rounded-md px-4 focus:outline-none focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-medium"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white border border-gray-300 text-gray-900 h-12 rounded-md px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#00BFA5] focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? "👁️" : "👁"}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 border-gray-300 rounded focus:ring-[#00BFA5]"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-700 cursor-pointer font-normal"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#forgot-password"
                  className="text-sm text-[#FF6B6B] hover:text-[#FF5252] font-normal"
                >
                  Forgot Password
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-[#00BFA5] hover:bg-[#00AB94] text-white h-12 rounded-md text-base font-semibold mt-6 transition-colors"
              >
                Login
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-gray-700 pt-2">
                Don't have an account?{" "}
                <a
                  href="#signup"
                  className="text-[#FF6B6B] hover:text-[#FF5252] font-medium"
                >
                  Sign up
                </a>
              </p>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-gray-500">
                    Or login with
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="bg-white border border-gray-300 hover:bg-gray-50 h-12 rounded-md flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-[#1877F2]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="bg-white border border-gray-300 hover:bg-gray-50 h-12 rounded-md flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="bg-white border border-gray-300 hover:bg-gray-50 h-12 rounded-md flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-[55%] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=900&fit=crop"
            alt="Travel destination"
            className="w-full h-full object-cover rounded-l-[3rem]"
          />
        </div>
      </div>
    </div>
  );
}
