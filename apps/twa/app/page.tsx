import styles from "./page.module.css";
import { TonConnectButton } from "@repo/ton-connect-ui-react";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Hello World</h1>
        <TonConnectButton />
      </main>
    </div>
  );
}
