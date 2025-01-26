import { Container } from "@/components/ui/container";
import { Navbar } from "./navbar";

interface HeaderProps {
  satisfy: any; // Next.js font object type
}

export function Header({ satisfy }: HeaderProps) {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-[80%] mt-4 bg-transparent backdrop-blur-md shadow-lg rounded-full px-8 py-1">
      <Container>
        <Navbar satisfy={satisfy} />
      </Container>
    </header>
  );
}
