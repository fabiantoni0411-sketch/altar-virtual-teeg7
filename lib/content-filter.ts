export const VALIDATION_MESSAGE =
  "Por favor, escreva seu pedido de forma clara e respeitosa, utilizando palavras legíveis e uma intenção positiva de oração.";

const LEET_MAP: Record<string, string> = {
  "0": "o", "1": "i", "3": "e", "4": "a", "5": "s", "7": "t", "8": "b", "@": "a", "$": "s", "!": "i",
};

export function normalizeText(text: string): string {
  let t = text.toLowerCase().trim();
  t = t.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  t = t.split("").map((ch) => LEET_MAP[ch] ?? ch).join("");
  t = t.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  return t;
}

export function isGibberish(rawText: string): boolean {
  const trimmed = rawText.trim();
  if (trimmed.length < 8) return true;
  const letters = trimmed.replace(/[^a-zA-ZÀ-ÿ]/g, "");
  const letterRatio = letters.length / trimmed.length;
  if (letterRatio < 0.55) return true;
  const words = normalizeText(trimmed).split(" ").filter(Boolean);
  if (words.length < 3) return true;
  const uniqueWords = new Set(words);
  if (uniqueWords.size === 1 && words.length > 2) return true;
  const vowels = letters.replace(/[^aeiouAEIOUÀ-ÿ]/g, "");
  if (letters.length > 6 && vowels.length / letters.length < 0.15) return true;
  return false;
}

const FORBIDDEN_PATTERNS: RegExp[] = [
  /\bamarra\w*/i, /\bfeitic\w*/i, /\bmata\w*\b/i, /\bmorra\b/i,
  /\bmorte\s+(dele|dela|de\s+\w+)/i, /\bsofra\w*/i, /\bse\s+ferra\w*/i,
  /\bvinganc\w*/i, /\bdestrua\w*\b/i, /\bacabe\s+com\s+(a\s+vida|ele|ela)/i,
];

export interface FilterResult {
  allowed: boolean;
  reason?: "gibberish" | "forbidden_pattern" | "blocked_word";
  matchedTerm?: string;
}

export function checkForbiddenPatterns(rawText: string): FilterResult {
  for (const pattern of FORBIDDEN_PATTERNS) {
    if (pattern.test(rawText)) {
      return { allowed: false, reason: "forbidden_pattern", matchedTerm: pattern.source };
    }
  }
  return { allowed: true };
}

export function checkBlockedWords(rawText: string, blockedWords: string[]): FilterResult {
  const normalized = normalizeText(rawText);
  const words = normalized.split(" ");
  for (const bw of blockedWords) {
    const normalizedBw = normalizeText(bw);
    if (!normalizedBw) continue;
    if (normalized.includes(normalizedBw) || words.includes(normalizedBw)) {
      return { allowed: false, reason: "blocked_word", matchedTerm: bw };
    }
  }
  return { allowed: true };
}

export function validateRequestText(
  rawText: string,
  blockedWords: string[]
): FilterResult & { message: string } {
  if (isGibberish(rawText)) {
    return { allowed: false, reason: "gibberish", message: VALIDATION_MESSAGE };
  }
  const forbidden = checkForbiddenPatterns(rawText);
  if (!forbidden.allowed) {
    return { ...forbidden, message: VALIDATION_MESSAGE };
  }
  const blocked = checkBlockedWords(rawText, blockedWords);
  if (!blocked.allowed) {
    return { ...blocked, message: VALIDATION_MESSAGE };
  }
  return { allowed: true, message: "" };
}

export function validateName(name: string): { valid: boolean; message?: string } {
  const trimmed = name.trim();
  if (!trimmed) {
    return { valid: false, message: "Por favor, informe seu nome." };
  }
  const normalized = normalizeText(trimmed);
  if (normalized === "anonimo" || normalized === "anonimo(a)") {
    return { valid: false, message: "Não é possível enviar como \"Anônimo\". Por favor, informe seu nome completo." };
  }
  const parts = trimmed.split(/\s+/).filter(Boolean);
  if (parts.length < 2) {
    return { valid: false, message: "Por favor, informe nome e sobrenome." };
  }
  return { valid: true };
}
