"use client";
type ContactFormProps = {
  onSubmit: (form: { name: string; email: string; message: string }) => void;
};

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    onSubmit({
      name: form.get("name") as string,
      email: form.get("email") as string,
      message: form.get("message") as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        name="name"
        placeholder="Nombre"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        name="email"
        placeholder="Correo"
        className="w-full border px-3 py-2 rounded"
        type="email"
        required
      />
      <textarea
        name="message"
        placeholder="Mensaje"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Enviar
      </button>
    </form>
  );
};
