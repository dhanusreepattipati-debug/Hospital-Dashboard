import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  HeartPulse,
  LogIn,
  Shield,
  Stethoscope,
  Activity,
  UserCog,
} from "lucide-react";

export default function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState(
    "admin@hospital.com"
  );

  const [password, setPassword] =
    useState("password");

  const [role, setRole] = useState("admin");

  const [error, setError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");
    login(email, role);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 overflow-hidden relative px-4 py-8">

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[32px] shadow-2xl border border-white/10 backdrop-blur-xl">

        <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-blue-700 via-cyan-600 to-sky-500 p-10 text-white relative overflow-hidden">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg">
                <HeartPulse className="w-8 h-8 text-white" />
              </div>

              <div>
                <h1 className="text-3xl font-bold">
                  LIFELINE
                </h1>

                <p className="text-white/80 text-sm">
                  Hospital Management System
                </p>
              </div>
            </div>

            <div className="max-w-md">
              <h2 className="text-5xl font-bold leading-tight">
                Smart Healthcare Dashboard
              </h2>

              <p className="text-white/80 mt-5 text-lg leading-8">
                Manage patients, doctors,
                appointments, and hospital
                operations with a modern and
                intelligent platform.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-xl p-6 sm:p-10 flex items-center justify-center">
          <div className="w-full max-w-md">

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-5">
                <UserCog size={16} />
                Secure Login Portal
              </div>

              <h2 className="text-4xl font-bold text-gray-900">
                Welcome Back
              </h2>

              <p className="text-gray-500 mt-3 leading-7">
                Sign in to access the
                hospital dashboard.
              </p>
            </div>

            {error && (
              <div className="mb-5 p-4 bg-red-50 border border-red-200 text-red-600 rounded-2xl text-sm font-medium">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={e =>
                    setEmail(e.target.value)
                  }
                  placeholder="doctor@hospital.com"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={e =>
                    setPassword(e.target.value)
                  }
                  placeholder="••••••••"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Login Role
                </label>

                <select
                  value={role}
                  onChange={e =>
                    setRole(e.target.value)
                  }
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200"
                >
                  <option value="admin">
                    Admin
                  </option>

                  <option value="doctor">
                    Doctor
                  </option>

                  <option value="staff">
                    Staff
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 text-white font-semibold flex items-center justify-center gap-3"
              >
                <LogIn size={20} />
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
