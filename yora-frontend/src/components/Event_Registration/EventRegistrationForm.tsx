import { FC } from "react";
import { Formik, Form } from "formik";

interface EventRegistrationFormProps {
  onSubmit: (name: string, email: string, eventId: string) => void;
}

export const EventRegistrationForm: FC<EventRegistrationFormProps> = ({ onSubmit }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Inscrições</h1>
      <Formik
        initialValues={{ 
          name: '',
           email: '', 
           eventId: ''
          }}
        onSubmit={(values) => {
          onSubmit(values.name, values.email, values.eventId);
        }}
      >
        {({ }) => (
          <Form>
            <div className="flex gap-5 items-center bg-transparent text-white">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome Completo"
                  className="rounded-lg bg-transparent hover:bg-gray-50/[0.7] font-bold px-3 w-72 py-1.5 border-2 border-white/[0.5]"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="rounded-lg bg-transparent hover:bg-gray-50/[0.7] font-bold px-3 w-72 py-1.5 border-2 border-white/[0.5]"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="eventId"
                  placeholder="Código do Evento"
                  className="rounded-lg bg-transparent hover:bg-gray-50/[0.7] font-bold px-3 w-72 py-1.5 border-2 border-white/[0.5]"
                />
              </div>
              <div>
                {/* Placeholder for additional content */}
              </div>
            </div>
            <p><br /></p>
            <button type="submit" className="text-2xl font-bold rounded-lg bg-transparent hover:bg-gray-50/[0.7] font-bold px-8 w-72 py-1.5 border-2 border-white/[0.5]">
              Registrar-se
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
