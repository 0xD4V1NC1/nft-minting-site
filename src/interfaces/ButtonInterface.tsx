import React, { ReactNode } from "react";
import IconInterface from "./IconInterface";
import { ColorOptions, SizeOptions } from "./types";

export default interface ButtonInterface {
  // button type is import for accessibility
  type: string;
  ariaLabel: string;
  color: ColorOptions;
  text?: string;
  children?: ReactNode;
  icon?: IconInterface;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  loadingClassName?: string;
  href?: string;
  target?: string;
  disabled?: boolean;
  size?: SizeOptions;
}

