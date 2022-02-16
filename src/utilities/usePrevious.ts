import { useEffect } from "react";

const usePrevious = (value?: string | null) => {
  console.log("🚀 ~ (Just fly)", value);
  useEffect(() => {
    console.log("🚀 ~ (DOES trigger on change in prod)", value);
  }, [value]);
};

export { usePrevious };
export default usePrevious;
