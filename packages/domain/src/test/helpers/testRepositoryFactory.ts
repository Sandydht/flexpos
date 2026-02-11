import { vi } from "vitest";

type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

export const createMockRepository = <T extends object>(
  methods: FunctionKeys<T>[],
): Partial<T> => {
  const repo: Partial<T> = {};

  methods.forEach((method) => {
    repo[method] = vi.fn() as any;
  });

  return repo;
};
