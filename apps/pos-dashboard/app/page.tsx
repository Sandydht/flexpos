"use client";

import { Button } from "@flexpos/ui";

export default function Home() {
  const handleClick = () => {
    console.log("handleClick");
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-red-500">
      <Button label="Test" onClick={handleClick} />
    </div>
  );
}
