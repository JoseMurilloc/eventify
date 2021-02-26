import styled, { css, DefaultTheme } from 'styled-components';

type ContainerProps = {
  variant: 'primary' | 'secondary' | 'outline';
  size: 'default' | 'large';
};

const modifiers = ({ colors }: DefaultTheme) => ({
  variants: {
    primary: css`
      background: ${colors.primary[100]};
    `,
    secondary: css`
      background: ${colors.secondary[100]};
    `,
    outline: css`
      background: none;
    `,
  },
  sizes: {
    default: css`
      padding: 1rem;
      font-size: 1rem;
      border-radius: 0.5rem;
    `,
    large: css`
      padding: 1.25rem;
      font-size: 1.125rem;
      border-radius: 0.75rem;
    `,
  },
});

export const Container = styled.button<ContainerProps>`
  ${({ theme, variant, size }) => css`
    color: ${theme.colors.light[100]};

    ${modifiers(theme).variants[variant]};
    ${modifiers(theme).sizes[size]};
  `}
`;
