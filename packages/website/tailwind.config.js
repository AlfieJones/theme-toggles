const defaultTheme = require("tailwindcss/defaultTheme");

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "520px",
      },
      colors: {
        primary: {
          DEFAULT: withOpacityValue("--color-primary"),
          0: withOpacityValue("--color-primary-0"),
          10: withOpacityValue("--color-primary-10"),
          20: withOpacityValue("--color-primary-20"),
          30: withOpacityValue("--color-primary-30"),
          40: withOpacityValue("--color-primary-40"),
          50: withOpacityValue("--color-primary-50"),
          60: withOpacityValue("--color-primary-60"),
          70: withOpacityValue("--color-primary-70"),
          80: withOpacityValue("--color-primary-80"),
          90: withOpacityValue("--color-primary-90"),
          95: withOpacityValue("--color-primary-95"),
          99: withOpacityValue("--color-primary-99"),
          100: withOpacityValue("--color-primary-100"),
        },
        "on-primary": withOpacityValue("--color-on-primary"),
        "primary-container": withOpacityValue("--color-primary-container"),
        "on-primary-container": withOpacityValue(
          "--color-on-primary-container"
        ),
        secondary: {
          DEFAULT: withOpacityValue("--color-secondary"),
          0: withOpacityValue("--color-secondary-0"),
          10: withOpacityValue("--color-secondary-10"),
          20: withOpacityValue("--color-secondary-20"),
          30: withOpacityValue("--color-secondary-30"),
          40: withOpacityValue("--color-secondary-40"),
          50: withOpacityValue("--color-secondary-50"),
          60: withOpacityValue("--color-secondary-60"),
          70: withOpacityValue("--color-secondary-70"),
          80: withOpacityValue("--color-secondary-80"),
          90: withOpacityValue("--color-secondary-90"),
          95: withOpacityValue("--color-secondary-95"),
          99: withOpacityValue("--color-secondary-99"),
          100: withOpacityValue("--color-secondary-100"),
        },
        "on-secondary": withOpacityValue("--color-on-secondary"),
        "secondary-container": withOpacityValue("--color-secondary-container"),
        "on-secondary-container": withOpacityValue(
          "--color-on-secondary-container"
        ),
        tertiary: {
          DEFAULT: withOpacityValue("--color-tertiary"),
          0: withOpacityValue("--color-tertiary-0"),
          10: withOpacityValue("--color-tertiary-10"),
          20: withOpacityValue("--color-tertiary-20"),
          30: withOpacityValue("--color-tertiary-30"),
          40: withOpacityValue("--color-tertiary-40"),
          50: withOpacityValue("--color-tertiary-50"),
          60: withOpacityValue("--color-tertiary-60"),
          70: withOpacityValue("--color-tertiary-70"),
          80: withOpacityValue("--color-tertiary-80"),
          90: withOpacityValue("--color-tertiary-90"),
          95: withOpacityValue("--color-tertiary-95"),
          99: withOpacityValue("--color-tertiary-99"),
          100: withOpacityValue("--color-tertiary-100"),
        },
        "on-tertiary": withOpacityValue("--color-on-tertiary"),
        "tertiary-container": withOpacityValue("--color-tertiary-container"),
        "on-tertiary-container": withOpacityValue(
          "--color-on-tertiary-container"
        ),
        error: {
          DEFAULT: withOpacityValue("--color-error"),
          0: withOpacityValue("--color-error-0"),
          10: withOpacityValue("--color-error-10"),
          20: withOpacityValue("--color-error-20"),
          30: withOpacityValue("--color-error-30"),
          40: withOpacityValue("--color-error-40"),
          50: withOpacityValue("--color-error-50"),
          60: withOpacityValue("--color-error-60"),
          70: withOpacityValue("--color-error-70"),
          80: withOpacityValue("--color-error-80"),
          90: withOpacityValue("--color-error-90"),
          95: withOpacityValue("--color-error-95"),
          99: withOpacityValue("--color-error-99"),
          100: withOpacityValue("--color-error-100"),
        },
        "on-error": withOpacityValue("--color-on-error"),
        "error-container": withOpacityValue("--color-error-container"),
        "on-error-container": withOpacityValue("--color-on-error-container"),
        neutral: {
          0: withOpacityValue("--color-neutral-0"),
          10: withOpacityValue("--color-neutral-10"),
          20: withOpacityValue("--color-neutral-20"),
          30: withOpacityValue("--color-neutral-30"),
          40: withOpacityValue("--color-neutral-40"),
          50: withOpacityValue("--color-neutral-50"),
          60: withOpacityValue("--color-neutral-60"),
          70: withOpacityValue("--color-neutral-70"),
          80: withOpacityValue("--color-neutral-80"),
          90: withOpacityValue("--color-neutral-90"),
          95: withOpacityValue("--color-neutral-95"),
          99: withOpacityValue("--color-neutral-99"),
          100: withOpacityValue("--color-neutral-100"),
        },
        "neutral-variant": {
          0: withOpacityValue("--color-neutral-variant-0"),
          10: withOpacityValue("--color-neutral-variant-10"),
          20: withOpacityValue("--color-neutral-variant-20"),
          30: withOpacityValue("--color-neutral-variant-30"),
          40: withOpacityValue("--color-neutral-variant-40"),
          50: withOpacityValue("--color-neutral-variant-50"),
          60: withOpacityValue("--color-neutral-variant-60"),
          70: withOpacityValue("--color-neutral-variant-70"),
          80: withOpacityValue("--color-neutral-variant-80"),
          90: withOpacityValue("--color-neutral-variant-90"),
          95: withOpacityValue("--color-neutral-variant-95"),
          99: withOpacityValue("--color-neutral-variant-99"),
          100: withOpacityValue("--color-neutral-variant-100"),
        },
        background: withOpacityValue("--color-background"),
        "on-background": withOpacityValue("--color-on-background"),
        surface: withOpacityValue("--color-surface"),
        "on-surface": withOpacityValue("--color-on-surface"),
        outline: withOpacityValue("--color-outline"),
        "surface-variant": withOpacityValue("--color-surface-variant"),
        "on-surface-variant": withOpacityValue("--color-on-surface-variant"),
        "inverse-on-surface": withOpacityValue("--color-inverse-on-surface"),
        "inverse-surface": withOpacityValue("--color-inverse-surface"),
        "inverse-primary": withOpacityValue("--color-inverse-primary"),
      },
      opacity: {
        hover: "0.08",
        focus: "0.12",
        pressed: "0.12",
        dragged: "0.16",
        surface1: "0.05",
        surface2: "0.08",
        surface3: "0.11",
        surface4: "0.12",
        surface5: "0.14",
        disabled: "0.38",
      },
      scale: {
        "10/30": "calc(1/3)",
        "20/30": "calc(2/3)",
      },
      transitionProperty: {
        "transform-color-maxWidth": "transform, color, max-width",
        "width-background-color": "width, background-color",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
