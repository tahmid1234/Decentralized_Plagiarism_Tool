//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

contract Plagiarism {

  mapping (string => uint) internal keyword_map;
  mapping (string => uint) internal symbol_map;
  mapping(bytes32 => uint) public var_ref;
  mapping(uint => statement ) public st_map;
  mapping(uint => bool ) public eqn_map;
  mapping(uint => mapping(uint =>uint)) public eqn_var;
  mapping(uint => mapping(uint =>uint)) public eqn_sym;
  
    struct logic {
        string left;
        string symbol;
        string right;
    }

    struct statement {
        
        
        uint keyWord;
        string paretnthesis;
        string end_paretnthesis;
        bool status;
        uint total_var;
    }
        struct _if {
        logic log;
        string logic_star;
        string logic_end;
        string if_strt;
        string if_end;
        statement[] statements;
  }
// grammar a = b+c
  struct _equation {
        bool status;

        

  }
   
   
   struct  _code {
       statement[] statements;
       _if[] ifs;
       //_equation[] eqns;
       uint a;
   }
  
  _equation public e;
   uint public code_similarity ;
  constructor(){
    keyword_map["main"] = 1;
    keyword_map["scanf"] = 2;
    keyword_map["printf"] = 3;
    keyword_map["int"] = 4;
    keyword_map["float"] = 5;
    keyword_map["double"] = 6;
    symbol_map["+"] = 1;
    symbol_map["-"] = 2;
    symbol_map["*"] = 3;
    symbol_map["="] = 4;
    symbol_map["++"] = 5;
    symbol_map["--"] = 6;


  }
  //uint public  n_code;
  //uint public o_code;

  bytes32 public c;
  bytes32 public d;
  uint public st_count = 0;
  uint public eqn_count = 0;
  uint public uni_st_count = 0;
  uint public uni_eqn_count = 0;

  function getSimilarity(string memory new_code, string memory unique_code)  public  returns (uint) {
       /*uint if_count = 0;
       uint statement_count = 0;
      */
       uint similarity_rate;
       convertToBytes(unique_code);
       uni_st_count = st_count; 
       uni_eqn_count = eqn_count;
       convertToBytes(new_code);

       
        similarity_rate = match_equation() + match_statement();
        similarity_rate = similarity_rate*100;
        
        similarity_rate = similarity_rate/(2*(st_count- uni_st_count )+(eqn_count- uni_eqn_count ) );
        //n_code = similarity_rate;
   
        uni_st_count = 0;
        st_count = 0; 
        uni_eqn_count = 0;
        eqn_count = 0;
       code_similarity = similarity_rate;
       return similarity_rate;

  }
  
  
  
}