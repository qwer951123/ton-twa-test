import { ActivityIcon, GraphIcon, UserIcon } from "@repo/ui/icons";
import { MetricCard } from "./metric-card";

export const Metrics = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <MetricCard
        title={
          <div className="flex items-center gap-2">
            <GraphIcon />
            APY
          </div>
        }
        value="5.6%"
      />
      <MetricCard
        title={
          <div className="flex items-center gap-2">
            <UserIcon />
            SAVERS
          </div>
        }
        value="12,510"
      />
      <MetricCard
        title={
          <div className="flex items-center gap-2">
            <ActivityIcon />
            AUM
          </div>
        }
        value="$ 53.68M"
        className="col-span-2"
      />
    </div>
  );
};
