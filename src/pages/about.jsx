/* eslint-disable react/prop-types */
import "./index.css";
import AppBar from "../components/app-navbar/app-navbar";
import { Component } from "react";
import PagePost from "../components/about-page-post/about-page-post";

/**
 * The navigation links for the About page.
 * @constant
 * @type {Array}
 */
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About/Announcements", href: "/about", current: true },
  { name: "Contact", href: "/contact", current: false },
];

/**
 * The About page component.
 * @extends {Component}
 */
class About extends Component {
  /**
   * The constructor.
   * @param {Object} props The props.
   */
  constructor(props) {
    super(props);
  }

  /**
   * Renders the About page.
   * @return {JSX.Element} The JSX element.
   */
  render() {
    const { announcements } = this.props;

    return (
      <>
        <AppBar navigation={navigation} />
        <section className="container mx-auto px-8 py-8 lg:py-40">
          <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 !text-3xl !leading-snug lg:!text-4xl">
            Announcements
          </h2>
          <p className="block antialiased font-sans text-xl  leading-relaxed text-inherit mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
            Read about our latest news and milestones.
          </p>
          .
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {announcements.map((item) => (
              <a key={item.id} href={`/about/${item.id}`}>
                <div className="transition ease-in-out hover:scale-105 hover:shadow-indigo-500/40 relative flex flex-col bg-clip-border  bg-transparent text-gray-700 shadow-lg grid min-h-[30rem] items-end overflow-hidden rounded-xl">
                  <img
                    src={`/${item.id}-post-image.jpg`}
                    alt="bg"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/70" />
                  <div className="p-6 relative flex flex-col justify-end">
                    <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                      {item.title}
                    </h4>
                    <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
                      {item.shortDesc}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default About;

