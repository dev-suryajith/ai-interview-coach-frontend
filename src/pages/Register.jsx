import React, { useState } from "react";
import { User, Mail, Lock, ArrowRight, Loader2, Brain, } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registerUserAPI } from "../services/allAPI";

const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      return toast.error(
        "Please fill all fields"
      );
    }

    try {
      setLoading(true);

      await registerUserAPI(formData);

      toast.success(
        "Registration successful"
      );

      navigate("/login");

    } catch (err) {
      toast.error("Registration failed");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Logo / Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Create Account
          </h1>

          <p className="text-gray-400 mt-3 text-md leading-7">
            Start practicing AI-powered mock interviews
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#1e293b] border border-gray-800 rounded-3xl p-8">

          <form
            onSubmit={handleRegister}
            className="space-y-6"
          >

            {/* Username */}
            <div>
              <label className="text-gray-300 mb-3 flex items-center gap-2 font-medium">
                <User size={18} />
                Username
              </label>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      username: e.target.value,
                    })
                  }
                  className="w-full bg-[#0f172a] border border-gray-800 focus:border-blue-500 transition-all rounded-2xl py-4 px-5 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-300 mb-3 flex items-center gap-2 font-medium">
                <Mail size={18} />
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full bg-[#0f172a] border border-gray-800 focus:border-blue-500 transition-all rounded-2xl py-4 px-5 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-gray-300 mb-3 flex items-center gap-2 font-medium">
                <Lock size={18} />
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                className="w-full bg-[#0f172a] border border-gray-800 focus:border-blue-500 transition-all rounded-2xl py-4 px-5 outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-70 transition-all py-4 rounded-2xl font-semibold flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <Loader2
                    className="animate-spin"
                    size={22}
                  />

                  Creating Account...
                </>
              ) : (
                <>
                  <ArrowRight size={20} />

                  Create Account
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">

            <p className="text-gray-400">
              Already have an account?{" "}

              <Link
                to="/login"
                className="text-blue-400 hover:text-blue-300 transition-all font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;