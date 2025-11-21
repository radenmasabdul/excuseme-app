import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import chatIcon from "../../assets/chat.png";

type ProgressCardProps = {
  title: string;
  value: number;
  progressLabel: string;
  progressValue: number;
};

function ProgressCard({ title, value, progressLabel, progressValue }: ProgressCardProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow">
      <CardContent>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-light text-black">{title}</h3>
          <img src={chatIcon} alt="chat icon" className="w-6 h-6" />
        </div>

        <div className="text-4xl font-bold my-3">{value}</div>

        <div className="border-b border-[#DBE8F4] mb-4 -mx-6"></div>

        <div className="space-y-2 py-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-full bg-[#DBE8F4] rounded-full h-2 cursor-pointer">
                <div
                  className="bg-[#1767B2] h-2 rounded-full"
                  style={{ width: `${progressValue}%` }}
                ></div>
              </div>
            </TooltipTrigger>
            <TooltipContent side="top">
              {progressValue}%
            </TooltipContent>
          </Tooltip>

          <div className="text-xs text-black font-bold text-left">
            {progressLabel}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProgressCard;