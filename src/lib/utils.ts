export const fetcher = async (
  url: string,
  options?: Partial<{
    method: string;
    body: unknown;
    delayMilliseconds: number;
  }>
) => {
  if (options?.delayMilliseconds) {
    await delay(options.delayMilliseconds);
  }
  const response = await fetch(url, {
    method: options?.method ?? "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options?.body),
  });
  return response.json();
};

export const errToString = (err: unknown): string => {
  if (err instanceof Error) {
    return err.message;
  } else {
    return String(err);
  }
};

export const delay = (time: number) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, time)
  );
};
