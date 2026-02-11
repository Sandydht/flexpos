import { vi } from "vitest";

type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

type MockedRepo<T> = {
  [K in FunctionKeys<T>]: ReturnType<typeof vi.fn>;
};

export const createMockRepository = <T extends object>(
  methods: FunctionKeys<T>[],
): MockedRepo<T> => {
  const repo = {} as MockedRepo<T>;

  methods.forEach((method) => {
    repo[method] = vi.fn();
  });

  return repo;
};
