import './index.css'
import AppBar from "../components/app-navbar/app-navbar";


const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About/Announcements", href: "/about", current: true },
  { name: "Contact", href: "/contact", current: false },
];

function About() {
  return (
    <>
    <AppBar navigation={navigation}/>
      {/* component */}
      <section className="container mx-auto px-8 py-8 lg:py-40">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">
          Announcements
        </h2>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
          Read about our latest news and milestones.
        </p>
        {/* <a href="https://www.material-tailwind.com/" target="_blank">
          Generated with <b>Magic AI Blocks</b> by Creative Tim
        </a> */}
        .
        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
            <img
              src="discord-announcment.jpg"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                IMPORATANT - Discord Server
              </h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
                On the Media Team meeting, we have decided to use <a href='https://discord.com/'><u>DISCORD</u></a> as our chat. To join the server, please contact one of the supervisers
              </p>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
            <img
              src="./media-team-pizza-party.jpg"
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Media Team Pizza Party (March 30, 2024)
              </h4> 
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
                We are sad to admit that only <strong>6 MEMBERS</strong> of the media team participated. It was a fun and yummy time. I hope that everyone will be able to come next time.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
            <img
              src="./video-team-room.jpg" 
              alt="bg"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className="p-6 relative flex flex-col justify-end">
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                Video Room (March 24, 2024)
              </h4>
              <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
                We are proud to announce that our Video Room has been finally been painted and a new carpet put in. Based on insider information, the video part of the media team will move in in about a month.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default About;