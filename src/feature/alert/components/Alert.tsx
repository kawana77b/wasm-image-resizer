import { ErrorIcon } from "@/components/icons";
import { useAlert } from "@/feature/alert/hooks";
import { cn } from "@/lib/utils";

export interface AlertProps {
  className?: string;
  title?: string;
}

export const Alert = ({ className, title = "Error" }: AlertProps) => {
  const { message } = useAlert();

  if (!message) return null;
  if (typeof message === "string" && message.length === 0) return null;
  if (Array.isArray(message) && message.length === 0) return null;

  return (
    <div
      className={cn(
        "bg-red-100 border-red-500 text-red-600 rounded-2xl px-4 py-3 shadow-lg backdrop-blur-md bg-white/30 dark:bg-white/80",
        className
      )}
      role="alert"
    >
      <div className="flex gap-4">
        <div className="py-1">
          <ErrorIcon size={24} />
        </div>
        <div className="w-full">
          <p className="font-bold">{title}</p>
          {Array.isArray(message) ? (
            <ul className="text-sm break-all list-inside list-disc">
              {message.map((item, idx) => (
                <li key={`alert-list-${idx}`}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm break-all">message</p>
          )}
        </div>
      </div>
    </div>
  );
};
