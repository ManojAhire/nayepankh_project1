export default function Hero() {
  return (
    <section id="home">
      <div
        className="
        h-[90vh]
        bg-[url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2800,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-01-31-at-9.40.45-pm-dWxpDb2pNbCaxERZ.jpeg')]
        bg-cover
        bg-center
        relative
        overflow-hidden
      "
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-2xl ml-16">

            <p className="text-white font-bold text-xl mb-8 py-0">
              UP GOVERNMENT, 80G & 12A Registered NGO
            </p>

            <h1 className="text-6xl text-white font-bold leading-tight mb-8 max-w-2xl">
              It's that easy to
              <br />
              bring a Smile on
              <br />
              Their Faces
            </h1>

            <p className="text-white text-xl leading-relaxed max-w-lg">
              We don't ask for much, just help us with what you can—
              Be it Money, Skill or Your Time.
            </p>
            <div className="py-8"> <a href="#volunteer" ><button className="text-black bg-white h-15 px-4 py-2 hover:bg-orange-400 hover:text-white transition-all duration-300 px-6 mx-8 text-sm"> Join Us</button></a>  <a href="#donate" ><button className="text-black bg-white h-15 px-4 py-2 hover:bg-orange-400 hover:text-white transition-all duration-300 relative mx-3 text-sm" >Donate Now</button></a></div>
            
          </div>
        </div>
      </div>
      <div className="bg-[#1d1e20]"> {/* Removed py-24 so the dark background perfectly matches the 750px height */}
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-8"> {/* Slightly reduced gap to match original spacing */}

    {/* Image */}
    <div>
      <img
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1059,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.03-am-YBgL64ZLPPI03WXe.jpeg"
        alt="Children smiling"
        className="w-full h-[750px] object-cover"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col h-[750px] py-2"> 

      {/* Increased tracking to [12px] to match the widely spaced "A B O U T  U S" */}
      <p className="text-gray-300 uppercase tracking-[12px] text-sm font-medium mb-6">
        About Us
      </p>

      {/* Tighter line-height (leading-[1.1]) to match the massive, compact heading */}
      <h1 className="text-white text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
        Think global,
        <br />
        Act local.
      </h1>

      {/* Stats - Margins tightened slightly to ensure everything fits inside 750px */}
      

      <p className="text-gray-300 text-lg leading-8 pr-4">
        NayePankh Foundation is a non-governmental organisation
        committed to creating positive social change through
        education, healthcare, awareness campaigns, relief work,
        and community development. We believe that service to
        mankind is the highest form of humanity and that together,
        small actions can create lasting impact.
      </p>

      {/* mt-auto pushes this to the bottom edge. Gap reduced to 4. */}
      <div className="flex gap-4 mt-auto">
        <a href="/about">
          {/* Buttons updated to exactly match original: chunky padding, smaller bold text, wider letter spacing */}
          <button className="bg-white text-black text-sm px-10 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 tracking-wider">
            LEARN MORE
          </button>
        </a>
        <a href="/certificates">
          <button className="bg-white text-black text-sm px-10 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 tracking-wider">
            OUR CERTIFICATES
          </button>
        </a>
      </div>

    </div>

  </div>
</div>

<div
  className="
    h-[90vh]
    bg-[url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.05-am-AzGEo7LOeZi2gn9v.jpeg')]
    bg-cover
    bg-center
    relative
    overflow-hidden
  "
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex items-center">
    <div className="max-w-7xl mx-auto w-full px-8">

      <p className="uppercase tracking-[10px] text-gray-300 text-sm font-medium mb-6">
        Our Impact
      </p>

      <h1 className="text-white text-6xl lg:text-7xl font-bold leading-[1.1] mb-16">
        Small changes,
        <br />
        Big differences.
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-12 mb-16">

        <div>
          <h2 className="text-orange-400 text-5xl font-bold mb-2">
            5000+
          </h2>
          <p className="text-white text-lg">
            Volunteers
          </p>
        </div>

        <div>
          <h2 className="text-orange-400 text-5xl font-bold mb-2">
            100+
          </h2>
          <p className="text-white text-lg">
            Events
          </p>
        </div>

        <div>
          <h2 className="text-orange-400 text-5xl font-bold mb-2">
            20,000+
          </h2>
          <p className="text-white text-lg">
            Lives Impacted
          </p>
        </div>

        <div>
          <h2 className="text-orange-400 text-5xl font-bold mb-2">
            15+
          </h2>
          <p className="text-white text-lg">
            Cities
          </p>
        </div>

        <div>
          <h2 className="text-orange-400 text-5xl font-bold mb-2">
            50+
          </h2>
          <p className="text-white text-lg">
            Communities
          </p>
        </div>

      </div>

      <a href="/impact">
        <button className="bg-white text-black text-sm px-10 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 tracking-wider">
          VIEW IMPACT REPORT
        </button>
      </a>

    </div>
  </div>
</div>
    </section>
  );
}
