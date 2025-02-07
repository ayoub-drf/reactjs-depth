import { usePasswordStore } from "./Store";

const PasswordGenerator = () => {
  const {
    length,
    includeNumbers,
    includeSymbols,
    includeUppercase,
    includeLowercase,
    password,
    setLength,
    toggleNumbers,
    toggleSymbols,
    toggleUppercase,
    toggleLowercase,
    generatedPassword,
  } = usePasswordStore();


  return (
    <div className="w-[600px] bg-white min-h-[400px] flex flex-col p-8 rounded-2xl shadow-2xl shadow-blue-700">
      <input
        className="border-2 rounded-2xl px-2 hover:border-red-600 text-blue-600 placeholder:text-[#777777] py-3 border-solid border-blue-700 font-bold focus:outline-0 
             "
        type="number"
        value={length}
        onChange={(e) => setLength(+e.target.value)}
        placeholder="Generate Password"
        id=""
      />
      <br />
      <div className="flex gap-3">
        <input type="checkbox" 
        checked={includeNumbers}
        onChange={toggleNumbers}
        />
        <label className="text-black" htmlFor="">Include Number</label>
      </div>
      <div className="flex gap-3">
        <input type="checkbox" 
        checked={includeSymbols}
        onChange={toggleSymbols}
        />
        <label className="text-black" htmlFor="">include Symbols</label>
      </div>
      <div className="flex gap-3">
        <input type="checkbox" 
        checked={includeLowercase}
        onChange={toggleLowercase}
        />
        <label className="text-black" htmlFor="">include Lowercase</label>
      </div>
      <div className="flex gap-3">
        <input type="checkbox" 
        checked={includeUppercase}
        onChange={toggleUppercase}
        />
        <label className="text-black" htmlFor="">include Uppercase</label>
      </div>
      <br />
      <input
        className="border-2 rounded-2xl px-2 bg-black hover:text-white cursor-pointer hover:border-red-600 text-blue-600 placeholder:text-[#777777] py-3 border-solid border-blue-700 font-bold focus:outline-0 
             "
        type="submit"
        value="Generate Password"
        name="password"
        onClick={generatedPassword}
        id=""
      />
      <br />
      <h1
      className="text-black"
      >{password || "No password generated yet"}</h1>
    </div>
  );
};

export default PasswordGenerator;
