import React, { ReactElement, memo } from "react";
import cls from "./MainLayout.module.scss";
import { classNames } from "../../lib/classNames/classNames";

interface MainLayoutProps {
  className?: string;
  header: ReactElement;
  sidebar: ReactElement;
  content: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, header, sidebar, content } = props;
  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.body}>
        <div className={cls.header}>{header}</div>
        <div className={cls.content}>{content}</div>
      </div>
    </div>
  );
});
