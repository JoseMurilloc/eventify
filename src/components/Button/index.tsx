import { ButtonHTMLAttributes, memo } from 'react';

import * as S from './styles';

export type BaseButtonProps = {
  title: string;
  variant: 'primary' | 'secondary' | 'outline';
  size: 'default' | 'large';
  isLoading?: boolean;
  onClick?: () => void;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps;

const DEFAULT_CLICK_HANDLER = () => null;

const Button = (props: ButtonProps) => {
  const {
    title,
    onClick,
    variant = 'primary',
    size = 'default',
    isLoading = false,
    type = 'button',
    ...attrs
  } = props;

  const onClickHandler = isLoading ? DEFAULT_CLICK_HANDLER : onClick;

  return (
    <S.Container
      type={type}
      variant={variant}
      size={size}
      onClick={onClickHandler}
      {...attrs}
    >
      {title}
    </S.Container>
  );
};

Button.defaultProps = {
  isLoading: false,
  variant: 'primary',
};

export default memo(Button);
