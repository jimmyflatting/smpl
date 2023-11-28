import { Card } from "./ui/card";
import Container from "./ui/container";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

export default function Builder() {
  return (
    <>
      <Card>
        <Container>Create bot</Container>
        <DropdownMenuSeparator />
        <Container>Builder</Container>
      </Card>
    </>
  );
}
