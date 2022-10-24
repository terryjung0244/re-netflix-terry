import { useSelector } from "react-redux";
import type { RootState } from "service/store";

// Saves the need to type (state: RootState) every time (type is inferred)
function useAppSelector<T>(fn: (state: RootState) => T): T {
  return useSelector<RootState, T>(fn);
}

export default useAppSelector; // export default <- 이런식은 {}가 안붙게 import 된다.
