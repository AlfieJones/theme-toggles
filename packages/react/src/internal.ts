import { useId } from "react";

export function useToggleId(): string {
  return useId().replace(/[:.]/g, "");
}
