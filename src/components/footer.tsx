import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Footer = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "my-6 flex w-full justify-center text-sm text-foreground/60",
        className
      )}
    >
      <div>© {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
