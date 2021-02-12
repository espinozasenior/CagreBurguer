import  { useEffect } from "react";

export default function useChangeScrollingBody(open: boolean) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
}
