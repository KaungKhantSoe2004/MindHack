import { FaCalendar, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Mind Hack Workshop 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Tech Hub, Silicon Valley",
      description:
        "Join us for an intensive workshop on cognitive enhancement and mental performance optimization.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Networking Mixer",
      date: "March 20, 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Downtown Convention Center",
      description:
        "Connect with like-minded individuals and industry professionals in a relaxed setting.",
      image:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Innovation Summit",
      date: "April 5, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Innovation Center",
      description:
        "Explore the latest trends in technology and innovation with expert speakers.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
    },
  ];

  return (
    <div>
      {/* Banner */}
      <section className="relative h-64 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=300&fit=crop)",
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Events</h1>
          <p className="text-xl mt-2">Discover upcoming Mind Hack events</p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <div className="flex items-center">
                        <FaCalendar className="mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
