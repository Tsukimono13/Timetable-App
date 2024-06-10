import React from 'react'
import { ClassEvent, TimetableEntry } from '../../model/types/timetable';
import cls from './Timetable.module.scss'
import { VStack } from '../../../../shared/UI/Stack';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import { Button } from '@headlessui/react';
import { TextSize, Text } from '../../../../shared/UI/Text';
import { ReactComponent as PayIcon } from "../../../../shared/assets/icons/pay.svg";

interface TimetableProps {
    className?: string;
    data: TimetableEntry[][];
  }

  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export const Timetable = (props: TimetableProps) => {
    const {className, data} = props;
  return (
    <table className={classNames(cls.Table, {}, [className])}>
    <thead>
      <tr>
        {daysOfWeek.map((day, index) => (
          <th key={index}>{day}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((week, weekIndex) => (
        <tr key={weekIndex}>
          {week.map((item: TimetableEntry) => (
            <td key={item.id} className={cls.tableCell}>
              <div className={cls.dateContainer}>
                <span className={cls.date}>
                  {item.date}
                  {(item.date === 1 || item.date === 2) && (
                    <span className={cls.march}> марта</span>
                  )}
                </span>
                <VStack gap="2">
                  {item.classes?.map((classes: ClassEvent) => (
                    <VStack
                      gap="2"
                      className={classNames(
                        cls.classes,
                        {
                          [cls.canceled]: classes.canceled,
                          [cls.needToPay]: classes.needToPay,
                          [cls.futureClass]: !classes.futureClass,
                          [cls.event]:
                            !classes.canceled && !classes.needToPay,
                        },
                        [cls.active]
                      )}
                    >
                      <Text
                        title={classes.time}
                        size={TextSize.XS}
                        className={cls.eventTime}
                      />
                      <Text
                        text={classes.title}
                        size={TextSize.S}
                        className={cls.eventTitle}
                      />
                      <Button className={cls.payBtn}>
                        {classes.needToPay && <PayIcon />}
                      </Button>
                    </VStack>
                  ))}
                </VStack>
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
  )
}
