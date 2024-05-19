import React, { type ComponentProps, type ReactNode } from "react";
import useLazySvg from "../hooks/useLazySvg";

export type SVGComponentProps = {
  testId: string;
  name?: string;
  svgElement?: ReactNode;
} & ComponentProps<"svg">;

function SvgComponent({
  name,
  svgElement,
  testId,
  ...props
}: SVGComponentProps) {
  const { loading, error, Svg } = useLazySvg(name);

  if (svgElement) {
    return React.createElement(
      "span",
      { "data-testid": `svg-icon-${testId}` },
      svgElement
    );
  }

  if (error) {
    return "Icon not found.";
  }

  if (loading) {
    return "Loading...";
  }

  if (!Svg) {
    return null;
  }

  return (
    <span data-testid={`svg-icon-${testId}`}>
      <Svg {...props} />
    </span>
  );
}

export default SvgComponent;
