import React,{useState} from 'react'
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const CreateToken = () => {
  const [check, setCheck] = useState(false)
  return (
    <div style={{background:"#172A4B"}} className=" p-4">
         <p className=" text-sr text-lg pb-2 border-b">Create Token</p>
          <p className=" text-xs text-tr pt-3">(*) is required field.</p>

          <h6 className=" text-white text-sm py-2">
            Token Type <span className=" text-tr">*</span>
          </h6>
          <select className=" w-full bg-transparent py-1 px-2">
            <option value="">Standerd token</option>
            <option value="">Liquid generator token</option>
            <option value="">Baby token</option>
            <option value="">Buyback baby token</option>
          </select>
          <h6 className=" text-white text-sm pb-2 pt-3">
            Name <span className=" text-tr">*</span>
          </h6>
          <input
            type="text"
            placeholder="Ex: Etherium"
            className=" w-full bg-transparent py-1 px-2"
          />
          <h6 className=" text-white text-sm pb-2 pt-3">
            Symbol <span className=" text-tr">*</span>
          </h6>
          <input
            type="text"
            placeholder="Ex: ETH"
            className=" w-full bg-transparent py-1 px-2"
          />
          <h6 className=" text-white text-sm pb-2 pt-3">
            Decimals <span className=" text-tr">*</span>
          </h6>
          <input
            type="number"
            placeholder="Ex: 18"
            className=" w-full bg-transparent py-1 px-2"
          />
          <h6 className=" text-white text-sm pb-2 pt-3">
            Total Supply <span className=" text-tr">*</span>
          </h6>
          <input
            type="number"
            placeholder="Ex: 10000000000"
            className=" w-full bg-transparent py-1 px-2"
          />
          <FormControlLabel
            control={<Checkbox onChange={(e)=>setCheck(e.target.checked)} />}
            label="Implement Pink Anti-Bot System?"
          />
{
  check &&       <>
  <p className=" text-sm text-sr pt-3">
        Please visit{" "}
        <a href="#" target="_blank" className=" text-tr">
          {" "}
          https://www.pinksale.finance/#/antibot
        </a>{" "}
        to active Pink Anti-Bot after creating the token
      </p>
      <p className=" text-sm text-sr">
        Check out the tutorial here:{" "}
        <a href="#" target="_blank" className=" text-tr">
          https://docs.pinksale.finance/pink-anti-bot/pink-anti-bot-guide
        </a>
      </p>
  </>
}
          <div className=" w-full flex items-center justify-center pt-5">
          <button
          
            className=" px-3 py-1 bg-pr text-sr hover:text-white font-light text-sm rounded-sm"
          >
            Create Token
          </button>
        </div>
    </div>
  )
}

export default CreateToken