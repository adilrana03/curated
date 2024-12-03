const ConsigningPage = () => {
	const consignmentSteps = [
		"Share clear/high-resolution color images (front, back, and detail of signature or maker's mark) - A detailed description (A minimum of three images)",
		"Mention the medium/material, dimensions, and caption of the artwork (if known)",
		"Authenticity Papers mentioning the provenance (the history of the artwork and how it was acquired) - Artist or Maker (if known)",
		"Mention the condition/state your artwork is in",
	];

	return (
		<div className='max-w-6xl mx-auto px-4 py-16'>
			<h1 className='text-3xl font-light text-center mb-12'>
				CONSIGNING
			</h1>

			{/* Auction Estimates & Steps */}
			<section className='mb-12'>
				<h2 className='text-xl font-medium mb-4'>
					Auction Estimates & Valuation
				</h2>
				<p className='text-gray-700 mb-4'>
					Steps to go about consigning works to Alturaash:
				</p>
				<p className='mb-4'>
					First, request an auction estimate, and see if your artwork
					is suitable for Alturaash's sale which would require you to
					follow the following steps:
				</p>
				<ol className='list-decimal pl-5 space-y-4'>
					{consignmentSteps.map((step, index) => (
						<li key={index} className='text-gray-700'>
							{step}
						</li>
					))}
				</ol>
			</section>

			{/* Estimates Section */}
			<section className='mb-12'>
				<h2 className='text-xl font-medium mb-4'>Auction Estimates:</h2>
				<p className='text-gray-700'>
					Auction estimates for artworks that we consider appropriate
					for our future auctions will then be shared with you by an
					Alturaash's specialist, who will be in touch with you at the
					earliest to discuss estimates, advise on-sale dates and
					explain the Consignment Agreement.
				</p>
			</section>

			{/* Agreeing to Estimates */}
			<section className='mb-12'>
				<h2 className='text-xl font-medium mb-4'>
					Agreeing to Estimates and Reserves:
				</h2>
				<p className='text-gray-700'>
					Alturaash will set a low and high estimate range for each
					artwork with you. Estimates are based on extensive market
					research which includes auction records of the sale of
					similar (same artist) artworks in past auctions.
				</p>
				<p className='text-gray-700 mt-4'>
					Information related to final set estimates is published in
					the auction catalog and will be publicly available to
					potential buyers.
				</p>
			</section>

			{/* Commission */}
			<section className='mb-12'>
				<h2 className='text-xl font-medium mb-4'>Commission:</h2>
				<p className='text-gray-700'>
					The commission is calculated on each item as a fixed
					percentage based on the eventual hammer price at auction.
				</p>
				<p className='text-gray-700 mt-4'>
					Our commission is 10% of the Winning Bid amount, which is
					deducted from the payment made by the Buyer.
				</p>
			</section>

			{/* Agreement */}
			<section className='mb-12'>
				<h2 className='text-xl font-medium mb-4'>
					Consignment Agreement for Confirmation to Sell:
				</h2>
				<p className='text-gray-700'>
					Before you sell your artwork with Alturaash, you will need
					to sign a Consignment Agreement. This is the contract that
					confirms the services, outlines the fee structure and the
					terms and conditions of sale and fees for services such as
					insurance, framing, restoration, and shipping between you
					and Alturaash.
				</p>
			</section>

			{/* Shipping */}
			<section className='mb-12'>
				<h2 className='text-xl font-medium mb-4'>Shipping:</h2>
				<p className='text-gray-700'>
					Once you have signed your Consignment Agreement, you should
					arrange for the item to be delivered to our business seat in
					the United Arab Emirates. Alturaash can assist with this, or
					we can put you in contact with trusted local shippers or you
					may use your own shipper.
				</p>
				<p className='text-gray-700 mt-4 italic'>
					Please do not send artworks to us for review for the initial
					process, only the images of artworks and documents are
					sufficient.
				</p>
			</section>

			{/* Contact */}
			<section className='mb-12'>
				<h2 className='text-xl font-medium mb-4'>Contact:</h2>
				<p className='text-gray-700'>
					To Register with us or if you can't find what you are
					looking for or have any questions or require specific
					assistance, contact us via email at auction@alturaashart.com
				</p>
			</section>

			{/* Disclaimer */}
			<section>
				<p className='text-gray-600 text-sm'>
					Please also note that Alturaash does not authenticate
					objects or artworks submitted, and does not accept
					liability. Alturaash gives no representation, warranty, or
					guarantee with respect to an item's origin, provenance,
					attribution, condition, date, age, or authenticity.
				</p>
			</section>
		</div>
	);
};

export default ConsigningPage;
