import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import appIcon from "../../assets/apps.png"

type CircularProgressCardProps = {
  title: string;
  value: number;
  progress: number;
  weekly: number;
  dailyGoal: number;
};

function CirleProgressCard({ title, value, progress, weekly, dailyGoal }: CircularProgressCardProps) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress / 100);

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow">
      <CardContent>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-light text-black">{title}</h3>
          <img src={appIcon} alt="app icon" className="w-6 h-6" />
        </div>

        <div className="text-4xl font-bold my-3">{value}</div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-xs text-black font-bold">{dailyGoal}% 
              <span className="text-xs font-light text-black"> Daily Goal</span>
            </p>
            <p className="text-xs text-black font-bold ml-3.5">{weekly}
              <span className="text-xs font-light text-black"> This Week</span>
            </p>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative w-16 h-16 cursor-pointer">
                <svg className="w-16 h-16 transform rotate-30">
                  <circle
                    cx="32"
                    cy="32"
                    r={radius}
                    stroke="#e5e7eb"
                    strokeWidth="6"
                    fill="none"
                  />

                  <circle
                    cx="32"
                    cy="32"
                    r={radius}
                    stroke="#2563eb"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${circumference}`}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center md:hidden">
                  <span className="text-xs font-bold">{progress}%</span>
                </div>
              </div>
            </TooltipTrigger>
            <TooltipContent className="hidden md:block">
              <p>{progress}%</p>
            </TooltipContent>
          </Tooltip>
          
        </div>
      </CardContent>
    </Card>
  );
}

export default CirleProgressCard;