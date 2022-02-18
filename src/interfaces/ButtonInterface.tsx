import React, { ReactNode } from "react";
import IconInterface from "./IconInterface";

export default interface ButtonInterface {
  // button type is import for accessibility
  type: string;
  color: string;
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
  size?: string;
}

