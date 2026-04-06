export interface PollInfo {
  id: number;
  optionA: string;
  optionB: string;
}

export interface PollResults {
  pollId: number;
  optionA: number;
  optionB: number;
  total: number;
}

export interface VoterStats {
  totalVotes: number;
}

export interface VoteBattleConfig {
  contractAddress: string;
  rpcUrl?: string;
}

export const POLLS: PollInfo[] = [
  { id: 1, optionA: "BMW", optionB: "Mercedes" },
  { id: 2, optionA: "iPhone", optionB: "Android" },
  { id: 3, optionA: "Cats", optionB: "Dogs" },
  { id: 4, optionA: "Pizza", optionB: "Sushi" },
  { id: 5, optionA: "Summer", optionB: "Winter" },
  { id: 6, optionA: "Coffee", optionB: "Tea" },
  { id: 7, optionA: "Netflix", optionB: "YouTube" },
  { id: 8, optionA: "PlayStation", optionB: "Xbox" },
  { id: 9, optionA: "Rock", optionB: "Hip-Hop" },
  { id: 10, optionA: "Batman", optionB: "Superman" },
  { id: 11, optionA: "Nike", optionB: "Adidas" },
  { id: 12, optionA: "Marvel", optionB: "DC" },
  { id: 13, optionA: "Windows", optionB: "macOS" },
  { id: 14, optionA: "Coca-Cola", optionB: "Pepsi" },
  { id: 15, optionA: "Football", optionB: "Basketball" },
  { id: 16, optionA: "Morning", optionB: "Night" },
  { id: 17, optionA: "Beach", optionB: "Mountains" },
  { id: 18, optionA: "Books", optionB: "Movies" },
  { id: 19, optionA: "Twitter", optionB: "Instagram" },
  { id: 20, optionA: "Bitcoin", optionB: "Ethereum" },
];
