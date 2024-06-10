import { memo } from "react";
import cls from "./Text.module.scss";
import { Mods, classNames } from "../../lib/classNames/classNames";

export enum TextTheme {
  PRIMARY = "primary",
  BRIGHT = "bright",
  INVERTED = 'inverted'
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextSize {
  XS = "size_xs",
  S = "size_s",
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
  XXL = "size_xxl",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

type HeaderTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.XS]: "h6",
  [TextSize.S]: "h5",
  [TextSize.M]: "h4",
  [TextSize.L]: "h3",
  [TextSize.XL]: "h2",
  [TextSize.XXL]: "h1",
};

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    align = TextAlign.LEFT,
    theme = TextTheme.PRIMARY,
    size = TextSize.M,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };


  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && (
        <p className={cls.text}>
          {text}
        </p>
      )}
    </div>
  );
});
