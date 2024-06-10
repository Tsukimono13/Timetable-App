import React, { memo } from "react";
import { Card } from "../../shared/UI/Card";
import cls from "./MainPage.module.scss";
import { Text } from "../../shared/UI/Text";
import { SaleCard } from "../../features/saleCard";
import { TimerCard } from "../../features/timerCard";
import { ClassesBalanceCard } from "../../features/classesBalanceCard";
import { ClassesCard } from "../../features/classesCard";

const MainPage = memo(() => {
  return (
    <div className={cls.Main}>
      <SaleCard className={cls.saleCard} />
      <TimerCard className={cls.timerCard} />
      <Card className={cls.newsCard}>
        <Text title="Новости" />
      </Card>
      <ClassesBalanceCard className={cls.classesBalanceCard} />
      <ClassesCard className={cls.card5} />
    </div>
  );
});

export default MainPage;
