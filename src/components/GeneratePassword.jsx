import { useCallback, useEffect, useRef, useState } from "react";

function GeneratePassword() {
  const [length, setLength] = useState(8);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useCharacters, setUseCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const generate = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const characters = "@#$&%!~";
    let pas = "";
    if (useNumbers) str += numbers;
    if (useCharacters) str += characters;
    console.log(str);
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pas += str.charAt(index);
    }
    setPassword(pas);
  }, [length, useNumbers, useCharacters, setPassword]);
  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    generate();
  }, [length, useNumbers, useCharacters, generate]);
  return (
    <>
      <p className="p-2">*Generate Password</p>
      <div className=" p-2 bg-green-500">
        <div className="flex justify-center h-10">
          <input
            className=" w-80 pl-2 text-red-500 rounded-l-xl outline-none"
            type="text"
            name="password"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <div
            className="w-fit p-2 rounded-r-xl bg-red-500 hover:bg-red-600 cursor-pointer"
            onClick={copyToClipBoard}
          >
            <p>Copy</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <input
            type="range"
            name="length"
            value={length}
            min={8}
            max={30}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length : {length}</label>
          <input
            type="checkbox"
            name="number"
            value={useNumbers}
            onChange={() => setUseNumbers((prev) => !prev)}
            onClick={() => {
              console.log(useNumbers);
            }}
          />
          <label>Number</label>
          <input
            type="checkbox"
            name="character"
            value={useCharacters}
            onChange={() => setUseCharacters((prev) => !prev)}
            onClick={() => {
              console.log(useCharacters);
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </>
  );
}

export default GeneratePassword;
