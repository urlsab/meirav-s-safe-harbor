import { Mail, MessageCircle, Phone } from "lucide-react";

const contactActions = [
  {
    href: "tel:0548002836",
    label: "טלפון",
    icon: Phone,
    className:
      "bg-primary text-primary-foreground hover:brightness-105",
  },
  {
    href: "https://wa.me/972548002836",
    label: "וואטסאפ",
    icon: MessageCircle,
    className:
      "bg-accent text-accent-foreground hover:brightness-105",
    external: true,
  },
  {
    href: "mailto:meirav613@gmail.com",
    label: 'דוא"ל',
    icon: Mail,
    className:
      "bg-secondary text-secondary-foreground hover:brightness-105",
  },
] as const;

type ContactActionButtonsProps = {
  className?: string;
};

export function ContactActionButtons({ className = "" }: ContactActionButtonsProps) {
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`.trim()}>
      {contactActions.map((action) => {
        const Icon = action.icon;

        return (
          <a
            key={action.href}
            href={action.href}
            aria-label={action.label}
            title={action.label}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noreferrer" : undefined}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full shadow-soft transition-transform duration-300 hover:-translate-y-0.5 ${action.className}`}
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">{action.label}</span>
          </a>
        );
      })}
    </div>
  );
}