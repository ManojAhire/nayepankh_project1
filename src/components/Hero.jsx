export default function Hero() {
  const news = [
    {
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600",
      title: "Food Distribution Drive",
    },
    {
      image:
        "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600",
      title: "Education Initiative",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
      title: "Community Welfare",
    },
  ];
  const missions = [
    {
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/nyomtatott-184780375-AVLW214Gz2IpXNn4.jpg",
      quote:
        "NayePankh Foundation promotes the culture of kindness and wants to instill the sense of giving back to society amongst modern youth.",
    },

    {
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/nyomtatott-184780375-dWxpDB9gXRuoxvrv.jpg",
      quote:
        "NayePankh Foundation has been working since 2021 for underprivileged communities in the fields of hunger, sanitation, health, education, awareness and rights.",
    },

    {
      image:
        "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YKbL494Mv8Ip3qgy/nyomtatott-184780375-mP4wg2o0j3Uv1ggM.jpg",
      quote:
        "NayePankh Foundation works with a vision to create a society where children can prosper to their complete potential and enjoy equality in its true essence.",
    },
  ];

  const programs = [
    {
      title: "Education",
      desc: "Empowering children through quality education, mentorship, and skill development initiatives.",
    },

    {
      title: "Healthcare",
      desc: "Health awareness campaigns, medical support, and community wellness programs.",
    },

    {
      title: "Women Empowerment",
      desc: "Creating opportunities through education, training, and social support.",
    },

    {
      title: "Environment",
      desc: "Tree plantation drives, cleanliness campaigns, and sustainability initiatives.",
    },

    {
      title: "Relief Work",
      desc: "Providing food, clothing, and emergency assistance to vulnerable communities.",
    },

    {
      title: "Youth Volunteering",
      desc: "Building a culture of kindness by encouraging young people to create positive change.",
    },
  ];
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
        <div className="absolute inset-0 bg-[rgb(38,32,30)]/40"></div>

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
            <div className="py-8"> <a href="/volunteer" ><button className="text-black bg-white h-15 px-4 py-2 hover:bg-orange-400 hover:text-white transition-all duration-300 px-6 mx-8 text-sm"> Join Us</button></a>  <a href="/contact" ><button className="text-black bg-white h-15 px-4 py-2 hover:bg-orange-400 hover:text-white transition-all duration-300 relative mx-3 text-sm" >Donate Now</button></a></div>
            
          </div>
        </div>
      </div>
  <div className="bg-[rgb(38,32,30)]"> 
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-8">

    {/* Image */}
    <div>
      <img
        src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=1059,fit=crop/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.03-am-YBgL64ZLPPI03WXe.jpeg"
        alt="Children smiling"
        className="w-full h-[750px] object-cover"
      />
    </div>

    {/* Content */}
    {/* 1. Changed to justify-center and removed h-[750px] so the text group centers naturally next to the image */}
    <div className="flex flex-col justify-center py-12"> 

      <p className="text-gray-300 uppercase tracking-[12px] text-sm font-medium mb-6">
        About Us
      </p>

      <h1 className="text-white text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
        Think global,
        <br />
        Act local.
      </h1>

      {/* 2. Added mb-10 here to create a nice, fixed gap between the paragraph and buttons */}
      <p className="text-gray-300 text-lg leading-8 pr-4 mb-10">
        NayePankh Foundation is a non-governmental organisation
        committed to creating positive social change through
        education, healthcare, awareness campaigns, relief work,
        and community development. We believe that service to
        mankind is the highest form of humanity and that together,
        small actions can create lasting impact.
      </p>

      {/* 3. Removed mt-auto so the buttons stay anchored nicely below the paragraph */}
      <div className="flex gap-4">
        <a href="/about">
          <button className="bg-white text-black text-sm px-10 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 tracking-wider">
            LEARN MORE
          </button>
        </a>
        <a href="/programs">
          <button className="bg-white text-black text-sm px-10 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 tracking-wider ">
            OUR PROGRAMS
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
  <div className="absolute inset-0 bg-[rgb(38,32,30)]/60"></div>

  {/* Content */}
  <div className="relative z-10 h-full flex items-center justify-center">
    
    {/* ADDED: flex flex-col items-center text-center to snap everything to the middle */}
    <div className="max-w-7xl mx-auto w-full px-8 flex flex-col items-center text-center">

      <p className="uppercase tracking-[10px] text-gray-300 text-sm font-medium mb-6">
        Our Impact
      </p>

      <h1 className="text-white text-6xl lg:text-7xl font-bold leading-[1.1] mb-16">
        Small changes,
        <br />
        Big differences.
      </h1>

      {/* CHANGED: Replaced 'grid' with flex wrapping so 5 items center perfectly across rows */}
      <div className="flex flex-wrap justify-center gap-x-20 gap-y-12 mb-16 max-w-5xl">

        {/* Added fixed widths (w-40) to keep the wrapping uniform and neat */}
        <div className="w-40">
          <h2 className="text-orange-400 text-5xl font-bold mb-2">
            5000+
          </h2>
          <p className="text-white text-lg">
            Volunteers
          </p>
        </div>

        <div className="w-40">
          <h2 className="text-orange-400 text-5xl font-bold mb-2">
            100+
          </h2>
          <p className="text-white text-lg">
            Events
          </p>
        </div>

        <div className="w-40">
          <h2 className="text-orange-400 text-5xl font-bold mb-2">
            20,000+
          </h2>
          <p className="text-white text-lg">
            Lives Impacted
          </p>
        </div>

        <div className="w-40">
          <h2 className="text-orange-400 text-5xl font-bold mb-2">
            15+
          </h2>
          <p className="text-white text-lg">
            Cities
          </p>
        </div>

        <div className="w-40">
          <h2 className="text-orange-400 text-5xl font-bold mb-2">
            50+
          </h2>
          <p className="text-white text-lg">
            Communities
          </p>
        </div>

      </div>

      <a href="/impact">
        {/* Ensured the button keeps that nice, sharp aesthetic from the previous fix */}
        <button className="bg-white text-black text-sm font-semibold px-10 py-4 hover:bg-orange-500 hover:text-white transition-all duration-300 tracking-wider">
          VIEW IMPACT REPORT
        </button>
      </a>

    </div>
  </div>
</div>

<div className="bg-[rgb(38,32,30)] py-24 flex justify-center">
  {/* Keeps your headings perfectly centered */}
  <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center w-full">
    
    <p className="uppercase tracking-[10px] text-white text-sm font-medium mb-6">
      Our Mission
    </p>
    
    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-20">
      Inspiring Change,<br/>
      One act of kindness at a time.
    </h1>
    
    {/* Removed the grid, so the images naturally fill the center space */}
    <div className="space-y-12 w-full max-w-4xl">
      {missions.map((item, index)=> (
        <div className="flex justify-center items-center" key={index}>
          <img 
            src={item.image}
            alt="missions"
            className="
              w-full
              h-auto
              object-cover
              grayscale
              shadow-lg
              /* No rounded classes, so they stay perfectly square/rectangular */
            "
          />
        </div>
      ))}
    </div>

  </div>
</div>
<div className="bg-[#1d1e20] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[10px] text-gray-300 text-sm mb-6">
          Our Programs
        </p>

        <h1 className="text-white text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
          Creating impact,
          <br />
          Changing lives.
        </h1>

        <p className="text-gray-300 text-lg leading-8 max-w-3xl mb-20">
          NayePankh Foundation works across multiple social initiatives
          focused on empowering communities and creating lasting change.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border border-gray-700">

          {programs.map((program) => (

            <div
              key={program.title}
              className="
                border
                border-gray-700
                p-10
                hover:bg-[#262729]
                transition-all
                duration-300
              "
            >

              <h2 className="text-white text-3xl font-bold mb-6">
                {program.title}
              </h2>

              <p className="text-gray-300 leading-8 mb-8">
                {program.desc}
              </p>

              <a
                href="/programs"
                className="
                  text-orange-400
                  uppercase
                  tracking-widest
                  text-sm
                  hover:text-orange-300
                "
              >
                Learn More →
              </a>

            </div>

          ))}

        </div>

        <div className="mt-16">

          <a href="/programs">

            <button
              className="
                bg-white
                text-black
                px-10
                py-4
                text-sm
                tracking-wider
                hover:bg-orange-500
                hover:text-white
                transition-all
                duration-300
              "
            >
              EXPLORE ALL PROGRAMS
            </button>

          </a>

        </div>

      </div>

    </div>
<section className="bg-[#1d1e20]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2">

        {/* Image */}
        <div>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=977,fit=crop/YKbL494Mv8Ip3qgy/1-YD0yJ4erqEIN3ZWV.jpeg"
            alt="NayePankh Team"
            className="w-full h-[750px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-10 lg:px-20 py-16">

          <p className="uppercase tracking-[12px] text-gray-300 text-sm mb-8">
            Join Our
          </p>

          <h2 className="text-6xl lg:text-7xl font-bold text-white mb-14">
            TEAM
          </h2>

          <p className="text-gray-300 text-lg leading-10 mb-12">
            Join our team and make a difference in the lives of those
            in need. At NayePankh Foundation, we are committed to
            creating positive change and empowering communities.
            By joining our team, you will have the opportunity to
            contribute your time, skills and ideas to help make a
            real impact.
            <br />
            <br />
            Whether you are passionate about education,
            healthcare, awareness drives, relief work or
            community development, there is a place for you
            on our team. Together, we can create lasting
            change and touch thousands of lives.
          </p>

          <div>
            <a href="/volunteer">
              <button className="bg-white text-black px-12 py-5 text-sm tracking-wider hover:bg-orange-500 hover:text-white transition-all duration-300">
                JOIN US
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>

    <section className="bg-[#f7f7f7] py-20">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="uppercase tracking-[10px] text-[#c96a2d] text-sm font-medium mb-6">
          Make a Difference
        </p>
        <h2 className="text-5xl lg:text-6xl font-bold text-[#1d1e20] mb-6">
          Be the reason someone smiles today.
        </h2>
        <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto mb-10">
          Your time, support, and kindness can create lasting change for children and communities across India.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/volunteer">
            <button className="bg-[#26201e] text-white px-10 py-4 text-sm tracking-wider hover:bg-orange-500 transition-all duration-300">
              VOLUNTEER NOW
            </button>
          </a>
          <a href="/contact">
            <button className="bg-white text-[#26201e] border border-[#26201e] px-10 py-4 text-sm tracking-wider hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300">
              CONTACT US
            </button>
          </a>
        </div>
      </div>
    </section>

    </section>
  );
}
