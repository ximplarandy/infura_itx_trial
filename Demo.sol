pragma solidity 0.8;

contract Demo {
    event Echo(string message);
    string greeting = "hello";

    function sayGreeting() view public returns (string memory) {
        return greeting;
    }

    function echo(string calldata message) external {
        emit Echo(message);
    }
}
