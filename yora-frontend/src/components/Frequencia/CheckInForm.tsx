import { FC } from "react";
import { Formik, Form } from "formik";

interface CheckInFormProps {
  onSubmit: (email: string, eventId: string) => void;
}

export const CheckInForm: FC<CheckInFormProps> = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: '', eventId: '' }}
      onSubmit={(values) => {
        onSubmit(values.email, values.eventId);
      }}
    >
      {({ handleSubmit, values, handleChange }) => (
        <Form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex flex-col gap-4 items-center bg-transparent text-white">
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-lg bg-transparent hover:bg-gray-50/[0.7] font-bold px-3 w-full py-1.5 border-2 border-white/[0.5]"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                name="eventId"
                placeholder="Código do Evento"
                className="rounded-lg bg-transparent hover:bg-gray-50/[0.7] font-bold px-3 w-full py-1.5 border-2 border-white/[0.5]"
                value={values.eventId}
                onChange={handleChange}
              />
            </div>
          </div>
          <p><br /></p>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-2xl font-bold rounded-lg bg-transparent hover:bg-gray-50/[0.7] px-8 py-1.5 border-2 border-white/[0.5]"
            >
              Registrar Presença
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
