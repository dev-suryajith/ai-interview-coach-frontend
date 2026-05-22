import React from "react";

import {
    Brain,
    Sparkles,
    FileText,
    BarChart3,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-125500px] bg-blue-500/10 blur-3xl rounded-full"></div>

            <div className="absolute top-[30%] right-0 w-100400px] bg-purple-500/10 blur-3xl rounded-full"></div>

            {/* Navbar */}
            <nav className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <div className="bg-blue-500/10 p-3 rounded-2xl">
                        <Brain
                            className="text-blue-400"
                            size={26}
                        />
                    </div>

                    <h1 className="text-2xl font-bold">
                        InterviewAI
                    </h1>
                </div>

                <div className="flex items-center gap-4">

                    <Link
                        to="/login"
                        className="text-gray-300 hover:text-white transition-all"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="bg-blue-500 hover:bg-blue-600 transition-all px-5 py-3 rounded-2xl font-medium"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-24">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}
                    <div>

                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8">

                            <Sparkles size={16} />

                            AI-Powered Interview Preparation
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">

                            Ace Your
                            <span className="text-blue-400">
                                {" "}Interviews
                            </span>
                            {" "}with AI
                        </h1>

                        <p className="text-gray-400 text-lg leading-9 max-w-2xl mb-10">

                            Generate personalized mock interviews,
                            practice role-specific questions,
                            upload your resume, and receive
                            detailed AI-powered feedback to
                            improve your performance.
                        </p>

                        <div className="flex flex-wrap items-center gap-5">

                            <Link
                                to="/register"
                                className="bg-blue-500 hover:bg-blue-600 active:scale-[0.99] transition-all px-7 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-lg shadow-blue-500/20"
                            >
                                Start Practicing

                                <ArrowRight size={20} />
                            </Link>

                            <Link
                                to="/login"
                                className="bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/20 transition-all px-7 py-4 rounded-2xl font-medium"
                            >
                                Login
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 mt-14">

                            <div>
                                <h2 className="text-4xl font-bold mb-2">
                                    AI
                                </h2>

                                <p className="text-gray-400">
                                    Interview Generation
                                </p>
                            </div>

                            <div>
                                <h2 className="text-4xl font-bold mb-2">
                                    Resume
                                </h2>

                                <p className="text-gray-400">
                                    Based Interviews
                                </p>
                            </div>

                            <div>
                                <h2 className="text-4xl font-bold mb-2">
                                    Real-Time
                                </h2>

                                <p className="text-gray-400">
                                    AI Feedback
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right UI */}
                    <div className="relative">

                        <div className="relative bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">

                            {/* Top */}
                            <div className="flex items-center justify-between mb-8">

                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">
                                        AI Mock Interview
                                    </h2>

                                    <p className="text-gray-400">
                                        MERN Stack Developer
                                    </p>
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-2xl text-blue-400 font-medium">
                                    Question 3/5
                                </div>
                            </div>

                            {/* Progress */}
                            <div className="w-full h-3 bg-[#0b1120] rounded-full overflow-hidden mb-8">

                                <div className="w-[60%] h-full bg-blue-500 rounded-full"></div>
                            </div>

                            {/* Question */}
                            <div className="bg-[#0b1120] border border-white/5 rounded-4xl p-6 mb-6">

                                <h3 className="text-xl leading-8 font-medium">
                                    Explain the difference between
                                    authentication and authorization
                                    in web applications.
                                </h3>
                            </div>

                            {/* Answer Box */}
                            <div className="bg-[#0b1120] border border-white/5 rounded-4xl p-6 mb-8">

                                <div className="space-y-4">

                                    <div className="h-3 bg-white/10 rounded-full w-full"></div>

                                    <div className="h-3 bg-white/10 rounded-full w-[90%]"></div>

                                    <div className="h-3 bg-white/10 rounded-full w-[75%]"></div>

                                    <div className="h-3 bg-white/10 rounded-full w-[50%]"></div>
                                </div>
                            </div>

                            {/* Score */}
                            <div className="flex items-center justify-between bg-[#0b1120] border border-white/5 rounded-4xl p-5">

                                <div>

                                    <p className="text-gray-400 text-sm mb-2">
                                        AI Evaluation Score
                                    </p>

                                    <h2 className="text-4xl font-bold text-green-400">
                                        88%
                                    </h2>
                                </div>

                                <div className="bg-green-500/10 p-4 rounded-2xl">
                                    <CheckCircle2
                                        className="text-green-400"
                                        size={32}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">

                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">

                        <Sparkles size={16} />

                        Features
                    </div>

                    <h2 className="text-5xl font-bold mb-6">
                        Everything You Need
                    </h2>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-8">

                        Practice smarter with AI-generated
                        interviews and detailed performance
                        analysis.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card */}
                    {[
                        {
                            icon: Brain,
                            title:
                                "AI Interview Generation",
                            desc:
                                "Generate personalized mock interview questions instantly.",
                        },

                        {
                            icon: FileText,
                            title:
                                "Resume-Based Questions",
                            desc:
                                "Upload your resume and receive customized interview questions.",
                        },

                        {
                            icon: BarChart3,
                            title:
                                "Performance Analytics",
                            desc:
                                "Track your scores, progress, and interview history.",
                        },

                        {
                            icon: Sparkles,
                            title:
                                "Detailed AI Feedback",
                            desc:
                                "Receive strengths, improvements, and actionable tips.",
                        },
                    ].map((feature, index) => {

                        const Icon = feature.icon;

                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 hover:border-blue-500/20 transition-all rounded-4xl p-7"
                            >

                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/3 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all"></div>

                                <div className="relative">

                                    <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-7">

                                        <Icon
                                            className="text-blue-400"
                                            size={28}
                                        />
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-4">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-400 leading-8">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="relative z-10 max-w-5xl mx-auto px-6 pb-24">

                <div className="relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-[3rem] p-10 md:p-16 text-center">

                    <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

                    <div className="relative">

                        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8">

                            <Sparkles size={16} />

                            Start Today
                        </div>

                        <h2 className="text-5xl font-bold mb-8 leading-tight">

                            Practice Interviews
                            <br />
                            Smarter with AI
                        </h2>

                        <p className="text-gray-400 text-lg leading-8 max-w-2xl mx-auto mb-10">

                            Build confidence, improve your
                            communication, and prepare for
                            your next interview with
                            AI-powered mock interviews.
                        </p>

                        <Link
                            to="/register"
                            className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 active:scale-[0.99] transition-all px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-blue-500/20"
                        >
                            Get Started Now

                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;