import React, { memo } from "react";
import Logo from "./../../../../shared/assets/img/logo.png";
import { Text, TextSize } from "../../../../shared/UI/Text";
import { Input } from "../../../../shared/UI/Input";
import { Checkbox } from "../../../../shared/UI/Checkbox";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import cls from "./SignInForm.module.scss";
import { Button, ButtonSize, ThemeButton } from "../../../../shared/UI/Button";
import { AppLink } from "../../../../shared/UI/AppLink";
import { HStack, VStack } from "../../../../shared/UI/Stack";

interface SignInFormProps {
  className?: string;
}

export const SignInForm = memo((props: SignInFormProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.SignInForm, {}, [className])}>
      <img src={Logo} alt="Logo Sirius Future" width={80} height={80} />
      <Text
        title="Вход в Sirius Future"
        size={TextSize.XXL}
        className={cls.title}
      />
      <Input placeholder="E-mail" />
      <Input placeholder="Пароль" type="password" className={cls.input} />
      <Checkbox label="Запомнить меня" />
      <Button
        theme={ThemeButton.ACCENT}
        fullWidth
        className={cls.btn}
        size={ButtonSize.L}
      >
        Войти
      </Button>
      <HStack justify="between">
        <AppLink to="/">Я забыл пароль</AppLink>
        <AppLink to="/">Войти как тренер</AppLink>
      </HStack>
      <VStack align="center" gap="5" className={cls.link}>
        <Text text="Нет аккаунта?" />
        <AppLink to="/">Зарегистрироваться</AppLink>
      </VStack>
    </div>
  );
});
