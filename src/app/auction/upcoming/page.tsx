// src/app/auction/ongoing/page.tsx
import AuctionPage from "@/components/auctions/Auctions";

export default function OngoingAuctions() {
	return <AuctionPage type='upcoming' />;
}

// Similar for upcoming/page.tsx and past/page.tsx with respective types