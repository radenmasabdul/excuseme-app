import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type LineChartCardProps = {
  data: { name: string; value1: number; value2: number }[];
  title?: string;
};

function LineChartCard({ data, title }: LineChartCardProps) {
  return (
    <Card className="shadow-lg w-full">
      <CardContent className="p-6">
        {title && <h3 className="text-sm font-medium text-gray-600 mb-4">{title}</h3>}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              ticks={[0, 250, 500, 750, 1000, 1250]}
            />
            <Line
              type="monotone"
              dataKey="value1"
              stroke="#1767B2"
              strokeWidth={3}
              dot={{ fill: "#2563eb", r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="value2"
              stroke="#DBE8F4"
              strokeWidth={2}
              dot={{ fill: "#cbd5e1", r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default LineChartCard;