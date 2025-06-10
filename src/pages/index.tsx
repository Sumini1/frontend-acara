import { Button } from "@heroui/react";
import PageHead from '../components/commons/PageHead/PageHead';




export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
    <PageHead title="Home" />
      <Button color="primary">Button</Button>
    </main>
  );
}
