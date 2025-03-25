import React, { useMemo } from "react";

interface PriceFormatterProps {
  value: number | string;
}

const PriceFormatter: React.FC<PriceFormatterProps> = ({ value }) => {
  const formattedPrice = useMemo(() => {
    if (!value && value !== 0) return ""; // Handle empty values

    // Convert value to a float (in case it's a string)
    const number = typeof value === "string" ? parseFloat(value) : value;

    // If the value is NaN or invalid, return empty
    if (isNaN(number)) return "";

    // Format number with thousand separators and no decimal places
    return `₹ ${number.toLocaleString("en-IN", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`;
  }, [value]);

  return <span>{formattedPrice}</span>;
};

export default PriceFormatter;
