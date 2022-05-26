import { Base32 } from "base-coding";

export function encodeTokenHash(token: string) {
  return Base32.encode(token);
}

export function decodeTokenHash(tokenHashed: string) {
  return Base32.decode(tokenHashed);
}
