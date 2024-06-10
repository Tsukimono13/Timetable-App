import React, { InputHTMLAttributes, memo } from 'react';
import cls from './Checkbox.module.scss';
import { classNames } from '../../lib/classNames/classNames';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'checked' | 'onChange'
>;

interface CheckboxProps extends HTMLInputProps {
  className?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

export const Checkbox = memo((props: CheckboxProps) => {
  const {
    onChange,
    className,
    checked = false,
    label,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  return (
    <label className={classNames(cls.CheckboxWrapper, {}, [className])}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChangeHandler}
        className={cls.checkbox}
        {...otherProps}
      />
      <span className={cls.checkmark}></span>
      {label}
    </label>
  );
});
