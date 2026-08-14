interface PageHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export function PageHeader({ title, description, centered = true }: PageHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h1 className="font-heading text-3xl font-normal tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
