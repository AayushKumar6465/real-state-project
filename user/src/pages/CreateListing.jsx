import React from "react";

export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto bg-gradient-to-r from via-pink-200 to-cyan-300 hover:shadow-2xl bg-center h-screen ">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1 peer-hover:*">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="address"
            className="border p-3 rounded-lg"
            id="address"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Parking Spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Fursnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="p-3 border-cyan-300 rounded-2xl"
              />
              <span>Bedroom</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathrooms"
                min="1"
                max="10"
                required
                className="p-3"
              />
              <span>Bathroom</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="regular_prices"
                min="1"
                max="10"
                required
                className="p-3 rounded-2xl"
              />
              <div className="">
                <span>Regular Prices</span>
                <span className="text-xs">(₹/month)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="discount_price"
                min="1"
                max="10"
                required
                className="p-3 rounded-2xl"
              />
              <div className="">
                <span>Discounted Prices</span>
                <br />
                <span className="text-xs">(₹/month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-orange-950 ml-5">
              The first image will be the cover(max 6)
            </span>
          </p>
          <div className="flex gap-4 ">
            <input
              className="p-3 border border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="images/*"
              multiple
            />
            <button
              className="p-3 text-orange-800 text-lg border-orange-800
              rounded uppercase hover:shadow-lg disabled:opacity-80"
            >
              Upload
            </button>
          </div>
          <button
            className="p-3 bg-slate-700 text-white rounded-lg uppercase
            hover:shadow-lg disabled:opacity-80"
          >
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
}