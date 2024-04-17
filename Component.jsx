import { RxCaretRight } from "react-icons/rx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Define a mapping of variants to Tailwind CSS classes
const variantClasses = {
  default: "bg-white text-white",
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-black",
};

const Component = ({ variant = "default", className }) => {
  // Combine the variant classes with additional className prop
  const mergedClasses = twMerge(
    clsx(
      "w-full flex justify-center items-center my-5",
      variantClasses[variant], // Apply the variant styles
      className // Merge with additional className prop
    )
  );

  return (
    <button className={mergedClasses}>
      
    </button>
  );
};

export default Component;
