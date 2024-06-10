import React, { memo } from "react";
import { Select } from "../../shared/UI/Select/Select";
import { ThemeButton, Button, ButtonSize } from "../../shared/UI/Button";
import { HStack } from "../../shared/UI/Stack";
import cls from './TimetablePage.module.scss'
import { Calendar } from "../../entities/Calendar/ui";

const TimetablePage = memo(() => {
  
  const options = [
    { label: "Ментальная арифметика", value: "Ментальная арифметика" },
    { label: "Программирование", value: "Программирование" },
    { label: "Скорочтение", value: "Скорочтение" },
  ];

  return (
    <div>
      <HStack justify="between">
      <Select
        name="subject"
        options={options}
        ariaLabel="Project status"
        defaultLabel="Выбрать предмет"
        className={cls.select}
      />
      <Button theme={ThemeButton.DARK_VIOLET} size={ButtonSize.M}>Изменить расписание</Button>
      </HStack>
      <Calendar />
    </div>
  );
});

export default TimetablePage;
