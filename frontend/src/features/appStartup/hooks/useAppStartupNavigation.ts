import useNavigation from "@/hooks/useNavigation";
import { useEffect } from "react";

export function useAppStartupNavigation() {
  const { navigate } = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
