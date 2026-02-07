"use client";

import { Button } from "@flexpos/ui";

export default function Home() {
  const handleClick = () => {
    console.log("handleClick");
  };

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <Button
        variant="loading"
        label="Test"
        disabled={true}
        onClick={handleClick}
      />
    </div>
  );
}
