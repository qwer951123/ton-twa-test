"use client";

import { Subtitle, ViewAll } from "./title";
import { useComingSoon } from "../hooks/use-coming-soon";
import { ComingSoonItem } from "./comming-soon-item";

const ComingSoon = () => {
  const { data } = useComingSoon();

  return (
    <section className="bg-background px-6 py-5">
      <Subtitle>
        <p>Coming Soon</p>
        <ViewAll href="/coming-soon" />
      </Subtitle>
      <div className="mt-3 grid grid-cols-3 gap-3">
        {data?.map((product) => (
          <ComingSoonItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ComingSoon;
