
import { Calendar, GalleryHorizontal, Info, Phone } from "lucide-react";

export default function OverTheTop() {
  return (
    <div className="p-6 space-y-10 max-w-5xl mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Over The Top Events Place</h1>
        <p className="text-lg text-gray-500">
          A 24/7 vibrant venue for music, food, and unforgettable moments — located in the heart of Angono, Rizal.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-xl">Book Now</button>
      </section>

      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p>
            Over The Top is a premier events space in Angono, Rizal, offering nightly live music, a wide variety of food
            stalls, and a dynamic experience for guests of all ages. Whether you're here to enjoy a band, rent a venue,
            or celebrate a special event, we’ve got you covered.
          </p>
        </div>
        <img
          src="/images/venue-night.jpg"
          alt="Venue at night"
          className="rounded-2xl shadow-md"
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-xl p-4 space-y-2">
            <Info className="w-6 h-6" />
            <h3 className="text-lg font-medium">Live Music Every Night</h3>
            <p className="text-sm text-gray-500">
              Enjoy a variety of musical performances from local bands Tuesday to Sunday.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4 space-y-2">
            <GalleryHorizontal className="w-6 h-6" />
            <h3 className="text-lg font-medium">Food & Drinks</h3>
            <p className="text-sm text-gray-500">
              Over 19 food stalls offering a fusion of Filipino, Japanese, and Chinese dishes.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4 space-y-2">
            <Calendar className="w-6 h-6" />
            <h3 className="text-lg font-medium">Private Events</h3>
            <p className="text-sm text-gray-500">
              Host birthdays, reunions, or corporate events in our customizable space.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 rounded-2xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <div className="flex flex-col gap-2">
          <p><Phone className="inline w-4 h-4 mr-2" /> <strong>Phone:</strong> 0966 173 7916</p>
          <p><strong>Location:</strong> Angono, Rizal</p>
          <p><strong>Open:</strong> 24 hours daily</p>
        </div>
        <button className="border border-black px-4 py-2 rounded-xl">Send Inquiry</button>
      </section>
    </div>
  );
}
