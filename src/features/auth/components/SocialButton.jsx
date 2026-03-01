import { FcGoogle } from "react-icons/fc";
import Button from "@/shared/components/ui/Button";

const icons = {
  google: <FcGoogle className="w-5 h-5" />,
};

export default function SocialButton({
  provider = "google",
  children,
  onClick,
  size = "sm",
  fullWidth = false,
  className = "",
}) {
  const IconElm = icons[provider] ?? null;

  return (
    <Button
      variant="outline"
      onClick={onClick}
      size={size}
      fullWidth={fullWidth}
      className={`flex items-center justify-center gap-2 ${className}`}
      aria-label={`Continue with ${provider}`}
    >
      {IconElm}
      <span className="font-medium">{children}</span>
    </Button>
  );
}
