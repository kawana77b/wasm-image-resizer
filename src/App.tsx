import "./App.css";

import { MainLayout } from "@/components/layouts";
import { Footer } from "@/feature/footer";
import { NavBar } from "@/feature/navbar";
import { useTheme } from "@/feature/theme";
import { cn } from "@/lib/utils";
import { RootPage } from "@/pages/root";

function App() {
  const { value } = useTheme();

  return (
    <main
      className={cn(
        value && "dark",
        "w-screen h-screen flex flex-col",
        "text-foreground bg-background"
      )}
    >
      <div className="flex-1 flex flex-col h-full w-full items-center overflow-y-scroll">
        <NavBar />
        <MainLayout>
          <RootPage />
        </MainLayout>
      </div>
      <Footer />
    </main>
  );
}

export default App;
