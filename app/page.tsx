import Builder from "@/components/Builder";
import Chart from "@/components/Chart";
import { Positions } from "@/components/Positions";
import Container from "@/components/ui/container";

export default function Home() {
  return (
    <>
      <Container className="md:flex md:gap-4 mb-5">
        <div className="flex-auto mb-5 tradingview">
          <Chart />
        </div>
        <div className="flex-1">
          <Builder />
        </div>
      </Container>
      <Container className="mx-auto mb-5">
        <Positions />
      </Container>
    </>
  );
}
