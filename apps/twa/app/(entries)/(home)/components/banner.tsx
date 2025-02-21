"use client";

import { Button, FormatRatio, Tag } from "@repo/ui";
import { useBannerData } from "../hooks/use-banner-data";
import VaultIcon from "../../../../components/vault-icon";
import { Header } from "./banner-header";
import BannerBackground from "./banner-background";
import { ConnectWrapper } from "../../../../components/ton/connect-wrapper";
import { useRouter } from "next/navigation";

const Banner = () => {
  const { data } = useBannerData();
  const router = useRouter();

  return (
    <section className="relative bg-gradient-to-b from-accent-blue to-accent-purple px-6 py-5 text-text-contrast">
      <Header>Gluon Money</Header>
      <BannerBackground className="absolute bottom-[82px] right-page-padding" />
      <Tag className="w-fit" variant="contrast">
        {data?.userCount} Savers
      </Tag>
      <FormatRatio
        value={data?.apy}
        className="mt-2 text-[72px] leading-none font-bold"
      />
      <div className="flex items-center gap-2 mt-2">
        <VaultIcon vault={data?.type} className="w-12 h-12" />
        <p className="text-xl leading-6">{data?.description}</p>
      </div>
      <ConnectWrapper>
        <Button
          className="mt-5 w-full justify-between text-base font-semibold leading-none"
          onClick={() => router.push("/vaults/super-savings")}
        >
          <div>{data?.name}</div>
          <Tag className="bg-text-contrast text-text-primary" size="lg">
            JOIN
          </Tag>
        </Button>
      </ConnectWrapper>
    </section>
  );
};

export default Banner;
