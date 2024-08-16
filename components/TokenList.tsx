import { TokenWithbalance } from "@/app/hooks/useTokens";
import { Button } from "./ui/button";


export function TokenList({ tokens, navigator }: { tokens: TokenWithbalance[], navigator: (tabName: string) => void }) {
  const validTokens = tokens.filter((t) => t.balance !== "0.00");
  return (
    <div>
      {validTokens.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <span className="font-bold text-2xl pt-4 pb-1">You don't have any assets yet!</span>
          <span className="text-medium pb-4">Start by buying or depositing funds:</span>
          <Button onClick={() => navigator('addFunds')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Add Funds
          </Button>

        </div>
      ) : (
        validTokens.map((t) => (
          <TokenRow key={t.name} token={t} />
        ))
      )}
    </div>
  );
}

function TokenRow({ token }: { token: TokenWithbalance }) {
  return (
    <div className="flex justify-between pb-2">
      <div className="flex">
        <div className="flex justify-center items-center">
          <img
            src={token.image}
            className="h-[40px] w-[40px] object-cover mr-3"
          />
        </div>
        <div>
          <div className="font-bold">{token.name}</div>
          <div className="font-slim">
            1 {token.name} = ~${token.price}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="font-bold flex justify-end">{token.usdBalance}</div>
          <div className="font-slim flex justify-end">{token.balance}</div>
        </div>
      </div>
    </div>
  );
}
