import { ArrowUpRight, Clock } from "lucide-react";
import { toast } from "sonner";
import { Button, type ButtonProps } from "@/components/ui/button";
import { REGISTRATION_URL, isRegistrationOpen } from "@/config/event";

type Props = Omit<ButtonProps, "asChild" | "onClick"> & { label?: string };

export function RegisterButton({ label = "Register Now", variant = "festive", ...props }: Props) {
  if (isRegistrationOpen()) {
    return (
      <Button asChild variant={variant} {...props}>
        <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
          {label}
          <ArrowUpRight />
        </a>
      </Button>
    );
  }
  return (
    <Button
      variant={variant}
      aria-describedby="registration-pending"
      title="Registration opening soon"
      onClick={() =>
        toast("Registration opens soon", {
          description: "The registration link is being set up. Please check back shortly.",
        })
      }
      {...props}
    >
      {label}
      <Clock />
      <span id="registration-pending" className="sr-only">
        Registration setup is pending
      </span>
    </Button>
  );
}
