import { isEmpty } from "lodash";

export interface FormatNumberOptions {
  notation?: "standard" | "compact";
  useGrouping?: boolean;
  minimumIntegerDigits?: number;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  minimumSignificantDigits?: number;
  maximumSignificantDigits?: number;
}

/**
 * @description
 * This function formats a number based on the provided options.
 * It handles different cases for formatting numbers, including very small numbers, large numbers, and numbers with a large number of decimal places.
 *
 * @param value - The number to format.
 * @param options - The formatting options.
 * @returns The formatted number as a string.
 *
 * 1. If the number is 0, return "0".
 * 2. If the number is less than 1e-4, return "< 0.0001". e.g. 0.000001 => "< 0.0001"
 * 3. If the number is less than 1, return the number formatted to 5 decimal places. e.g. 0.00022345 => 0.00022
 * 3. If the number is greater than 1, less than 100,000, return the number formatted to 2 decimal places and 6 significant digits. e.g. 123_456.789 => 123,457, 1.23456789 => 1.23456
 * 4. If the number is greater than or equal to 100,000, return the number formatted to 2 decimal places. e.g. 12_345_600 => 12.36M, 12_345 => 12.35k
 */

export function formatNumber(
  value: bigint | number | string,
  options?: FormatNumberOptions
) {
  const num = Number(value);

  if (num === 0) {
    return "0";
  }

  if (options && !isEmpty(options)) {
    const formatter = new Intl.NumberFormat("en-US", options);

    return formatter.format(Number(value));
  }

  if (num < 1e-4 && num !== 0) {
    return "< 0.0001";
  }

  if (num >= 1e-4 && num < 1) {
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "standard",
      maximumFractionDigits: 5,
    });

    return formatter.format(Number(value));
  }

  if (num >= 100_000) {
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      useGrouping: true,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      roundingMode: "floor",
    });

    return formatter.format(Number(value));
  }

  // the value is less than 1,000,000, we need to format it to 6 significant digits
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "standard",
    useGrouping: true,
    maximumFractionDigits: 2,
    maximumSignificantDigits: 6,
  });

  return formatter.format(Number(value));
}
