import React, { memo } from "react";
import cls from "./ClassesCard.module.scss";
import { Button, ButtonSize, ThemeButton } from "../../shared/UI/Button";
import { Card, CardTheme } from "../../shared/UI/Card";
import { TextSize, Text, TextAlign } from "../../shared/UI/Text";
import { classNames } from "../../shared/lib/classNames/classNames";
import { VStack } from "../../shared/UI/Stack";

interface ClassesCardProps {
  className?: string;
}

export const ClassesCard = memo((props: ClassesCardProps) => {
  const { className } = props;
  return (
    <Card
      className={classNames(cls.ClassesCard, {}, [className])}
      theme={CardTheme.OUTLINED}
    >
      <Text title="Ближайшие уроки" />
      <table className={cls.table}>
        <tbody>
          <tr className={cls.row}>
            <td className={cls.dateContainer}>
              <Text title="1" size={TextSize.L} />
              <span className={cls.date}>мая</span>
            </td>
            <td className={cls.textNoWrap}>
              <Text title="Ментальная Арифметика" size={TextSize.S} />
            </td>
            <td className={cls.time}>
              <Text title="14:00-14:25" size={TextSize.XS} />
            </td>
            <td className={`${cls.teacherName} ${cls.textNoWrap}`}>
              <Text text="Белкина Инна" size={TextSize.XS} />
            </td>
            <td className={cls.buttonGroup}>
              <Button size={ButtonSize.S} theme={ThemeButton.OUTLINE} disabled>
                Button
              </Button>
              <Button size={ButtonSize.S} theme={ThemeButton.ACCENT}>
                Button
              </Button>
            </td>
          </tr>

          <tr className={cls.hrRow}>
            <td colSpan={5}>
              <hr />
            </td>
          </tr>

          <tr className={cls.row}>
            <td className={cls.dateContainer}>
              <Text title="30" size={TextSize.L} />
              <span className={cls.date}>октября</span>
            </td>
            <td className={cls.textNoWrap}>
              <Text title="Программирование" size={TextSize.S} />
            </td>
            <td className={cls.time}>
              <Text title="11:00-11:10" size={TextSize.XS} />
            </td>
            <td className={`${cls.teacherName} ${cls.textNoWrap}`}>
              <Text text="Животновская Оксана" size={TextSize.XS} />
            </td>
            <td className={cls.buttonGroup}>
              <Button size={ButtonSize.S} theme={ThemeButton.OUTLINE}>
                Button
              </Button>
              <Button size={ButtonSize.S} theme={ThemeButton.ACCENT}>
                Button
              </Button>
            </td>
          </tr>

          <tr className={cls.hrRow}>
            <td colSpan={5}>
              <hr />
            </td>
          </tr>

          <tr className={cls.row}>
            <td className={cls.dateContainer}>
              <Text title="16" size={TextSize.L} />
              <span className={cls.date}>ноября</span>
            </td>
            <td className={cls.textNoWrap}>
              <Text title="Скорочтение" size={TextSize.S} />
            </td>
            <td className={cls.time}>
              <Text title="9:00-9:45" size={TextSize.XS} />
            </td>
            <td className={`${cls.teacherName} ${cls.textNoWrap}`}>
              <Text text="Мин Елена" size={TextSize.XS} />
            </td>
            <td className={cls.buttonGroup}>
              <Button size={ButtonSize.S} theme={ThemeButton.OUTLINE}>
                Button
              </Button>
              <Button size={ButtonSize.S} theme={ThemeButton.ACCENT}>
                Button
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <VStack align="center">
        <Button
          theme={ThemeButton.PRIMARY}
          size={ButtonSize.M}
          className={cls.btn}
        >
          Button
        </Button>
      </VStack>
    </Card>
  );
});
