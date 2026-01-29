import { trialLessonRequestData } from "../data/trialLessonRequest.data";
import TrialRequestHeader from "../components/TrialRequestHeader";
import TrialRequestFilters from "../components/TrialRequestFilters";
import TrialRequestItem from "../components/TrialRequestItem";

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
