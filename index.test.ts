import { Client, fetchExchange } from "@urql/core";
import { expect, test } from "vitest";

test("headers", async () => {
  const headers = new Headers();

  const client = new Client({
    url: "https://localhost:3000/graphql",
    exchanges: [fetchExchange],
    fetchOptions: { headers },
  });

  const response = await client.query("{ ping }", {});
  expect(response.error?.message).toMatch(/Header.+append.+invalid.+value/s);
});
