import React, { memo } from "react";
import { Button, ButtonSize, ThemeButton } from "../../shared/UI/Button";
import { Card } from "../../shared/UI/Card/Card";
import { Text, TextSize } from "../../shared/UI/Text";
import cls from "./GiftCard.module.scss";
import { classNames } from "../../shared/lib/classNames/classNames";
import Gift from "./../../shared/assets/img/gift.png";

interface GiftCardProps {
  className?: string;
}

export const GiftCard = memo((props: GiftCardProps) => {
  const { className } = props;

  return (
    <Card className={classNames(cls.GiftCard, {}, [className])}>
      <Text
        title="Учитесь бесплатно"
        text="Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!"
        size={TextSize.S}
      />
      <Button size={ButtonSize.S} theme={ThemeButton.LIGHT_BlUE}>
        Узнать
      </Button>
      <img src={Gift} alt="Gift" className={cls.gift} width={81} height={70} />
    </Card>
  );
});
