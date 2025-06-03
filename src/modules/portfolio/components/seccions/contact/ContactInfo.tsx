"use client";
type ContactInfoProps = {
  email: string;
  phone?: string;
  location?: string;
};

export const ContactInfo = ({ email, phone, location }: ContactInfoProps) => (
  <div className="text-sm space-y-2 text-gray-700">
    <p>
      Email:{" "}
      <a href={`mailto:${email}`} className="text-blue-600">
        {email}
      </a>
    </p>
    {phone && <p>Teléfono: {phone}</p>}
    {location && <p>Ubicación: {location}</p>}
  </div>
);
