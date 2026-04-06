import { ethers } from "ethers";
import { VoteBattleConfig, PollResults, VoterStats, POLLS } from "./types";

const ABI = [
  "function vote(uint256 pollId, uint256 option) external",
  "function getPollResults(uint256 pollId) external view returns (uint256 optionA, uint256 optionB)",
  "function getVoterStats(address voter) external view returns (uint256)",
  "function getVoterPollStats(address voter, uint256 pollId) external view returns (uint256)",
  "function pollVotes(uint256, uint256) external view returns (uint256)",
  "function voterStats(address) external view returns (uint256)",
];

export class VoteBattleClient {
  private provider: ethers.JsonRpcProvider;
  private contract: ethers.Contract;
  public contractAddress: string;

  constructor(config: VoteBattleConfig) {
    const rpcUrl = config.rpcUrl || "https://forno.celo.org";
    this.provider = new ethers.JsonRpcProvider(rpcUrl);
    this.contractAddress = config.contractAddress;
    this.contract = new ethers.Contract(config.contractAddress, ABI, this.provider);
  }

  async getPollResults(pollId: number): Promise<PollResults> {
    const [optA, optB] = await this.contract.getPollResults(pollId);
    const a = Number(optA);
    const b = Number(optB);
    return { pollId, optionA: a, optionB: b, total: a + b };
  }

  async getAllPollResults(): Promise<PollResults[]> {
    const results: PollResults[] = [];
    for (const poll of POLLS) {
      results.push(await this.getPollResults(poll.id));
    }
    return results;
  }

  async getVoterStats(address: string): Promise<VoterStats> {
    const total = await this.contract.getVoterStats(address);
    return { totalVotes: Number(total) };
  }

  async getVoterPollStats(address: string, pollId: number): Promise<number> {
    const count = await this.contract.getVoterPollStats(address, pollId);
    return Number(count);
  }

  getPolls() {
    return POLLS;
  }
}

export { ABI as VOTE_BATTLE_ABI };
