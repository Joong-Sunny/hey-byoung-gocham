import Button from 'src/components/ui/buttons/Button';

import { ButtonProps } from '@/components/ui/buttons/Button/Button';
import { twMergeCustom } from '@/libs/tw-merge';

interface DockedButtonProps extends ButtonProps {
  backgroundClassName?: string;
  buttonClassName?: string;
}

export default function DockedButton({
  variant = 'primary',
  onClick,
  children,
  disabled = false,
  backgroundClassName,
  buttonClassName,
}: DockedButtonProps) {
  return (
    <div
      className={twMergeCustom(
        'flex h-[11.2rem] w-[39rem] justify-center bg-white pt-[1.7rem] shadow-dock',
        backgroundClassName
      )}
    >
      <Button
        variant={variant}
        onClick={onClick}
        disabled={disabled}
        className={twMergeCustom('w-[34rem]', buttonClassName)}
      >
        {children}
      </Button>
    </div>
  );
}
