import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { ethers } from "hardhat";

const LotteryModule = buildModule("LotteryModule", (m) => {
    const deployLottery = m.contract("Lottery", []);

    return { deployLottery };
});

export default LotteryModule;