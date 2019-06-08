pragma  solidity ^0.5.0;

contract comeOn {
   address public organizer;
   address payable[] public players;
   address payable[] public winners;

   constructor () public {
       organizer = msg.sender;
   }

    function remove(uint index) private returns(address payable[] memory) {
        require(index < players.length);
        for (uint i = index; i<players.length-1; i++){
            players[i] = players[i+1];
        }
        delete players[players.length-1];
        players.length--;
        return players;
    }

   function enter() public payable{
       //avoid a person to join twice
       for(uint i=0; i< players.length; i++) {
           require(msg.sender != players[i]);
       }
       players.push(msg.sender);
   }

   function pickWinnerAll() public restricted(){
       //pick all player as a winner
       for(uint i=0; i< players.length; i++) {
             winners.push(players[i]);
           }
        players = new address payable[](0);
   }

    function random() private view returns (uint) {
       return uint(keccak256(abi.encodePacked(block.difficulty, now, players)));
   }

   function pickWinnerRandom(uint numberOfWinners) public restricted(){
       //pick a specefic number of winners
       if(players.length >= numberOfWinners){

          for(uint i=0; i< numberOfWinners; i++) {
             uint index = random() % players.length;
                winners.push(players[index]);
                remove(index);
          }

       }else{
           for(uint i=0; i< players.length; i++) {
             winners.push(players[i]);
           }
       }
   }
   //only organizer can call the method
   modifier restricted() {
       require(msg.sender == organizer);
       _;
   }

   function getOrganaizer() public view returns (address) {
       return organizer;
   }

   function getPlayers() public view returns (address payable[] memory) {
       return players;
   }

   function getWinners() public view returns (address payable[] memory) {
       return winners;
   }
}
