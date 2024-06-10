import { Menu } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import cls from "./Dropdown.module.scss";
import { DropdownDirection } from "../../types/ui";
import { classNames } from "../../lib/classNames/classNames";
import { AppLink } from "../AppLink";
import { mapDirectionClass } from "./consts";
import { Text, TextSize } from "../Text";
import { HStack, VStack } from "../Stack";
import { ReactComponent as CloseIcon } from "../../../shared/assets/icons/close.svg";
import { ReactComponent as ExitIcon } from "../../../shared/assets/icons/exit.svg";
import { Button } from "../Button";

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  href?: string;
  host?: boolean;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
  const { className, items, trigger, direction = "bottom right" } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu
      as="div"
      className={classNames(cls.Dropdown, {}, [className, cls.popup])}
    >
      <Menu.Button className={cls.trigger}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        <Text
          title="Смена пользователя"
          size={TextSize.S}
          className={cls.changeUser}
        />
        <Menu.Button className={cls.closeButton}>
          <CloseIcon className={cls.closeIcon} />
        </Menu.Button>
        {items.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <div className={cls.container}>
              <button
                type="button"
                disabled={item.disabled}
                onClick={item.onClick}
                className={classNames(cls.item, {
                  [cls.active]: active,
                })}
              >
                <HStack
                  gap="8"
                  className={classNames(
                    cls.contentContainer,
                    { [cls.activeContainer]: item.host },
                    []
                  )}
                >
                  <span className={cls.icon}>{item.icon}</span>
                  <VStack gap="2">
                    {item.content}
                    {item.host && <Text text="Это вы" size={TextSize.S}></Text>}
                  </VStack>
                </HStack>
              </button>
            </div>
          );

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
                key={`dropdown-key${index}`}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              as={Fragment}
              disabled={item.disabled}
              key={`dropdown-key${index}`}
            >
              {content}
            </Menu.Item>
          );
        })}
        <hr />
        <HStack justify="between">
          <Button className={cls.exit}>Выход</Button>
          <ExitIcon />
        </HStack>
      </Menu.Items>
    </Menu>
  );
}
