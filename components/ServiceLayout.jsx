import Accordian from "./Accordian";
import Card from "./Card";

export default function ServiceLayout(props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 ">
      <div className="border-b border-gray-200 pb-5">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          {props.header}
        </h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">{props.message}</p>
      </div>
      <Accordian />
      {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        <Card title="Spa Facial" body="$85" button="come get a facial bitch" />
        <Card
          title="Purifying Facial"
          body="$85"
          button="come get a facial bitch"
        />
        <Card
          title="Firming Facial"
          body="$150"
          button="come get a facial bitch"
        />
        <Card
          title="Back Facial"
          body="$125"
          button="come get a facial bitch"
        />
        <Card
          title="Express Facial"
          body="$65"
          button="come get a facial bitch"
        />
        <Card title="Teen Facial" body="$65" button="come get a facial bitch" />
        <Card
          title="Dermaplane Facial"
          body="$120"
          button="come get a facial bitch"
        />
        <Card
          title="Jelly Facial"
          body="$160"
          button="come get a facial bitch"
        />
      </div> */}
    </div>
  );
}
