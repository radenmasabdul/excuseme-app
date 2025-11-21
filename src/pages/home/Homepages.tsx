import ProgressCard from "../../components/card/ProgressCard";
import CirleProgressCard from "@/components/card/CircleProgressCard";
import LineChart from "@/components/card/LineChart";
import { chartData } from "@/utils/chartData"

function Homepages() {
  return (
    <main className="min-h-screen bg-white p-6 md:px-32 md:pt-8">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <ProgressCard
          title="New Message"
          value={85}
          progressLabel="Response Rate"
          progressValue={75}
        />

        <CirleProgressCard
          title="Leads"
          value={85}
          progress={63}
          weekly={72}
          dailyGoal={60}
        />

        <ProgressCard
          title="New Message"
          value={85}
          progressLabel="Response Rate"
          progressValue={75}
        />
      </div>

      <LineChart data={chartData} title="Weekly Overview" />
    </main>
  )
}

export default Homepages;