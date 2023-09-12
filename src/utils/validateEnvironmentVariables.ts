export const validateEnvironmentVariables = (): void => {
  const { VITE_XML_PROVIDER, VITE_MODELS_PROVIDER, VITE_HOST } = import.meta.env;
  const missingVariables = [];

  // Check if VITE_XML_PROVIDER is missing
  if (!VITE_XML_PROVIDER) {
    missingVariables.push("VITE_XML_PROVIDER");
  }

  // Check if VITE_MODELS_PROVIDER is missing
  if (!VITE_MODELS_PROVIDER) {
    missingVariables.push("VITE_MODELS_PROVIDER");
  }

  // Check if VITE_HOST is missing
  if (!VITE_HOST) {
    missingVariables.push("VITE_HOST");
  }

  // If any required variables are missing, throw an error with details
  if (missingVariables.length > 0) {
    throw new Error(
      `following environment variables are missing: ${missingVariables.join(", ")}`
    );
  }
};
