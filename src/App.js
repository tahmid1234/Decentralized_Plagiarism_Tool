import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'

import Plagiarism from './artifacts/contracts/Plagiarism.sol/Plagiarism.json'
//const plagiarismAddress = "0x20321DFfacAf739399Dae0259Bbf27393bB7aC28" ;


function App() {
  const [greeting, setGreetingValue] = useState()
  const [newCode, setNewCode] = useState()
  const [uniqueCode,setUniqueCode] = useState()
  const [userAccount, setUserAccount] = useState()
  const [amount, setAmount] = useState()
  const [foo_v, setFoo]  = useState(5)
  const [property_type,setPropertyType] = useState("Books")
  const [author_name,setAuthorName] = useState("Tahmid")
   var similarity =0;

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  

 
  

 

  async function getSimilarity() {
      if(!newCode || !uniqueCode) return;

      if (typeof window.ethereum !== 'undefined') {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
        //await requestAccount()
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log({ provider })
        const signer = provider.getSigner()
        const contract = new ethers.Contract(plagiarismAddress, Plagiarism.abi, signer)
        await contract.getSimilarity(newCode,uniqueCode);
        //similarity = await contract.code_similarity() ;
        //console.log(similarity)
        //console.log(" SIMILARI")
      }

  }

  async function disPlaySimilarity(){
    console.log("New Code")
    console.log(newCode)
    console.log("Original Code")
    console.log(uniqueCode)
    const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
        //await requestAccount()
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log({ provider })
        const signer = provider.getSigner()
        const contract = new ethers.Contract(plagiarismAddress, Plagiarism.abi, signer)
    similarity = await contract.code_similarity() ;
    console.log(similarity.toNumber()+"%")
        
  }

 

  
  return (
    <div className="App">
      <header className="App-header">
        
        <textarea  onChange={e => setNewCode(e.target.value)} placeholder="New code" />
        <textarea  onChange={e => setUniqueCode(e.target.value)} placeholder="Original Code" />
        <button onClick={getSimilarity}>Check Similarity</button>
        <button onClick={disPlaySimilarity}>Display Similarity</button>
        
      </header>
    </div>
  );
}

export default App;
