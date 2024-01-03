import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts";

import colors from "tailwindcss/colors";

const data = [
  { date: "01/01", revenue: 4000 },
  { date: "02/01", revenue: 3000 },
  { date: "03/01", revenue: 2000 },
  { date: "04/01", revenue: 2780 },
  { date: "05/01", revenue: 1890 },
  { date: "06/01", revenue: 2390 },
  { date: "07/01", revenue: 3490 },
  { date: "08/01", revenue: 4000 },
  { date: "09/01", revenue: 3000 },
  { date: "10/01", revenue: 2000 },
  { date: "11/01", revenue: 2780 },
  { date: "12/01", revenue: 1890 },
];

const RevenueChart = () => {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diária do periodo</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart style={{ fontSize: 12 }} data={data}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type="linear"
              dataKey="revenue"
              stroke={colors.violet[500]}
              strokeWidth={2}
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export { RevenueChart };
