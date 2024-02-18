interface EnvProviderI {
  SERVER_BASE_URL: string;
}

export const EnvProvider = (): EnvProviderI => {
  if (process.env.NODE_ENV === "production") {
    return {
      SERVER_BASE_URL: process.env.PRODUCTION_SERVER_URL as string,
    };
  } else {
    return {
      SERVER_BASE_URL: process.env.LOCAL_SERVER_URL as string,
    };
  }
};
