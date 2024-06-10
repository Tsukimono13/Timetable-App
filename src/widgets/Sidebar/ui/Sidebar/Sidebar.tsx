import { memo, useMemo } from "react";
import cls from "./Sidebar.module.scss";
import SidebarItem from "../SidebarItem/SidebarItem";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { VStack } from "../../../../shared/UI/Stack";
import { sidebarItemsList } from "../../model/SideBarItems";
import { Card } from "../../../../shared/UI/Card/Card";
import { Text, TextSize } from "../../../../shared/UI/Text";
import { Button, ButtonSize, ThemeButton } from "../../../../shared/UI/Button";
import { GiftCard } from "../../../../features/giftCard";
import { ReactComponent as Logo } from "../../../../shared/assets/icons/sidebarLogo.svg";
import { Link } from "react-router-dom";
import { RoutePath } from "../../../../shared/config/routeConfig/routeConfig";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item) => (
        <SidebarItem item={item} key={item.path} />
      )),
    []
  );

  return (
    <aside className={classNames(cls.Sidebar, {}, [className])}>
      <Link to={RoutePath.main} className={cls.logo}>
        <Logo />
      </Link>
      <VStack role="navigation" className={cls.items}>
        {itemsList}
      </VStack>
      <GiftCard />
    </aside>
  );
});
