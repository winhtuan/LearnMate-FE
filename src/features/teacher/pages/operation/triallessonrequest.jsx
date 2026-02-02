import TeacherLayout from "@/features/teacher/components/operation/TeacherLayout";
import TrialRequestHeader from "@/features/teacher/components/operation/TrialRequestHeader";
import TrialRequestFilters from "@/features/teacher/components/operation/TrialRequestFilters";
import TrialRequestItem from "@/features/teacher/components/operation/TrialRequestItem";
import { trialLessonRequestData } from "@/features/teacher/data/operation/trialLessonRequest.data";

export default function TrialLessonRequest() {
  const { header, filters, requests } = trialLessonRequestData;

  return (
    <main className="flex-1 w-full max-w-[1040px] mx-auto px-4 md:px-6 py-8 md:py-12">
      <TrialRequestHeader data={header} />

      <TrialRequestFilters filters={filters} />

      <div className="flex flex-col gap-5">
        {requests.map((request) => (
          <TrialRequestItem key={request.id} request={request} />
        ))}
      </div>
    </main>
  );
}
