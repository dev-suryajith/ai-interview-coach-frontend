import React, {
    useRef,
    useState,
} from "react";

import {
    UploadCloud,
    FileText,
    X,
    Sparkles,
    Loader2,
    Hash
} from "lucide-react";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import { generateUsingResumeAPI } from "../services/allAPI";

const ResumeUpload = () => {
    const token =
        localStorage.getItem("token");

    const reqHeader = {
        Authorization: `Bearer ${token}`,
    };
    const fileInputRef = useRef();
    const navigate = useNavigate();
    const [count, setcount] = useState(5);
    const [dragActive, setDragActive] = useState(false);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

    const handleFileChange = (
        selectedFile
    ) => {
        if (!selectedFile) return;

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (
            !allowedTypes.includes(
                selectedFile.type
            )
        ) {
            return toast.error(
                "Only PDF and DOC/DOCX files are allowed"
            );
        }

        if (
            selectedFile.size >
            5 * 1024 * 1024
        ) {
            return toast.error(
                "File size must be below 5MB"
            );
        }

        setFile(selectedFile);
    };

    const handleDrop = (e) => {
        e.preventDefault();

        setDragActive(false);

        const droppedFile =
            e.dataTransfer.files[0];

        handleFileChange(droppedFile);
    };

    const removeFile = () => {
        setFile(null);

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleGenerate =
        async () => {
            if (!file) {
                return toast.error(
                    "Please upload a resume"
                );
            }

            try {
                setLoading(true);

                const formData =
                    new FormData();

                formData.append("resume", file);
                formData.append("count", count);

                const response =
                    await generateUsingResumeAPI(
                        formData,
                        reqHeader
                    );

                toast.success(
                    "Interview generated successfully"
                );

                navigate(
                    `/interview/${response.data.interviewId}`
                );

            } catch (err) {

                console.log(err);

                toast.error(
                    "Failed to process resume"
                );

            } finally {

                setLoading(false);
            }
        };

    return (
        <div className="relative overflow-hidden bg-[#1e293b]/60 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 lg:p-10">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 blur-3xl rounded-full"></div>

            <div className="relative">

                {/* Header */}
                <div className="text-center mb-10">

                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-5">
                        <Sparkles size={16} />
                        Resume AI
                    </div>

                    <h2 className="text-4xl font-bold mb-4">
                        Upload Your Resume
                    </h2>

                    <p className="text-gray-400 leading-8 max-w-2xl mx-auto">
                        Upload your resume and let AI
                        generate highly personalized
                        interview questions based on
                        your skills and experience.
                    </p>
                </div>

                {/* Upload Area */}
                <div
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragActive(true);
                    }}
                    onDragLeave={() =>
                        setDragActive(false)
                    }
                    onDrop={handleDrop}
                    onClick={() =>
                        fileInputRef.current.click()
                    }
                    className={`relative overflow-hidden border-2 border-dashed rounded-4xl p-10 transition-all cursor-pointer ${dragActive
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-white/10 bg-[#0b1120] hover:border-blue-500/30"
                        }`}
                >

                    {!file ? (
                        <div className="flex flex-col items-center justify-center text-center py-10">

                            <div className="bg-blue-500/10 p-6 rounded-3xl mb-7">
                                <UploadCloud
                                    className="text-blue-400"
                                    size={42}
                                />
                            </div>

                            <h2 className="text-3xl font-bold mb-4">
                                Drag & Drop Resume
                            </h2>

                            <p className="text-gray-400 leading-8 max-w-lg mb-6">
                                Or click to browse files
                                from your device
                            </p>

                            <div className="flex flex-wrap justify-center gap-3">

                                {[
                                    "PDF",
                                    "DOC",
                                    "DOCX",
                                    "Max 5MB",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm text-gray-300"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="bg-[#111827] border border-white/5 rounded-4xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">

                            <div className="flex items-center gap-5">

                                <div className="bg-blue-500/10 p-5 rounded-2xl">
                                    <FileText
                                        className="text-blue-400"
                                        size={30}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {file.name}
                                    </h3>

                                    <p className="text-gray-400">
                                        {(
                                            file.size /
                                            1024 /
                                            1024
                                        ).toFixed(2)}{" "}
                                        MB
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile();
                                }}
                                className="bg-red-500/10 hover:bg-red-500/20 transition-all p-3 rounded-2xl w-fit"
                            >
                                <X
                                    className="text-red-400"
                                    size={20}
                                />
                            </button>
                        </div>
                    )}

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) =>
                            handleFileChange(
                                e.target.files[0]
                            )
                        }
                    />

                </div>
                <div>
                    <label className="flex items-center gap-2 text-gray-300 mt-2 mb-1 font-medium  ">
                        <Hash size={18} />
                        Number of Questions
                    </label>

                    <input
                        type="number"
                        min="1"
                        max="15"
                        value={count}
                        onChange={(e) => setcount(e.target.value)}
                        className="w-full bg-[#0b1120] border-2 border-dashed border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all rounded-2xl px-5 py-4 outline-none"
                    />
                </div>

                {/* CTA */}
                <div className="mt-8">

                    <button
                        onClick={handleGenerate}
                        disabled={loading}
                        className="w-full bg-blue-500 hover:bg-blue-600 active:scale-[0.99] disabled:opacity-70 transition-all py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 shadow-lg shadow-blue-500/20"
                    >
                        {loading ? (
                            <>
                                <Loader2
                                    className="animate-spin"
                                    size={22}
                                />

                                Processing Resume...
                            </>
                        ) : (
                            <>
                                <Sparkles size={20} />
                                Generate Interview
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResumeUpload;