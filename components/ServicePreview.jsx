import Link from "next/link";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const categories = [
  {
    name: "Facials",
    href: "/services",
    imageSrc:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Person getting waxed",
    description:
      "A facial is a family of skin care treatments for the face, including steam, exfoliation, extraction, creams, lotions, facial masks, peels, and massage.",
  },
  {
    name: "Massages",
    href: "/services",
    imageSrc:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    imageAlt:
      "Person getting a facial treatment with a natural clay mask on their face.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat commodo tortor, ac efficitur nisl blandit id. Fusce eget lacus quis quam maximus viverra vel vel erat. Fusce convallis tortor vitae orci tristique sollicitudin.",
  },
  {
    name: "Laser Hair Removal",
    href: "/services",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1661505071420-1f10ce4108e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    imageAlt: "Person getting botox injections",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat commodo tortor, ac efficitur nisl blandit id. Fusce eget lacus quis quam maximus viverra vel vel erat. Fusce convallis tortor vitae orci tristique sollicitudin. ",
  },
];

export default function ServicePreview() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          A Glimpse of Our Services
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Here is a list of some of our services. We offer a wide range of
          services to meet your needs.
        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group block"
            >
              <div
                aria-hidden="true"
                className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
              >
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
