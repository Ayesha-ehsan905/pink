import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";
import { CirclePlus, CircleX } from "lucide-react";
import { cn } from "../../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex w-full">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex w-full items-center justify-between text-left transition-all duration-300",
        className,
      )}
      {...props}
    >
      {children}

      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
        <CirclePlus
          className=" cursor-pointer absolute h-8 w-8 text-white transition-all duration-300 ease-out 
          group-data-[state=open]:rotate-90 
          group-data-[state=open]:scale-75 
          group-data-[state=open]:opacity-0"
        />
        <CircleX
          className="absolute h-8 w-8 text-white opacity-0 scale-75 rotate-[-90deg]
          transition-all duration-300 ease-out
          group-data-[state=open]:opacity-100
          group-data-[state=open]:scale-100
          group-data-[state=open]:rotate-0"
        />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
