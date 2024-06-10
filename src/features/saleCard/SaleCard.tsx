import React, { memo } from "react";
import { classNames } from "../../shared/lib/classNames/classNames";
import cls from "./SaleCard.module.scss";
import { Card, CardTheme } from "../../shared/UI/Card";
import { TextSize, TextTheme, Text } from "../../shared/UI/Text";
import SaleAnimal from "../../shared/assets/img/animal.png";

interface SaleCardProps {
  className?: string;
}

export const SaleCard = memo((props: SaleCardProps) => {
  const { className } = props;
  return (
    <Card
      className={classNames(cls.SaleCard, {}, [className])}
      theme={CardTheme.BACKGROUND_DARK}
    >
      <Text
        className={cls.info}
        title="До 31 декабря любой курс со скидкой 20%"
        text="До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!"
        size={TextSize.L}
        theme={TextTheme.INVERTED}
      />
      <img
        src={SaleAnimal}
        alt="sale"
        height={240}
        width={200}
        className={cls.saleImg}
      />
    </Card>
  );
});
