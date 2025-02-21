import EntriesLayout from "./(entries)/layout";
import { HomePage } from "./(entries)/(home)/index";

export default function Page() {
  return (
    <EntriesLayout>
      <HomePage />
    </EntriesLayout>
  );
}
