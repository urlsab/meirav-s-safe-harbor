import { Mail, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <circle cx="16" cy="16" r="16" fill="#25D366" />
      <path
        d="M9.2 25.3l1.2-4.2a8.5 8.5 0 1 1 3.5 2.2l-4.7 2zM16 9.2a6.8 6.8 0 0 0-5.8 10.4l.3.5-.7 2.5 2.6-1.1.5.3a6.8 6.8 0 1 0 3.1-12.6zm3.7 9.3c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1l-.6.7c-.1.1-.2.2-.4.1-.2-.1-.9-.3-1.7-1.1-.6-.5-.9-1.2-1-1.4-.1-.2 0-.3.1-.4l.3-.3.2-.3c.1-.1.1-.2.2-.4 0-.1 0-.2 0-.3 0-.1-.4-1.1-.6-1.5-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3 0-.4.2-.1.1-.6.6-.6 1.4 0 .8.6 1.6.7 1.7.1.1 1.2 1.9 3 2.7 1.8.8 1.8.5 2.1.5.3 0 1-.4 1.1-.8.1-.4.1-.7.1-.8-.1 0-.2 0-.4-.1z"
        fill="#fff"
      />
    </svg>
  );
}

const contactActions = [
  {
    href: "tel:0548002836",
    label: "טלפון",
    icon: Phone,
    className:
      "bg-primary text-primary-foreground hover:brightness-105",
    external: false,
  },
  {
    href: "https://wa.me/972548002836",
    label: "וואטסאפ",
    icon: FaWhatsapp,
    className:
      "bg-[#25D366] text-white hover:brightness-105 text-size-10",
    external: true,
  },
  {
    href: "https://www.facebook.com/share/1GzFgZgmxn/",
    label: "פייסבוק",
    icon: FaFacebookF,
    className:
      "bg-[#1877F2] text-white hover:brightness-105",
    external: true,
  },
  {
    href: "mailto:meirav613@gmail.com",
    label: 'דוא"ל',
    icon: Mail,
    className:
      "bg-secondary text-secondary-foreground hover:brightness-105",
    external: false,
  },
] as const;

type ContactActionButtonsProps = {
  className?: string;
};

export function ContactActionButtons({ className = "" }: ContactActionButtonsProps) {
  return (
    <div className={`flex flex-col items-center gap-2 sm:gap-3 ${className}`.trim()}>
      <p className="text-m font-semibold text-primary/90">מזמינה אותך לפגישת היכרות ללא תשלום והתחייבות</p>
      <div className="flex items-center gap-2 sm:gap-3">
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
    </div>
  );
}