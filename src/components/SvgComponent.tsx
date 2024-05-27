import React, { useId, type ComponentProps, type ReactNode } from "react";
import useLazySvg from "../hooks/useLazySvg";
import { SvgNamesType, SvgSize, SvgSizeType } from "./types";

export type SvgComponentProps = {
  testId?: string;
  name?: SvgNamesType;
  svgElement?: ReactNode;
  size?: SvgSizeType;
} & ComponentProps<"svg">;

const SvgComponent: React.FC<SvgComponentProps> = ({
  name,
  svgElement,
  testId,
  size = "sm",
  ...props
}) => {
  const id = useId();
  const { loading, error, Svg } = useLazySvg(name);
  const { width, height, ...otherProps } = props;


  const svgWidth = width || SvgSize[size];
  const svgHeight = height || SvgSize[size];


  if (!testId) {
    testId = `svg-icon-${name}-${id}`;
  }

  if (svgElement) {
    return <span data-testid={testId}>{svgElement}</span>;
  }

  if (error) {
    return <span>Icon not found</span>;
  }

  if (loading) {
    return "Loading...";
  }

  if (!Svg) {
    return null;
  }

  return (
    <span data-testid={testId}>
      <Svg width={svgWidth} height={svgHeight} {...otherProps} />
    </span>
  );
};

export default SvgComponent;
