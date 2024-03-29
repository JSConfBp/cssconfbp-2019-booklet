import React from "react";
import { graphql } from "gatsby";
import classnames from "classnames";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./speakers.scss";

import SpeakerImage from "../components/SpeakerImage";

function SpeakersContentTemplate({ data: { mdx } }) {
  const {
    title,
    name,
    bio,
    image,
    color,
    from,
    link,
    twitter,
    github,
    company,
    company_url
  } = mdx.frontmatter;

  return (
    <>
      <svg
        className="triangle"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 262 830"
      >
        <path d="M262 830L1 0h261.8l-.8 830z" />
      </svg>
      <Header />
      <main className="site_content">
        <Link className="site_content_back" to="/">
          ← Back
        </Link>
        <section className="talk_summary">
          <div className="talk_summary_lead">
            <h3 className="talk_summary_name">{name}</h3>
            <h2 className="talk_summary_title">{title}</h2>
          </div>
          <div>
            <div className="talk_summary_profile">
              <div className="talk_summary_wrapper">
                <SpeakerImage image={image} color={color} />
              </div>

              <ul className="talk_summary_links">
                {from && (
                  <li className="talk_summary_links_item talk_summary_links_item_from">
                    <a
                      href={`https://www.google.com/maps/search/${from}`}
                      rel="noopener"
                    >
                      {from}
                    </a>
                  </li>
                )}
                {twitter &&
                  twitter.map(handle => (
                    <li
                      className="talk_summary_links_item talk_summary_links_item_twitter"
                      key={handle}
                    >
                      <a href={`https://twitter.com/${handle}`} rel="noopener">
                        {`@${handle}`}
                      </a>
                    </li>
                  ))}
                {github && (
                  <li className="talk_summary_links_item talk_summary_links_item_github">
                    <a href={`https://github.com/${github}`} rel="noopener">
                      {github}
                    </a>
                  </li>
                )}
                {company && (
                  <li className="talk_summary_links_item talk_summary_links_item_company">
                    <a href={company_url} rel="noopener">
                      {company}
                    </a>
                  </li>
                )}
                {link && (
                  <li className="talk_summary_links_item talk_summary_links_item_company">
                    <a href={link} rel="noopener">
                      Website
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div>
            <div className="talk_summary_text">
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>

            <div className="talk_summary_description">{bio}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SpeakersContentTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        name
        title
        image
        color
        bio
        from
        twitter
        github
        company
        company_url
        socialCard
      }
    }
  }
`;
