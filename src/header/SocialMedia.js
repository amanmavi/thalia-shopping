import React from "react";

const socials = [
  {
    id: "blog",
    socialLink: "https://amanmavi.com/",
    logo: "/socialLogos/blog.png",
  },
  {
    id: "twitter",
    socialLink: "https://twitter.com/AmanTheCodeLife",
    logo: "/socialLogos/twitter.png",
  },
  {
    id: "instagram",
    socialLink: "https://www.instagram.com/amanthecodelife/?hl=en",
    logo: "/socialLogos/instagram.png",
  },
  {
    id: "gmail",
    socialLink: "https://mail.google.com/mail/u/0/#inbox",
    logo: "/socialLogos/gmail.png",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex w-24  gap-2">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.socialLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={social.logo} alt="logo" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
