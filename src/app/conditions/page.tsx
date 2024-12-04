const ConditionsPage = () => {
  const conditions = [
		{
			title: "1. Company Details:",
			content:
				"Alturaash Art and Artefacts DMCC Alturaash, a company incorporated under Dubai Government Authority with DMCC, is primarily an art house, engaged in Art Auction, Art Advisory , Art Investment etc.",
		},
		{
			title: "2. Limitation of Guarantees:",
			content:
				"All Artwork offered on the Website is sold subject to the specific warranty and guarantee as to physical condition and title set forth. Other than as set forth in the specific warranty and guarantee, all artwork is sold to buyers AS IS, and Alturaash makes no guarantees, warranties or representations, expressed or implied, to any buyer with respect to the artwork, including without limitation its merchantability, fitness for a particular purpose, quality, importance, provenance, exhibitions, literature or historical relevance of the artwork or otherwise. No statement anywhere, whether oral or written, shall be deemed such a guarantee, warranty or representation.",
		},
		{
			title: "3. Registration and viewing the Lots:",
			content: [
				"All Lots for sale are featured in the Auction Catalogue. The number listed next to each image is the 'Lot number' and should be used as a reference during bidding, or for any information requests. The Lots in this sale may be viewed through any of the following:",
				[
					"The online Auction Catalogue",
					"The mobile Auction Catalogue",
					"The Physical Auction Catalog",
				],
				"We may withdraw any Lot before, during, or after the online auction, if We have reasons to believe that the authenticity of the Lot or the accuracy of the description of the Lot is in doubt, or if there is a breach of Our terms of business, or if We otherwise believe, in Our sole discretion, that it would be improper to include the Lot in the auction.",
				"We have the sole and absolute discretion to:",
				[
					"Determine the form and content of the descriptions of Lots in the Auction Catalogue",
					"Granting bidding access to a bidder",
					"Recording, rejecting, or accepting bids, and",
					"Deciding which bid constitutes the winning bid, if any",
				],
			],
		},
		{
			title: "4. Bidding:",
			content: [
				"For the convenience of bidders, in particular, bidders who are placing bids on more than one Lot, Lot groups are scheduled to close at different times during the auction.",
				[
					"The Website shall also contain a 'My Account' filtered view of the account information",
					"Bid updates and time extensions, if any, shall be updated on the Website",
					"Bidders may download the MobileApp onto any mobile device that supports Android and iOS to place advance bids",
				],
			],
		},
		{
			title: "5. Technical Downtime:",
			content:
				"In the unlikely event that the Website or MobileApp is inaccessible to bidders or partially disabled due to Technical Downtime at any time during the half an hour prior to the scheduled closing time of the auction for any of the Lot groups, the closing time of that Lot group and subsequent Lot groups will be extended by a duration of thirty (30) minutes.",
		},
		{
			title: "6. Completing the Purchase:",
			content: [
				"We will raise invoices on the winning bidder for the Sale Price and Buyer’s Premium, applicable taxes on the sale of the Lots, and other additional charges that may be incurred by Us, if any, including shipping and handling of the Lots and additional levies. n any event, the Lots purchased will not be released or shipped out to the winning bidder or his/her representative until the winning bidder has fulfilled his payment and other obligations as described in these conditions for sale.",
				"In respect of each sale at the auction, we shall charge a Buyer's Premium of 10% of the winning bid value.",
				"Payments can be made via:",
				[
					"Cheque",
					"Direct wire transfer",
					"Any given currency preferences in specific lot such as Cryptocurrency",
				],
			],
		},
		{
			title: "7. Authenticity Guarantee:",
			content:
				"All Artwork offered on the Website is sold subject to the specific warranty and guarantee as to physical condition and title set forth. Other than as set forth in the specific warranty and guarantee, all artwork is sold to buyers AS IS, and Alturaash makes no guarantees, warranties or representations, expressed or implied, to any buyer with respect to the artwork, including without limitation its merchantability, fitness for a particular purpose, quality, importance, provenance, exhibitions, literature or historical relevance of the artwork or otherwise. No statement anywhere, whether oral or written, shall be deemed such a guarantee, warranty, or representation. Please note that Osian’s makes no representation or warranty as to whether the buyer acquires any reproduction rights or other intellectual property rights in the artwork.",
		},
		{
			title: "8. Refund Policy:",
			content:
				"Alturaash will process returns and refunds within 14 (fourteen) days of delivery, if for any reason the artwork is not acceptable to the buyer.",
		},
		{
			title: "9. Sole Remedy:",
			content:
				"It is specifically understood and agreed that with respect to any of the representations or warranties set forth, the rescission of a sale and refund pursuant to this paragraph and General Terms and Conditions is the sole and exclusive remedy that is available to the buyer as a matter of law, or in equity.",
		},
		{
			title: "10. Damage & Claim Policy:",
			content:
				"When Alturaash delivers the artwork to the shipper for shipment to the buyer, the title to the artwork and risk of loss will pass to the buyer.",
		},
		{
			title: "11. Payment in Cryptocurrency:",
			content: [
				"When we announce to accept cryptocurrency for our auction or for any specific Lot, we shall notify the detail in catalog note or special note of that particular lot.",
				"The bidding for such lots will be in USD only and we will raise the invoice in cryptocurrency equivalent to the winning bid amount in USD.",
			],
		},
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-urbanist">
      <h1 className="text-3xl font-light text-center mb-8">CONDITIONS OF SALE</h1>
      
      <p className="text-gray-700 mb-12">
        These conditions for sale set out the terms on which We offer the Lots listed in this catalogue for sale on behalf of sellers, and if you make a successful bid, will form a contract for sale between you and the seller.
      </p>

      <div className="space-y-12">
        {conditions.map((condition, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-xl font-medium font-urbanist">{condition.title}</h2>
            {Array.isArray(condition.content) ? (
              <div className="space-y-4">
                {condition.content.map((item, i) => (
                  Array.isArray(item) ? (
                    <ul key={i} className="list-disc pl-5 space-y-2 font-urbanist">
                      {item.map((subItem, j) => (
                        <li key={j} className="text-gray-700">{subItem}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i} className="text-gray-700 font-urbanist">{item}</p>
                  )
                ))}
              </div>
            ) : (
              <p className="text-gray-700 font-urbanist">{condition.content}</p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ConditionsPage;