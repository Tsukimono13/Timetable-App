import React, { memo } from "react";
import { classNames } from "../../shared/lib/classNames/classNames";
import cls from "./SignInPage.module.scss";
import { SignInForm } from "../../entities/SignIn";
import { HStack, VStack } from "../../shared/UI/Stack";
import { Button, ButtonSize, ThemeButton } from "../../shared/UI/Button";

interface SignInPageProps {
  className?: string;
}

const SignInPage = memo((props: SignInPageProps) => {
  const { className } = props;
  return (
    <VStack
      align="center"
      justify="center"
      className={classNames(cls.SignInPage, {}, [className])}
    >
      <SignInForm />
      <HStack justify="center" gap="8" className={cls.switcher}>
        <Button theme={ThemeButton.CLEAR} size={ButtonSize.XL}>
          RU
        </Button>
        <Button>EN</Button>
      </HStack>
    </VStack>
  );
});

export default SignInPage;
