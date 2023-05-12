import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function loading() {
  return (
    <div className="my-8 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <FontAwesomeIcon icon={faSpinner} spin size="4x"/>
    </div>
  );
}
