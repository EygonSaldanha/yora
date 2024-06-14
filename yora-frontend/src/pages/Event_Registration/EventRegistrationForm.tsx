import React from "react";
import { useFormik } from "formik";

interface EventRegistrationFormProps {
  event: {
    id: string;
    title: string;
    date: string;
    maximumAttendees: number;
    attendeesAmount: number;
    details: string | null;
    location: string;
  };
  onRegister: (file: ArrayBuffer | null) => void;
}

export const EventRegistrationForm: React.FC<EventRegistrationFormProps> = ({
  event,
  onRegister,
}) => {
  const formik = useFormik({
    initialValues: {
      file: null,
    },
    onSubmit: async (values) => {
      if (values.file) {
        const file = values.file as File;
        const reader = new FileReader();

        reader.onloadend = () => {
          const arrayBuffer = reader.result as ArrayBuffer;

          onRegister(arrayBuffer);

          const blob = new Blob([arrayBuffer], { type: "application/pdf" });
          const url = window.URL.createObjectURL(blob);
          const arquivo = document.createElement("a");

          arquivo.href = url;
          arquivo.download = file.name;

          document.body.appendChild(arquivo);
          arquivo.click();
          window.URL.revokeObjectURL(url);
        };

        reader.readAsArrayBuffer(file);
      } else {
        onRegister(null);
      }
    },
  });

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Detalhes do Evento</h1>
      </div>
      <div className="border border-gray-300 rounded p-4">
        <div className="flex flex-col gap-2">
          <div>
            <span className="text-1xl font-semibold">ID do Evento:</span>{" "}
            {event.id}
          </div>
          <div>
            <span className="text-1xl font-semibold">Título:</span>{" "}
            {event.title}
          </div>
          <div>
            <span className="text-1xl font-semibold">Data:</span> {event.date}
          </div>
          <div>
            <span className="text-1xl font-semibold">Localização:</span>{" "}
            {event.location}
          </div>
          <div>
            <span className="text-1xl font-semibold">Vagas disponíveis:</span>{" "}
            {event.maximumAttendees - event.attendeesAmount}
          </div>
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center">
        <label htmlFor="file" className="font-semibold">
          Upload do Arquivo PDF:
        </label>
        <input
          id="file"
          name="file"
          type="file"
          accept="application/pdf"
          onChange={(event) => {
            if (event.currentTarget.files && event.currentTarget.files[0]) {
              formik.setFieldValue("file", event.currentTarget.files[0]);
              console.log("Arquivo selecionado:", event.currentTarget.files[0]);
            }
          }}
          className="border rounded px-4 py-2 mt-2"
        />
      </form>
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <button
          type="button"
          onClick={() => formik.handleSubmit()}
          className="text-2xl rounded-lg bg-emerald-600 hover:bg-emerald-700 font-bold px-8 w-72 py-1.5 border-2 border-white/[0.5]">
          Inscrever-se
        </button>
      </div>
    </div>
  );
};
