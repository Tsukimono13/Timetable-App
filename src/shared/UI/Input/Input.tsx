import React, { InputHTMLAttributes, memo, useState } from "react";
import cls from "./Input.module.scss";
import { classNames } from "../../lib/classNames/classNames";
import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";
import { ReactComponent as NoEyeIcon } from "../../assets/icons/no-eye.svg";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    onChange,
    className,
    value,
    type = "text",
    placeholder,
    ...otherProps
  } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      <input
        type={passwordVisible && type === "password" ? "text" : type}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={cls.input}
        {...otherProps}
      />
      {type === "password" && (
        <div className={cls.toggleIcon} onClick={togglePasswordVisibility}>
          {passwordVisible ? <NoEyeIcon /> : <EyeIcon />}
        </div>
      )}
    </div>
  );
});
