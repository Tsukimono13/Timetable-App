import React, { memo } from "react";
import cls from "./ClassesBalanceCard.module.scss";
import { Button, ButtonSize, ThemeButton } from "../../shared/UI/Button";
import { Card, CardTheme } from "../../shared/UI/Card";
import { HStack } from "../../shared/UI/Stack";
import { TextSize, Text } from "../../shared/UI/Text";
import { classNames } from "../../shared/lib/classNames/classNames";

interface ClassesBalanceCardProps {
  className?: string;
}

export const ClassesBalanceCard = memo((props: ClassesBalanceCardProps) => {
  const { className } = props;
  return (
    <Card
      className={classNames(cls.ClassesBalanceCard, {}, [className])}
      theme={CardTheme.OUTLINED}
    >
      <Text title="Баланс занятий" />
      <div className={cls.containerInfo}>
        <HStack justify="between" className={cls.cardInfo}>
          <Text title="Ментальная Арифметика" size={TextSize.S} />
          <span>32</span>
        </HStack>
        <hr />
        <HStack justify="between" className={cls.cardInfo}>
          <Text title="Программирование" size={TextSize.S} />
          <span>0</span>
        </HStack>
        <hr />
        <HStack justify="between" className={cls.cardInfo}>
          <Text title="Скорочтение" size={TextSize.S} />
          <span>4</span>
        </HStack>
        <Button fullWidth size={ButtonSize.M} theme={ThemeButton.PRIMARY}>
          Button
        </Button>
      </div>
    </Card>
  );
});
