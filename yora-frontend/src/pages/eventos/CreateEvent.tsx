/**
 * presencial/online
 * max participantes (caso presencial)
 *
 */
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import {
  DESCRICAO_CURTA,
  LOCALIZACAO_CURTA,
  NOME_CURTO,
} from "../../helpers/constantes";

export function CreateEvent() {
  const navigate = useNavigate();
  const createEventFormSchema = z.object({
    eventName: z.string().min(4, NOME_CURTO),
    eventDescription: z.string().min(4, DESCRICAO_CURTA),
    localizacao: z.string().min(4, LOCALIZACAO_CURTA),
    startDate: z.date(),
    endDate: z.date().nullable(),
    hasAnexo: z.boolean().nullable(),
    numMaxParicipantes: z.string().nullable(),
  });
  type CreateUserFormData = z.infer<typeof createEventFormSchema>;
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createEventFormSchema),
  });

  const [output, setOutput] = useState("");
  function createEvent(data: any) {
    console.log(data);

    const url = "http://localhost:3333/events";
    const valuesToSubmit = {
      details: data.eventDescription,
      location: data.localizacao,
      title: data.eventName,
      maximumAttendees: 2,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(valuesToSubmit),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao enviar dados do evento");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Evento enviado com sucesso:", data);
        // Adicione aqui a lógica adicional que deseja após o envio bem-sucedido.
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }
  const [presencial, setPresencial] = useState(false);
  return (
    <div>
      <form
        onSubmit={handleSubmit(createEvent)}
        className="space-y-4 mt-8 wfull max-w-[700px] rounded-3xl">
        <div className="flex flex-col">
          <label
            htmlFor="eventName"
            className="block text-sm font-medium text-gray-700 bg-transparent">
            Nome do Evento
          </label>
          <input
            type="text"
            {...register("eventName")}
            className="mt-1 block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="eventDescription"
            className="block text-sm font-medium text-gray-700">
            Descrição
          </label>
          <textarea
            {...register("eventDescription")}
            rows={4}
            className="mt-1 block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent"></textarea>
        </div>
        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700">
            Data Início
          </label>
          <Calendar className="" {...register("startDate")} />
        </div>
        <div>
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700">
            Data Fim
          </label>
          <Calendar className="" {...register("endDate")} />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="numMaxParicipantes"
            className="block text-sm font-medium text-gray-700 bg-transparent">
            Numero Maxmo de Participantes
          </label>
          <input
            {...register("numMaxParicipantes")}
            type="number"
            className="mt-1 block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent"
          />
        </div>
        <div>
          <input
            type="checkbox"
            {...register("hasAnexo")}
            className="rounded"
          />
          <label htmlFor="hasAnexo">Necessita Anexo</label>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="localizacao"
            className="block text-sm font-medium text-gray-700 bg-transparent">
            Localização
          </label>
          <input
            id="localizacao"
            {...register("localizacao")}
            className="mt-1 block w-full py-2 px-3 border border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent"
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Criar
          </button>
        </div>
      </form>
      {/* <pre className="">{output}</pre> */}
    </div>
  );
}
