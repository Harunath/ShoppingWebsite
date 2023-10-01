import React from 'react'

function CurrencyBox({type,setCurrency,amount,setAmount,options,selected}) {
  console.log(options)
  return (
      <div className="flex flex-col gap-4 p-4 rounded-xl bg-gray-200">
          <div className="flex justify-between px-4">
            <p>{type}</p>
            <p>Currency type</p>
          </div>
          <div className="flex justify-between gap-2 px-2">
            <input
              className="w-1/2 px-2 rounded-xl outline-none bg-blue-200"
              type="number"
              name="from"
              min={0}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="flex justify-end w-1/2 rounded-xl">
              <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                name="currency"
                onChange={(e)=>setCurrency(e.target.value)}
              >
                { options.map((val)=>{
                  if(val == selected)
                    return(
                      <option key={val} value={val} selected>{val}</option>
                    )
                  else
                    return(
                      <option key={val} value={val}>{val}</option>
                      )
                  })
                }
              </select>
            </div>
          </div>
    </div>
  )
}

export default CurrencyBox
