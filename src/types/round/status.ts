export const RoundStatus = {
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  PAUSED: "PAUSED",
  EVALUATING: "EVALUATING",
  COMPLETED: "COMPLETED",
  CANCELLED: "CANCELLED",
  ARCHIVED: "ARCHIVED"
} as const;

export type RoundStatus =
  (typeof RoundStatus)[keyof typeof RoundStatus];