import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import Toast from "../components/Toast";

function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [count, setCount] = useState(0);
  const maxLength = 500;

  const onSubmit = async (data) => {
    const response = await fetch("https://formspree.io/f/meooqjqv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (response.ok) {
      toast.success(json.message || "Message sent successfully!");
    } else {
      toast.error(json.message || "There was an error sending your message.");
    }
  };

  const handleCount = (e) => setCount(e.target.value.length);

  useEffect(() => {
    if (errors.Message) {
      setErrorMessage(errors.Message.message); // Show the error message
      const timer = setTimeout(() => {
        setErrorMessage(""); // Hide the error message after time
      }, 1000);
      return () => clearTimeout(timer); // Clean the timeout if the component is unmounted or error changes
    }
  }, [errors.Message]);
  
  return (
    <div>
      <h1>Contact.</h1>
      <section>
        <article>
          <p>
            I&apos;m open to job opportunities where I can apply my skills and
            make a meaningful impact.
          </p>
          <p>
            If you have a role that aligns with my skills, feel free to talk
            with me or contact me to{" "}
            <a href="mailto:nferrefe@gmail.com">nferrefe@gmail.com</a> !
          </p>
        </article>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("Name", { required: true })}
              placeholder="Name"
            />
            <input
              type="email"
              {...register("Email", { required: true })}
              placeholder="Email"
            />
            <div>
              <textarea
                {...register("Message", {
                  required: "Message is required",
                  minLength: {
                    value: 20,
                    message: "Message must be at least 20 characters",
                  },
                  maxLength: maxLength,
                })}
                placeholder="Message must be at least 20 characters"
                cols="30"
                rows="10"
                onChange={handleCount}
              ></textarea>
              <div>
                {count}/{maxLength}
              </div>
            </div>
            {errorMessage && <p>{errorMessage}</p>} {/* Show error message */}
            <button type="submit">Send Message</button>
            <Toast />
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
