# Design pattern decisions
1) Inheritance from the Openzeppelin Ownable contract
2) Restrict access through modifiers and access control for specific storage variables.
3) Upgradibility: The contract can be taken out of service by the owner through a short-circuit mechanism.
