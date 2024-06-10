import { memo } from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Text, TextSize, TextTheme } from "../../../shared/UI/Text";
import { HStack } from "../../../shared/UI/Stack";
import { ReactComponent as ChatIcon } from "../../../shared/assets/icons/chat.svg";
import { ReactComponent as AvatarIcon } from "../../../shared/assets/icons/avatar.svg";
import { ReactComponent as AvatarIconOther } from "../../../shared/assets/icons/avatar2.svg";
import { ReactComponent as ArrowIcon } from "../../../shared/assets/icons/arrow.svg";
import { Button } from "../../../shared/UI/Button";
import { Dropdown } from "../../../shared/UI/Dropdown/Dropdown";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <HStack gap="5" className={cls.welcome}>
        <Text title="Добро пожаловать, " size={TextSize.M} />
        <Text title="Михаил!" size={TextSize.M} theme={TextTheme.BRIGHT} />
      </HStack>
      <HStack className={cls.btns} gap="16">
        <Button className={cls.btn}>
          <ChatIcon className={cls.chatIcon}/>
        </Button>
        <Dropdown items={[ {
                    content: 'Михаил',
                    href: '/profile',
                    icon: <AvatarIcon />,
                    host: true
                },
                {
                    content: 'Анна',
                    icon: <AvatarIconOther />,
                },]}
                trigger={  <Button className={cls.btn}>
                <AvatarIcon />
                <ArrowIcon />
              </Button>}
              direction="bottom left"
                />
      </HStack>
    </header>
  );
});
