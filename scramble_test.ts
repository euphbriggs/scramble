import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std/testing/asserts.ts";
import { scramble } from "./scramble.ts";

Deno.test({
  name: "returns same length as input",
  fn(): void {
    // Arrange
    const expected = 10;
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Act
    const output = scramble(input);

    // Assert
    assertEquals(output.length, expected);
  },
});

Deno.test({
  name: "single run returns different order",
  fn(): void {
    // Arrange
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = "[1,2,3,4,5,6,7,8,9,10]";

    // Act
    const output = scramble(input);
    const actual = JSON.stringify(output);

    // Assert
    assertNotEquals(actual, expected);
  },
});

Deno.test({
  name: "leaves input value unchanged",
  fn(): void {
    // Arrange
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = "[1,2,3,4,5,6,7,8,9,10]";

    // Act
    scramble(input);
    const actual = JSON.stringify(input);

    // Assert
    assertEquals(actual, expected);
  },
});

Deno.test({
  name: "ten runs doesn't produce duplicates",
  fn(): void {
    // Arrange
    const iterations = 10;
    const input: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actual = new Set<number[]>();

    // Act
    for (let i = 0; i < iterations; i++) {
      actual.add(scramble(input));
    }

    // Assert
    assertEquals(actual.size, iterations);
  },
});
