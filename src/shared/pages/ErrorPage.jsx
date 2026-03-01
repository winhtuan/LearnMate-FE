import { useLocation, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const error = state?.error;
  const status = error?.status;
  const message = error?.message || "An unexpected error occurred.";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-8">
      <div className="max-w-md w-full text-center space-y-4">
        {status && (
          <p className="text-5xl font-extrabold text-slate-300">{status}</p>
        )}
        <h1 className="text-xl font-semibold text-slate-800">
          Something went wrong
        </h1>
        <p className="text-sm text-slate-500">{message}</p>
        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-sm rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Go back
          </button>
          <button
            onClick={() => navigate("/", { replace: true })}
            className="px-4 py-2 text-sm rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
