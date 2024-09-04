import AppBar from "../components/app-navbar/app-navbar";

const contacts = [
  { id: 1, name: "Admin", value: "cg@graceave.org" },
];

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About/Announcements", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: true },
];

function Contact() { 
  
  return (
    <>
      <AppBar navigation={navigation} />
      <section className="container mx-auto px-8 py-8 lg:py-40">
        <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">
          Contacts
        </h2>
        <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
          Here you can find the email/s of our administrators.
        </p>

          {contacts.map((contact) => (
          <div
            key={contact.id}
            className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl col-span-4 m-10"
          >
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className=""
                  src={`${contact.name}.jpg`}
                  alt="Profile image"
                />
              </div>

              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Contact for
                </div>
                <span
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {contact.name}
                </span>
                <p className="mt-2 text-slate-500">{contact.value}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Contact;

