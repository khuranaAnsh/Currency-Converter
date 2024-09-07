import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId(); //!useId is a React Hook for generating IDs that can be passed to accessibility attributes.
  // ! and it generates a unique value of random string which contain numbers.

  // ! Always remember do not call useId to generate keys in a list. Keys should be generated from your data.
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={
            (e) => onAmountChange && onAmountChange(Number(e.target.value)) //here if someone does not pass onAmountChange then there are possible chances that it crash
            //(because we have not passed any default value while declartion of onAmounChange as its a function) if we directly use onAmountChange function here so to check whether this exists or not.
            // That's why we arre first checking it (onAmountChange) and then we are calling it   onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/*Now we are going in a loop to find currency and to increase performace of loop use key */}
          {/* Remember the key in loops in React */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
