import { FaPlay } from "react-icons/fa";

const History = () => {
  return (
    <div>
      {/* Banner */}
      <section className="relative h-64 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=300&fit=crop)",
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">History</h1>
          <p className="text-xl mt-2">Our journey through the years</p>
        </div>
      </section>

      {/* Showcase Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Showcase Video
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop"
                alt="Showcase Video Thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all">
                  <FaPlay className="text-gray-900 text-2xl ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 2022 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=250&fit=crop"
                alt="Mind Hack 2022"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Lorem ipsum dolor 2022
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Sed ut perspiciatis unde omnis
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet.
                  </p>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=250&fit=crop"
                alt="Mind Hack 2023"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Lorem ipsum dolor 2023
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Sed ut perspiciatis unde omnis
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
