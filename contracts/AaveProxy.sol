// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AaveProxy {
    /**
     * @notice Return the earned amount to the specified account address up to the present.
     * @param account The account address.
     * @return The earned amount.
     */
    function earned(address account) public view returns (uint256);

    /**
     * @notice Stake the specified amount to earn arbitrage rewards.
     * @param amount The amount to be staked.
     */
    function stake(uint256 amount) external;

    /**
     * @notice Withdraw the staked amount.
     * @param amount The amount to be staked.
     */
    function withdraw(uint256 amount) external;

    /**
     * @notice get arbitrage rewards.
     * @param isStake Should the earned rewards be staked again?
     */
    function getReward(bool isStake) external;

    /**
     * @notice Register and bind the referrer's address.
     * @param referrer The referrer address.
     */
    function register(address referrer) external;
}
