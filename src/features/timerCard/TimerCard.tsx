import React, { memo } from "react";
import cls from "./TimerCard.module.scss";
import { classNames } from "../../shared/lib/classNames/classNames";
import { Button, ButtonSize, ThemeButton } from "../../shared/UI/Button";
import { Card, CardTheme } from "../../shared/UI/Card";
import { HStack } from "../../shared/UI/Stack";
import { TextSize, TextAlign, Text } from "../../shared/UI/Text";

interface TimerCardProps {
  className?: string;
}

export const TimerCard = memo((props: TimerCardProps) => {
  const { className } = props;
  return (
    <Card
      className={classNames(cls.TimerCard, {}, [className])}
      theme={CardTheme.BACKGROUND_LIGHT}
    >
      <Text
        text="Следующее занятие начнется через:"
        size={TextSize.M}
        align={TextAlign.CENTER}
        className={cls.timerTitle}
      />
      <HStack gap="12" justify="center">
        <Text title="6" text="д" size={TextSize.XL} className={cls.timer} />
        <Text title="12" text="ч" size={TextSize.XL} className={cls.timer} />
        <Text title="24" text="мин" size={TextSize.XL} className={cls.timer} />
      </HStack>
      <Button size={ButtonSize.L} fullWidth theme={ThemeButton.DASHED} className={cls.button}>
        Button
      </Button>
    </Card>
  );
});
