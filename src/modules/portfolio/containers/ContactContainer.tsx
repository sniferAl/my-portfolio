"use client";
import { ContactForm } from "../components/seccions/contact/ContactForm";
import { ContactInfo } from "../components/seccions/contact/ContactInfo";

export const ContactContainer = () => {
  const handleSubmit = (form: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log("Formulario enviado:", form);
    // toast.success("¡Mensaje enviado correctamente!");
  };

  return (
    <section className="max-w-3xl mx-auto space-y-8 px-4 py-10">
      <h2 className="text-2xl font-bold">Contáctame</h2>
      <ContactForm onSubmit={handleSubmit} />
      <ContactInfo
        email="royer.dev@example.com"
        phone="123-456-789"
        location="Perú"
      />
    </section>
  );
};
