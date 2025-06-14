import axios from "axios";
import { toast } from "react-toastify";

const isEmailValid = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

const checkName = (name) => {
  const min = 3,
    max = 25;
  if (!isRequired(name)) return "Name cannot be blank.";
  else if (!isBetween(name.length, min, max))
    return `Name must be between ${min} and ${max} characters.`;
  return true;
};
const checkEmail = (email) => {
  if (!isRequired(email)) return "Email cannot be blank.";
  else if (!isEmailValid(email)) return "Email is not valid.";
  return true;
};

const checkMessage = (message) => {
  const min = 3,
    max = 1000;
  if (!isRequired(message)) return "Message cannot be blank.";
  else if (!isBetween(message.length, min, max))
    return `Message must be between ${min} and ${max} characters.`;
  return true;
};

const validateForm = async (
  formData,
  setFormData,
  setErrData,
  initialFormData,
  initialErrData
) => {
  const validName = checkName(formData.name.trim());
  const validEmail = checkEmail(formData.email.trim());
  const validMessage = checkMessage(formData.message.trim());
  if (typeof validName !== "boolean")
    setErrData((prevErrData) => ({ ...prevErrData, nameError: validName }));
  else setErrData((prevErrData) => ({ ...prevErrData, nameError: "" }));
  if (typeof validEmail !== "boolean")
    setErrData((prevErrData) => ({ ...prevErrData, emailError: validEmail }));
  else setErrData((prevErrData) => ({ ...prevErrData, emailError: "" }));
  if (typeof validMessage !== "boolean")
    setErrData((prevErrData) => ({
      ...prevErrData,
      messageError: validMessage,
    }));
  else setErrData((prevErrData) => ({ ...prevErrData, messageError: "" }));
  if (
    typeof validName === "boolean" &&
    typeof validEmail === "boolean" &&
    typeof validMessage === "boolean"
  ) {
    const submitionFormData = new FormData();
    submitionFormData.append("name", formData.name.trim());
    submitionFormData.append("email", formData.email.trim());
    submitionFormData.append("message", formData.message.trim());
    submitionFormData.append("_subject", "New submission!");
    submitionFormData.append("_template", "table");
    submitionFormData.append("submit", "submit");
    submitionFormData.append("_captcha", "false");

    try {
      const response = await axios.post(
        import.meta.env.VITE_GETFORM_URL,
        submitionFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 3000, 
        });
      } else {
         toast.error("Submission failed!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, 
        })
         toast.error("Try again later !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, 
        })
      }
      setFormData(initialFormData);
      setErrData(initialErrData);
    } catch (error) {
      console.error("Submission error:", error);
    }
  }
};

export { validateForm };
