export type Choice = "higher" | "lower";

export interface Player {
    name: string;
    score: number;
    isTurn: boolean;
    id: number;
}
