// App.jsx
import React, { useState } from "react";
import BisectionMethodSolver from "./bisectionSolver";
import RegulaFalsiSolver from "./RegulaFalsiSolver";
import JacobiGaussSolver from "./JacobiSeidal";
import SecantMethodSolver from "./SecantSolver";

export default function App() {

  const [activeComponent, setActiveComponent] = useState("home");

  // Conditional Rendering
  if (activeComponent === "bisection") {
    return <BisectionMethodSolver />;
  }

  if (activeComponent === "regula") {
    return <RegulaFalsiSolver />;
  }

  if (activeComponent === "secant") {
    return <SecantMethodSolver />;
  }

  if (activeComponent === "jacobi-gauss") {
    return <JacobiGaussSolver />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-600 text-white p-6 flex flex-col items-center">

      {/* Header Section */}
      <div className="text-center mb-12 animate-fade-in">
        <div className="bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-2xl">
          <h1 className="text-4xl font-extrabold tracking-wide mb-3 bg-gradient-to-r from-pink-300 to-purple-200 bg-clip-text text-transparent">
            Benazir Bhutto Shaheed University Lyari
          </h1>
          <h2 className="text-2xl font-semibold opacity-95 mb-4">Numerical Computing Assignment</h2>
          <div className="flex flex-col gap-1 text-lg">
            <p className="font-bold text-pink-200">Developed by: Qurat ul Ain</p>
            <p className="text-purple-200">Roll Number: 92</p>
            <p className="text-purple-200">Semester: 8th "B"</p>
            <p className="text-purple-200">Instructor: Sir Afzal</p>
          </div>
        </div>
      </div>

      {/* Methods Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">

        {/* Bisection Method Card */}
        <div className="group bg-gradient-to-br from-pink-500/30 to-rose-500/30 backdrop-blur-xl border-2 border-pink-300/40 shadow-2xl rounded-3xl text-white p-7 hover:scale-105 hover:shadow-pink-500/50 transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-pink-400/30 rounded-2xl mb-4 group-hover:bg-pink-400/50 transition-all">
            <span className="text-3xl">📊</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-pink-100">Bisection Method</h3>
          <p className="opacity-90 mb-5 text-pink-50 leading-relaxed">
            A reliable root-finding algorithm that repeatedly divides an interval in half to locate roots with guaranteed convergence.
          </p>
          <button
            onClick={() => setActiveComponent("bisection")}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Launch Solver →
          </button>
        </div>

        {/* Regula Falsi Method Card */}
        <div className="group bg-gradient-to-br from-purple-500/30 to-indigo-500/30 backdrop-blur-xl border-2 border-purple-300/40 shadow-2xl rounded-3xl text-white p-7 hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-purple-400/30 rounded-2xl mb-4 group-hover:bg-purple-400/50 transition-all">
            <span className="text-3xl">📐</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-purple-100">Regula Falsi Method</h3>
          <p className="opacity-90 mb-5 text-purple-50 leading-relaxed">
            An enhanced false-position technique that uses linear interpolation to approximate roots faster than bisection.
          </p>
          <button
            onClick={() => setActiveComponent("regula")}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Launch Solver →
          </button>
        </div>

        {/* Secant Method Card */}
        <div className="group bg-gradient-to-br from-blue-500/30 to-cyan-500/30 backdrop-blur-xl border-2 border-blue-300/40 shadow-2xl rounded-3xl text-white p-7 hover:scale-105 hover:shadow-blue-500/50 transition-all duration-300">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-400/30 rounded-2xl mb-4 group-hover:bg-blue-400/50 transition-all">
            <span className="text-3xl">⚡</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-blue-100">Secant Method</h3>
          <p className="opacity-90 mb-5 text-blue-50 leading-relaxed">
            A powerful derivative-free approach that approximates Newton's method using secant lines for rapid convergence.
          </p>
          <button
            onClick={() => setActiveComponent("secant")}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Launch Solver →
          </button>
        </div>

        {/* Jacobi & Gauss-Seidel Combined Card */}
        <div className="group bg-gradient-to-br from-teal-500/30 to-green-500/30 backdrop-blur-xl border-2 border-teal-300/40 shadow-2xl rounded-3xl text-white p-7 hover:scale-105 hover:shadow-teal-500/50 transition-all duration-300 sm:col-span-2 lg:col-span-3">
          <div className="flex items-center justify-center w-16 h-16 bg-teal-400/30 rounded-2xl mb-4 group-hover:bg-teal-400/50 transition-all">
            <span className="text-3xl">🔄</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-teal-100">Jacobi & Gauss-Seidel Methods</h3>
          <p className="opacity-90 mb-5 text-teal-50 leading-relaxed">
            Advanced iterative solvers for linear systems that provide side-by-side comparison of convergence rates and solution accuracy for complex matrix equations.
          </p>
          <button
            onClick={() => setActiveComponent("jacobi-gauss")}
            className="w-full max-w-md mx-auto bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-bold px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Launch Solver →
          </button>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-12 text-center opacity-80">
        <p className="text-sm">© 2025 BBSUL - Numerical Computing Project</p>
      </div>
    </div>
  );
}