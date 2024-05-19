import {
  useRef,
  useState,
  useEffect,
  type FC,
  type ComponentProps,
} from "react";

const useLazySvg = (name: string | undefined) => {
  const importRef = useRef<FC<ComponentProps<"svg">>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (name) {
      setLoading(true);
      const importIcon = async () => {
        try {
          importRef.current = (await import(`../svgs/${name}.svg`)).default;
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
