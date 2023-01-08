import { PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function StickyHeader() {
  const [open, setOpen] = useState(true);
  if (!open) {
    return;
  }

  return (
    <>
      {/*
        Make sure you add some bottom padding to pages that include a sticky banner like this to prevent
        your content from being obscured when the user scrolls to the bottom of the page.
      */}
      <div className="fixed inset-x-0 bottom-0 z-20">
        <div className="bg-rose-300">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg bg-rose-300 p-2">
                  <PhoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span className="md:hidden">
                    Call us to book an appointment today!
                  </span>
                  <span className="hidden md:inline">
                    Call us to book an appointment today!
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="tel:9132588242"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-red-50"
                >
                  {"(913) 258-8242"}
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="-mr-1 flex rounded-md p-2 hover:bg-black focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default StickyHeader;
