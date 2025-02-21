import { MetricCard } from "./metric-card";

export const Metrics = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <MetricCard title="APY" value="5.6%" />
      <MetricCard title="SAVERS" value="12,510" />
      <MetricCard title="AUM" value="$ 53.68M" className="col-span-2" />
    </div>
  );
};
