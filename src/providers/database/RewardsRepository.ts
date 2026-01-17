import { RewardDTO } from "../../domain/dtos/RewardDTO";

export class RewardsRepository {
  private rewards: RewardDTO[];

  private constructor() {
    this.rewards = [];
  }

  static getInstance() {
    if (!singletonInstance) {
      singletonInstance = new RewardsRepository();
    }
    return singletonInstance;
  }

  async create(reward: RewardDTO) {
    this.rewards.push(reward);
  }

  async findById(id: string) {
    const reward = this.rewards.find((reward) => reward.id === id);
    return reward;
  }

  async addReward(reward: RewardDTO) {
    this.rewards.push(reward);
  }
}

let singletonInstance: RewardsRepository | null = null;
