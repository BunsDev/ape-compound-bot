import { NetworkConfiguration, Recordable } from "@para-space/utils";

export const strategy: NetworkConfiguration<Recordable<string>> = {
    mainnet: {
        BAYC_USER_PENDING_REWARD_LIMIT: "60",
        BAYC_TOKEN_PENDING_REWARD_LIMIT: "55",
        MAYC_USER_PENDING_REWARD_LIMIT: "18",
        MAYC_TOKEN_PENDING_REWARD_LIMIT: "15",
    },
    goerli: {
        BAYC_USER_PENDING_REWARD_LIMIT: "100",
        BAYC_TOKEN_PENDING_REWARD_LIMIT: "50",
        MAYC_USER_PENDING_REWARD_LIMIT: "100",
        MAYC_TOKEN_PENDING_REWARD_LIMIT: "50",
    },
    fork_mainnet: {
        BAYC_USER_PENDING_REWARD_LIMIT: "60",
        BAYC_TOKEN_PENDING_REWARD_LIMIT: "55",
        MAYC_USER_PENDING_REWARD_LIMIT: "18",
        MAYC_TOKEN_PENDING_REWARD_LIMIT: "15",
    },
};