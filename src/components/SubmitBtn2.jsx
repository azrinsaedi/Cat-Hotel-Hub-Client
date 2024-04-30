import { useNavigation } from "react-router-dom";
const SubmitBtn2 = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Registering" : "Register"}
      <i className="icon-arrow-top-right ml-10"></i>
    </button>
  );
};
export default SubmitBtn2;
