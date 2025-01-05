import { default as classNames } from "classnames";
import { HTMLAttributes, PropsWithChildren, createElement } from "react";

import {
  healineVariantStyles,
  paragraphStyle,
  paragraphWeightStyles,
} from "shared/styles/typography.css";

type BaseProps = HTMLAttributes<HTMLElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};

type HeadlineProps = {
  type?: "headline";
  variant?: "ultraLong" | "ultraShort" | "primaryLong" | "primaryShort" | "secondary";
};

type ParagraphProps = {
  type?: "paragraph";
  fontWeight?: "light" | "bold";
};

type TypographyProps = BaseProps & (HeadlineProps | ParagraphProps);

const isHeadline = (props: TypographyProps): props is HeadlineProps => {
  return props.type === "headline";
};

export const Typography = ({
  as = "p",
  children,
  className = "",
  ...props
}: PropsWithChildren<TypographyProps>) => {
  let computedClassName = className;

  if (isHeadline(props)) {
    const { variant = "primaryShort" } = props;

    computedClassName = classNames(className, healineVariantStyles[variant]);
  } else {
    const { fontWeight = "light" } = props;

    computedClassName = classNames(className, paragraphStyle, paragraphWeightStyles[fontWeight]);
  }

  return createElement(as, { className: computedClassName }, children);
};
