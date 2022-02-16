import { useEffect } from "react";

const usePrevious = (value: string | null) => {
  useEffect(() => {
    console.log("🚀 ~ (DOES trigger on change in production)", value);
  }, [value]);
};

export { usePrevious };
export default usePrevious;
