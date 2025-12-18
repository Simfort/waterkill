export default function CardPayMethod() {
  return (
    <div className="mt-5 px-[20px] flex-wrap flex gap-5">
      <label className="flex w-full  flex-col gap-2" htmlFor="card">
        <h3>Card Number</h3>
        <input
          className="h-[50px] shadow-xl rounded-[10px]  outline-0 pl-5"
          placeholder="0000 0000 0000 0000"
          name="card"
        />
      </label>{" "}
      <label className="flex  w-1/3 flex-col gap-2" htmlFor="CVV">
        <h3>CVV</h3>
        <input
          className="h-[50px] rounded-[10px] shadow-xl outline-0 pl-5"
          placeholder="123"
          name="CVV"
        />
      </label>{" "}
      <label className="flex  w-1/3 flex-col gap-2" htmlFor="expiry">
        <h3>Expiry</h3>
        <input
          className="h-[50px] rounded-[10px] shadow-xl outline-0 pl-5"
          placeholder="MM / YY"
          name="expiry"
        />
      </label>
    </div>
  );
}
