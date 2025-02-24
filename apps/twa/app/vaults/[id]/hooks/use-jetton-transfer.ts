"use client";

import { Address, beginCell, toNano } from "@ton/core";
import { useTonConnectUI } from "@repo/ton-connect-ui-react";

export function useJettonTransfer() {
  const [tonConnectUI] = useTonConnectUI();

  const transfer = async (
    jettonMasterAddress: string,
    toAddress: string,
    amount: string
  ) => {
    if (!tonConnectUI) return;

    // 获取用户地址
    const userAddress = tonConnectUI.account?.address;
    if (!userAddress) throw new Error("No user address");

    // 获取 Jetton Wallet 地址
    const response = await fetch(
      `https://tonapi.io/v2/accounts/${userAddress}/jettons/${jettonMasterAddress}`
    );
    const data = await response.json();

    const jettonWallet = data.wallet_address.address;

    // 发送交易
    const msgBody = beginCell()
      .storeUint(0xf8a7ea5, 32)
      .storeAddress(Address.parse(toAddress))
      .storeCoins(toNano("0.05"))
      .storeBit(false)
      .storeCoins(toNano(amount))
      .storeBit(false)
      .endCell();

    await tonConnectUI.sendTransaction({
      messages: [
        {
          address: jettonWallet,
          amount: toNano("0.05").toString(),
          payload: msgBody.toBoc().toString("base64"),
        },
      ],
      validUntil: Date.now() + 5 * 60 * 1000,
    });
  };

  return { transfer };
}
