import {
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type FC,
} from "react";
import { SvgNames, SvgNamesType } from "../components/types";

const useLazySvg = (name: SvgNamesType | undefined) => {
  const importRef = useRef<FC<ComponentProps<"svg">>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (name) {
      setLoading(true);
      const importIcon = async () => {
        try {
          importRef.current = (
            await import(`../assets/images/${SvgNames[name]}.svg`)
          ).default;

          if (importRef.current instanceof Error) throw importRef.current;
        } catch (err) {
          setError(err as Error);
        } finally {
          setLoading(false);
        }
      };
      importIcon();
    }
  }, [name]);

  return {
    error,
    loading,
    Svg: importRef.current,
  };
};

export default useLazySvg;
