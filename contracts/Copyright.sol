//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

interface IPlagiarism {
    function getSimilarity(string memory new_code, string memory unique_code)  external  returns (uint);
}

contract Copyright{
    uint public similarity;

    function checkSimilarity(string memory new_code, string memory unique_code) public{
        IPlagiarism iplagiarism = IPlagiarism(address(0x99eCdC0EF0935E753B73a2a124E789c6593B09C9));
        similarity = iplagiarism.getSimilarity(new_code,unique_code);
    }


}