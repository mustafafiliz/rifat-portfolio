"use client";

import { FormEvent, useState, type HTMLAttributes } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { workTypes } from "@/lib/data";
import { siteConfig } from "@/lib/site";

type FieldErrors = Partial<Record<"name" | "contact" | "workType" | "message", string>>;

const initialValues = {
  name: "",
  phone: "",
  email: "",
  workType: "",
  message: "",
};

export function Contact() {
  const [values, setValues] = useState(initialValues);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );

  function validate() {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = "Bitte geben Sie Ihren Namen an.";
    if (!values.phone.trim() && !values.email.trim()) {
      next.contact = "Bitte Telefonnummer oder E-Mail angeben.";
    } else if (
      values.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
    ) {
      next.contact = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
    }
    if (!values.workType) next.workType = "Bitte wählen Sie die Art der Arbeit.";
    if (values.message.trim().length < 10) {
      next.message = "Bitte beschreiben Sie Ihr Vorhaben etwas genauer.";
    }
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");

    try {
      if (siteConfig.formEndpoint) {
        const data = new FormData();
        Object.entries(values).forEach(([key, value]) => data.append(key, value));
        files.forEach((file) => data.append("photos", file));
        const response = await fetch(siteConfig.formEndpoint, {
          method: "POST",
          body: data,
        });
        if (!response.ok) throw new Error("Form submit failed");
      } else if (siteConfig.email.available) {
        const subject = encodeURIComponent(`Angebot anfragen: ${values.workType}`);
        const body = encodeURIComponent(
          [
            `Name: ${values.name}`,
            `Telefon: ${values.phone || "–"}`,
            `E-Mail: ${values.email || "–"}`,
            `Art der Arbeit: ${values.workType}`,
            files.length ? `Fotos: ${files.map((file) => file.name).join(", ")}` : "",
            "",
            "Nachricht:",
            values.message,
          ]
            .filter((line) => line !== "")
            .join("\n"),
        );
        window.location.href = `mailto:${siteConfig.email.display}?subject=${subject}&body=${body}`;
      }

      setStatus("success");
      setValues(initialValues);
      setFiles([]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="kontakt"
      className="scroll-mt-24 bg-cream-100 py-20 md:py-28"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <Reveal className="order-2 lg:order-1">
            <div className="h-full rounded-md bg-forest-900 p-8 text-cream-50 md:p-10">
              <SectionHeading
                eyebrow="Kontakt"
                title="Kostenloses Angebot anfragen"
                description="Beschreiben Sie Ihr Vorhaben. Wir melden uns und klären die nächsten Schritte – bei Bedarf mit einer Besichtigung vor Ort."
                tone="dark"
              />

              <ul className="mt-10 space-y-6">
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/8">
                    <PhoneIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-300">
                      Telefon
                    </p>
                    {siteConfig.phone.available ? (
                      <a
                        href={siteConfig.phone.href}
                        className="mt-1 block text-lg font-medium hover:text-cream-200"
                      >
                        {siteConfig.phone.display}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg font-medium text-cream-100/80">
                        {siteConfig.phone.display}
                      </p>
                    )}
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/8">
                    <MailIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-300">
                      E-Mail
                    </p>
                    {siteConfig.email.available ? (
                      <a
                        href={siteConfig.email.href}
                        className="mt-1 block text-lg font-medium hover:text-cream-200"
                      >
                        {siteConfig.email.display}
                      </a>
                    ) : (
                      <p className="mt-1 text-lg font-medium text-cream-100/80">
                        {siteConfig.email.display}
                      </p>
                    )}
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/8">
                    <PinIcon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-300">
                      Arbeitsgebiet
                    </p>
                    <p className="mt-1 text-lg font-medium text-cream-100/80">
                      {siteConfig.serviceArea.display}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80} className="order-1 lg:order-2">
            <div className="rounded-md border border-cream-200 bg-white p-6 shadow-[0_18px_50px_rgba(28,25,22,0.06)] sm:p-8 md:p-10">
              {status === "success" ? (
                <div className="flex min-h-[28rem] flex-col justify-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-700">
                    Anfrage erhalten
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-medium text-ink">
                    Vielen Dank für Ihre Nachricht.
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-ink-muted">
                    Wir setzen uns so bald wie möglich mit Ihnen in Verbindung.
                    Wenn Sie Fotos ausgewählt haben, halten Sie diese bitte für
                    das Gespräch oder eine spätere E-Mail bereit.
                  </p>
                  <Button
                    className="mt-8 self-start"
                    onClick={() => setStatus("idle")}
                  >
                    Weitere Anfrage stellen
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name"
                      name="name"
                      autoComplete="name"
                      value={values.name}
                      error={errors.name}
                      onChange={(value) => {
                        setValues((prev) => ({ ...prev, name: value }));
                        setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                    />
                    <Field
                      label="Telefonnummer"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      inputMode="tel"
                      value={values.phone}
                      onChange={(value) => {
                        setValues((prev) => ({ ...prev, phone: value }));
                        setErrors((prev) => ({ ...prev, contact: undefined }));
                      }}
                    />
                  </div>
                  <Field
                    label="E-Mail"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    error={errors.contact}
                    onChange={(value) => {
                      setValues((prev) => ({ ...prev, email: value }));
                      setErrors((prev) => ({ ...prev, contact: undefined }));
                    }}
                  />
                  <div>
                    <label htmlFor="workType" className="label">
                      Art der Arbeit
                    </label>
                    <select
                      id="workType"
                      name="workType"
                      value={values.workType}
                      onChange={(event) =>
                        setValues((prev) => ({ ...prev, workType: event.target.value }))
                      }
                      aria-invalid={Boolean(errors.workType)}
                      className="input"
                    >
                      <option value="">Bitte auswählen</option>
                      {workTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.workType ? (
                      <p className="mt-1.5 text-sm text-red-800">{errors.workType}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="message" className="label">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={(event) =>
                        setValues((prev) => ({ ...prev, message: event.target.value }))
                      }
                      aria-invalid={Boolean(errors.message)}
                      placeholder="z. B. Fläche, gewünschtes Material, Zustand der bestehenden Fläche …"
                      className="input min-h-[8.5rem] resize-y"
                    />
                    {errors.message ? (
                      <p className="mt-1.5 text-sm text-red-800">{errors.message}</p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="photos" className="label">
                      Fotos Ihres Projekts{" "}
                      <span className="font-normal text-ink-subtle">(optional)</span>
                    </label>
                    <input
                      id="photos"
                      name="photos"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(event) =>
                        setFiles(Array.from(event.target.files ?? []))
                      }
                      className="block w-full text-sm text-ink-muted file:mr-4 file:rounded-md file:border-0 file:bg-cream-100 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-forest-800 hover:file:bg-cream-200"
                    />
                    {files.length > 0 ? (
                      <p className="mt-2 text-sm text-ink-muted">
                        {files.map((file) => file.name).join(", ")}
                      </p>
                    ) : (
                      <p className="mt-2 text-sm text-ink-subtle">
                        Bilder vom Grundstück oder der bestehenden Fläche helfen
                        bei der Einschätzung.
                      </p>
                    )}
                  </div>

                  {status === "error" ? (
                    <p className="text-sm text-red-800">
                      Die Anfrage konnte nicht gesendet werden. Bitte versuchen
                      Sie es erneut oder nutzen Sie Telefon bzw. E-Mail.
                    </p>
                  ) : null}

                  <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
                    {status === "sending" ? "Wird gesendet …" : "Angebot anfragen"}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        className="input"
      />
      {error ? <p className="mt-1.5 text-sm text-red-800">{error}</p> : null}
    </div>
  );
}
