import { Card, Text } from "@nextui-org/react";

export default function Header() {
  return (
    <footer>
      <Card variant="bordered">
        <Card.Body>
          <Text>&copy; 2022 Qatar University</Text>
        </Card.Body>
      </Card>
    </footer>
  );
}
