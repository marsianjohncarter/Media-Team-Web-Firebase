/* eslint-disable react/prop-types */
import { Component } from "react";

class PagePost extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, content, id } = this.props;
    return (
      <a href={`/about/${id}`}>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl">
          <img
            src={`/${id}.jpg`}
            alt="bg"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="p-6 relative flex flex-col justify-end">
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
              {title}
            </h4>
            <p className="block antialiased font-sans text-base font-light leading-relaxed text-white my-2 font-normal">
              {content}
            </p>
          </div>
        </div>
      </a>
    );
  }
}

export default PagePost;