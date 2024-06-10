import React, { memo, useEffect } from "react";
import { ReactComponent as PreviousIcon } from "../../../shared/assets/icons/ArrowsLeft.svg";
import { ReactComponent as NextIcon } from "../../../shared/assets/icons/ArrowRight.svg";
import { ReactComponent as QuestionIcon } from "../../../shared/assets/icons/questionBtn.svg";
import { Button, ButtonSize, ThemeButton } from "../../../shared/UI/Button";
import { Text, TextSize } from "../../../shared/UI/Text";
import { HStack } from "../../../shared/UI/Stack";
import cls from "./Calendar.module.scss";
import {
  getTimetableData,
  getTimetableDataIsLoading,
  getTimetableDataError,
} from "../model/selectors/getTimetableData";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch";
import { fetchTimetableData } from "../model/services/fetchTimetable/fetchTimetable";
import { TimetableEntry } from "../model/types/timetable";
import { Timetable } from "./Timetable";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { groupByWeeks } from "../../../shared/lib/weeksDivider/weeksDivider";


interface CalendarProps {
  className?: string;
}

export const Calendar = memo((props: CalendarProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const timetable = useSelector(getTimetableData);
  const timetableLoading = useSelector(getTimetableDataIsLoading);
  const timetableError = useSelector(getTimetableDataError);

  useEffect(() => {
    dispatch(fetchTimetableData(""));
  }, [dispatch]);

  const weeks = groupByWeeks(timetable as TimetableEntry[]);

  if (timetableLoading) {
    return <div>Loading...</div>;
  }

  if (timetableError) {
    return <div>Error</div>;
  }

  return (
    <div className={classNames(cls.Calendar, {}, [className])}>
      <HStack className={cls.containerBtn}>
        <HStack gap="16">
          <Button className={cls.btnIcon}>
            <PreviousIcon />
          </Button>
          <Text
            title={"Март 2024"}
            size={TextSize.S}
            className={cls.monthTitle}
          />
          <Button className={cls.btnIcon}>
            <NextIcon />
          </Button>
        </HStack>
        <Button
          size={ButtonSize.S}
          theme={ThemeButton.OUTLINE}
          className={cls.btnOutline}
        >
          Button
        </Button>
        <Button className={cls.btnIcon}>
          <QuestionIcon />
        </Button>
      </HStack>

      <Timetable data={weeks} />
    </div>
  );
});
