...
import { Alpha } from '@themes/dracula';
import { DATA } from '@lib/data';

export default function Home() {
  const { user } = DATA;
  return (
    <>
      ...
      <Alpha data={DATA} />
    </>
  );
}
