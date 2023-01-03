export default function ServiceLayout(props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ">
      <div className="border-b border-gray-200 pb-5">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {props.header}
        </h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">{props.message}</p>
      </div>
    </div>
  );
}
