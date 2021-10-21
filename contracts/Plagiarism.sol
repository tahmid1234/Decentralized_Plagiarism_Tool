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
  
 
  
  function match_equation() internal returns(uint){
      uint similarity;
      
      for(uint j = uni_eqn_count;j<eqn_count;j++){
          for(uint k;k<uni_eqn_count ;k++){
              if(eqn_map[k]== true)
                continue;
              if(eqn_sym[j][1] == eqn_sym[k][1] &&  eqn_var[j][0] == eqn_var[k][0]){
                  similarity++;
                  eqn_map[k] = true;
                  break;
              }
          
          }
      }
      
      return similarity;
  }
  
 

   function match_statement() internal returns(uint){
       uint count_st_similarity;
      for(uint j = uni_st_count;j<st_count;j++){
          for(uint k;k<uni_st_count;k++){
              
              if(st_map[k].status==true)
                continue;
              
              if(st_map[j].keyWord == st_map[k].keyWord ){
            
                  count_st_similarity++;
                  if(st_map[j].total_var==st_map[k].total_var){
                
                     count_st_similarity++;
                  }
                  st_map[k].status = true;
                  st_map[j].status = true;
                 
                  break;
              }
          }
      }
      
      return count_st_similarity;
  }
        
      function convertToBytes( string memory code_string) internal{
         bytes  memory codeBytes = bytes(code_string);
        //bytes memory result = new bytes(endIndex-startIndex);
    
        perse_statements(codeBytes);
    }
   bytes32 public  var_name;
  
    function perse_statements( bytes memory codeBytes) internal{
       
        uint  length = codeBytes.length;
        
        statement memory st;
        bool var_flag = false;
        
        uint var_count = 0;
        uint stat = 5;
       
        uint eqn_var_count;
        uint eqn_sym_count;
        
        for(uint i;i<length;i++){
        //space
        if(codeBytes[i] == 0x20){
              
                 continue;
        }
        //semi colon -> end of line
        if(codeBytes[i] == ";" || codeBytes[i] == "{" || codeBytes[i] == "}"){
          if(stat==1){
              st.total_var++;
              st_map[st_count++] = st;
               var_ref[var_name] = st.keyWord;
               st.total_var =0;
                var_name = 0x00;

          }
          else if(stat == 5)
          {
            eqn_var[eqn_count][eqn_var_count++] = var_ref[var_name];
            var_name = 0x00;
            eqn_map[eqn_count++] = false;
              
             
             
          }
           var_flag = false;
           eqn_sym_count = 0;
           eqn_var_count = 0;
           stat = 5;
           var_count = 0;
           continue;
        
        }
        
     
        
        //main key word
        if(codeBytes[i] == 0x6D && i+3<length){
                if(codeBytes[i+1]==0x61 && codeBytes[i+2]==0x69 && codeBytes[i+3]==0x6E){
                    st.keyWord = keyword_map["main"];
                    i = i+3;
                    stat =2;
                }
            }
        //scanf    
        else if(codeBytes[i] == 0x73 && i+4<length){
                if(codeBytes[i+1]==0x63 && codeBytes[i+2]==0x61 && codeBytes[i+3]==0x6E && codeBytes[i+4]==0x66 ){
                    st.keyWord = keyword_map["scanf"];
                    i = i+4;
                    stat = 3;
                    
                }
            }
        //printf
        else if(codeBytes[i] == 0x70 && i+5<length){
                if(codeBytes[i+1]==0x72 && codeBytes[i+2]==0x69 && codeBytes[i+3]==0x6E && codeBytes[i+4]==0x74 && codeBytes[i+5]==0x66){
                    st.keyWord = keyword_map["printf"];
                    i = i+5;
                    stat = 4;
                    
                }
            }
        //int
         else if(codeBytes[i] == 0x69 && i+2<length){
                //n_code = 113;
                if(codeBytes[i+1]==0x6E && codeBytes[i+2]==0x74 ){
                    st.keyWord = keyword_map["int"];
                    i = i+2;
                    var_flag = true;
                    //n_code = 111;
                    stat = 1;
                }
            }
        //data type - float
        else if(codeBytes[i] == 0x66 && i+4<length){
                //n_code = 113;
                if(codeBytes[i+1]==0x6C && codeBytes[i+2]==0x6F && codeBytes[i+3]==0x61 && codeBytes[i+4]==0x74 ){
                    st.keyWord = keyword_map["float"];
                    i = i+4;
                    var_flag = true;
                    //n_code = 235;
                    stat = 1;
                }
            }
        else if(var_flag  ){
             
            if(codeBytes[i] != 0x2C ){
                 c = codeBytes[i];
                var_name |= bytes32(codeBytes[i] & 0xFF) >> (var_count*8);
                var_count++;
               
            }
            else{
                var_ref[var_name] = st.keyWord;
                var_count = 0;
                 st.total_var++;
                 var_name = 0x00;
                d =  0x000000000000000000000000000000000000000000000000000000000000002C;
        }
        
        }
        
        else if(stat ==5) {
            if(codeBytes[i]>0x60 && codeBytes[i] < 0x7B ){
                 c = codeBytes[i];
                var_name |= bytes32(codeBytes[i] & 0xFF) >> (var_count*8);
                 var_count++;
               
            }
            else{
                eqn_var[eqn_count][eqn_var_count++] = var_ref[var_name];
                var_name = 0x00;
                //n_code = 55;
                var_count = 0;
                if(codeBytes[i] == 0x2B)
                        eqn_sym[eqn_count][eqn_sym_count++] = symbol_map["+"] ;
                    else if(codeBytes[i] == 0x2D)
                           eqn_sym[eqn_count][eqn_sym_count++]= symbol_map["-"];
                    else if(codeBytes[i] == 0x3D)
                          eqn_sym[eqn_count][eqn_sym_count++] = symbol_map["="];
            }
            
            
            
            stat = 5;
            
        }
        
        
        
       
       
    }
    }
  
  
}
