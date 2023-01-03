import { StarIcon } from "@heroicons/react/20/solid";

const reviews = {
  average: 5,
  totalCount: 10,
  counts: [
    { rating: 5, count: 10 },
    { rating: 4, count: 0 },
    { rating: 3, count: 0 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>Kelsey is amazing. I started going to her for facials before my wedding because of a referral. Now like all of my friends go to Kelsey! She’s friendly, easy to talk to, and totally changed my skincare game. Not only does she give an amazing facial (whichever you choose- and I suggest trying them all!) but she has some awesome products to pick from.</p>
      `,
      author: "Carolyn Beck",
      avatarSrc:
        "https://lh3.googleusercontent.com/a-/AD5-WCnnxF-jAyZZjoHvcsvGKt7aSVQDn-pBoNvWlO5_=w120-h120-p-rp-mo-br100",
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>Laura was my Facial Queen Therapist and she did a fantastic job . She made sure I was very well taking care of. The room was beautiful and the other staff was amazing. I believe she was the owner, she was very kind and friendly.</p>
      `,
      author: "Lashanda Wehrhah",
      avatarSrc:
        "https://lh3.googleusercontent.com/a-/AD5-WCkC5csF2NZSGCA7Q3OOvBoCanf4f_GBsQTr_Zgm6A=w120-h120-p-rp-mo-ba3-br100",
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>Alexis gave me a WONDERFUL facial. It was incredibly relaxing and my skin feels great! I’m looking forward to my next visit!</p>
      `,
      author: "Ashley Ball",
      avatarSrc:
        "https://lh3.googleusercontent.com/a/AEdFTp4GeRFtoB3Y0-3FZh_VNLz4W9ge86mHos_VhnPA=w120-h120-p-rp-mo-br100",
    },
    // More reviews...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Reviews() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-32 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customer Reviews
          </h2>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? "text-yellow-400"
                        : "text-gray-300",
                      "flex-shrink-0 h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">
              Based on {reviews.totalCount} reviews
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-gray-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div
                      aria-hidden="true"
                      className="ml-1 flex flex-1 items-center"
                    >
                      <StarIcon
                        className={classNames(
                          count.count > 0 ? "text-yellow-400" : "text-gray-300",
                          "flex-shrink-0 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900">
              Share your thoughts
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              If you’ve used this product, share your thoughts with other
              customers
            </p>

            <a
              href="https://www.google.com/search?q=radiantskinandbeauty&oq=radiantskinandbeauty&aqs=chrome.0.69i59j46i13i175i199i512j0i390l2j69i60l4.4240j1j1&sourceid=chrome&ie=UTF-8#lrd=0x87c0c2128067582b:0xa51435878d45be2e,1,,,"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
            >
              Write a review
            </a>
          </div>
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent reviews</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-gray-200">
              {reviews.featured.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <img
                      src={review.avatarSrc}
                      alt={`${review.author}.`}
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-sm font-bold text-gray-900">
                        {review.author}
                      </h4>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating
                                ? "text-yellow-400"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-base italic text-gray-600"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
